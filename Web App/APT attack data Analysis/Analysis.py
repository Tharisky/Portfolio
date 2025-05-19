#!/usr/bin/env python3
"""
APT.py - Advanced Persistent Threat (APT) Dataset Analysis Script

This script analyzes a dataset of web attacks targeting a DVWA system to identify
path traversal attacks, attacker methods, vulnerabilities, timelines, IoCs, and generates
YARA rules. It produces visualizations and saves IoCs and YARA rules to files.

Requirements:
- pandas
- matplotlib
- seaborn
- geoip2
- Python 3.8+

Dataset:
- File: Book1.csv (place in the same directory as this script)
- Columns: timestamp, agent.name, full_log, rule.description, rule.mitre.tactic, etc.

Output Files:
- Visualizations: target_files.png, encodings.png, mitre_techniques.png, attack_timeline.png, attack_heatmap.png
- IoCs: iocs.json
- YARA Rule: path_traversal.yara
"""

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from urllib.parse import unquote
from datetime import datetime
import geoip2.database
import re
import json
import os

# Ensure the script runs in the correct directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Set up visualization style
plt.style.use('seaborn')

def load_data():
    """Load the dataset and display basic information."""
    try:
        df = pd.read_csv('Book1.csv')
        print("Dataset Info:")
        print(df.info())
        print("\nFirst 5 Rows:")
        print(df.head())
        return df
    except FileNotFoundError:
        print("Error: Book1.csv not found. Please place it in the same directory as APT.py.")
        exit(1)

def analyze_attacks(df):
    """Identify and analyze path traversal attacks by extracting targeted files."""
    def extract_name_param(log):
        match = re.search(r'name=([^&]+)&', log)
        return unquote(match.group(1)) if match else None

    df['target_file'] = df['full_log'].apply(extract_name_param)
    target_counts = df['target_file'].value_counts().head(10)

    # Visualize target file distribution
    plt.figure(figsize=(10, 6))
    target_counts.plot(kind='bar', color='skyblue')
    plt.title('Top 10 Targeted Files in Path Traversal Attacks')
    plt.xlabel('Target File')
    plt.ylabel('Number of Attempts')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.savefig('target_files.png')
    plt.close()
    print("Target file distribution saved to target_files.png")

def geolocation_analysis(df):
    """Attempt to geolocate the attacker IP and analyze IP distribution."""
    # Extract IP addresses
    ip_counts = df['full_log'].str.extract(r'(\d+\.\d+\.\d+\.\d+)')[0].value_counts()
    print("\nIP Address Distribution:")
    print(ip_counts)

    # Attempt geolocation
    ip = '192.168.204.1'  # Hardcoded as per dataset
    try:
        reader = geoip2.database.Reader('GeoLite2-City.mmdb')
        response = reader.city(ip)
        print(f'Country: {response.country.name}')
    except FileNotFoundError:
        print("GeoLite2-City.mmdb not found. Geolocation skipped.")
    except geoip2.errors.AddressNotFoundError:
        print(f'Geolocation failed: {ip} is a private IP address.')

def analyze_methods(df):
    """Analyze attacker methods by extracting encoding patterns."""
    def extract_encoding(log):
        match = re.search(r'name=([^&]+)&', log)
        if match:
            return re.findall(r'(%[0-9a-fA-F]{2}|%u[0-9a-fA-F]{4}|%[a-zA-Z]{2}%[a-zA-F]{2})', match.group(1))
        return []

    df['encodings'] = df['full_log'].apply(extract_encoding)
    encoding_counts = df['encodings'].explode().value_counts().head(10)

    # Visualize encoding patterns
    plt.figure(figsize=(10, 6))
    encoding_counts.plot(kind='bar', color='salmon')
    plt.title('Top 10 Encoding Patterns in Attacks')
    plt.xlabel('Encoding Pattern')
    plt.ylabel('Frequency')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.savefig('encodings.png')
    plt.close()
    print("Encoding patterns saved to encodings.png")

def analyze_vulnerabilities(df):
    """Analyze targeted vulnerabilities using MITRE ATT&CK mappings."""
    df['mitre_techniques'] = df['rule.mitre.technique'].str.split(',')
    mitre_counts = df['mitre_techniques'].explode().str.strip().value_counts()

    # Visualize MITRE techniques
    plt.figure(figsize=(8, 5))
    mitre_counts.plot(kind='bar', color='lightgreen')
    plt.title('MITRE ATT&CK Techniques Used')
    plt.xlabel('Technique')
    plt.ylabel('Frequency')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    plt.savefig('mitre_techniques.png')
    plt.close()
    print("MITRE techniques saved to mitre_techniques.png")

def timeline_analysis(df):
    """Create a timeline of attack events."""
    df['timestamp'] = pd.to_datetime(df['timestamp'], format='%b %d, %Y @ %H:%M:%S.%f')
    timeline = df.groupby(df['timestamp'].dt.floor('S')).size()

    # Visualize timeline
    plt.figure(figsize=(12, 6))
    timeline.plot(kind='line', marker='o', color='purple')
    plt.title('Attack Frequency Over Time (Per Second)')
    plt.xlabel('Timestamp')
    plt.ylabel('Number of Attacks')
    plt.xticks(rotation=45)
    plt.grid(True)
    plt.tight_layout()
    plt.savefig('attack_timeline.png')
    plt.close()
    print("Attack timeline saved to attack_timeline.png")

def extract_iocs(df, encoding_counts):
    """Extract Indicators of Compromise (IoCs) and save to a JSON file."""
    iocs = {
        'Source_IP': ['192.168.204.1'],
        'URL_Patterns': df['full_log'].str.extract(r'(GET /DVWA/vulnerabilities/xss_r/\?name=[^ ]+)').dropna()[0].unique().tolist(),
        'User_Agent': df['full_log'].str.extract(r'"(Mozilla/5.0[^"]+)"').dropna()[0].unique().tolist(),
        'Encodings': encoding_counts.index.tolist()
    }

    with open('iocs.json', 'w') as f:
        json.dump(iocs, f, indent=4)

    print("\nIoCs saved to iocs.json")
    print(json.dumps(iocs, indent=4))

def generate_yara_rule():
    """Generate a YARA rule to detect path traversal attempts."""
    yara_rule = """
rule Path_Traversal_DVWA
{
    meta:
        description = "Detects path traversal attempts targeting DVWA XSS endpoint"
        author = "Grok"
        date = "2025-04-21"
    strings:
        $url = "GET /DVWA/vulnerabilities/xss_r/" ascii
        $param = "name=" ascii
        $encode1 = "%2e%2e" ascii
        $encode2 = "%f8%80%80%80%af" ascii
        $encode3 = "%u2216" ascii
        $encode4 = "%bg%qf" ascii
        $encode5 = "%c0%af" ascii
        $file1 = "etc/passwd" ascii
        $file2 = "boot.ini" ascii
        $file3 = "windows/system32/drivers/etc/hosts" ascii
        $file4 = "etc/issue" ascii
    condition:
        $url and $param and any of ($encode*) and any of ($file*)
}
"""

    with open('path_traversal.yara', 'w') as f:
        f.write(yara_rule)

    print("\nYARA rule saved to path_traversal.yara")

def create_heatmap(df):
    """Create a heatmap of attack attempts by target file and encoding type."""
    df['encoding_type'] = df['encodings'].apply(lambda x: x[0] if x else 'None')
    pivot = df.pivot_table(index='target_file', columns='encoding_type', aggfunc='size', fill_value=0)

    plt.figure(figsize=(12, 8))
    sns.heatmap(pivot, cmap='YlOrRd', annot=True, fmt='d')
    plt.title('Heatmap of Attack Attempts by Target File and Encoding Type')
    plt.xlabel('Encoding Type')
    plt.ylabel('Target File')
    plt.tight_layout()
    plt.savefig('attack_heatmap.png')
    plt.close()
    print("Heatmap saved to attack_heatmap.png")

def main():
    """Main function to execute the APT dataset analysis."""
    print("Starting APT Dataset Analysis...\n")
    
    # Load data
    df = load_data()
    
    # Analyze attacks
    print("\nAnalyzing Attacks...")
    analyze_attacks(df)
    
    # Geolocation analysis
    print("\nPerforming Geolocation Analysis...")
    geolocation_analysis(df)
    
    # Analyze attacker methods
    print("\nAnalyzing Attacker Methods...")
    analyze_methods(df)
    encoding_counts = df['encodings'].explode().value_counts().head(10)
    
    # Analyze vulnerabilities
    print("\nAnalyzing Targeted Vulnerabilities...")
    analyze_vulnerabilities(df)
    
    # Timeline analysis
    print("\nCreating Attack Timeline...")
    timeline_analysis(df)
    
    # Extract IoCs
    print("\nExtracting Indicators of Compromise...")
    extract_iocs(df, encoding_counts)
    
    # Generate YARA rule
    print("\nGenerating YARA Rule...")
    generate_yara_rule()
    
    # Create heatmap
    print("\nCreating Heatmap Visualization...")
    create_heatmap(df)
    
    print("\nAnalysis Complete
