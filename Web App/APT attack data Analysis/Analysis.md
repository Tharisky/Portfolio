

## Analysis: Advanced Persistent Threat (APT) Dataset for Path Traversal Attacks

### Overview

This analysis examines an Advanced Persistent Threat (APT) dataset containing logs of web attacks targeting a **Damn Vulnerable Web Application (DVWA)** system, stored in `Book1.csv`. The dataset captures common web attacks, specifically **path traversal** attempts, aimed at accessing sensitive files. The analysis identifies attack patterns, methods, vulnerabilities, timelines, Indicators of Compromise (IoCs), and generates YARA rules to detect similar threats.

#### Objectives
1. Identify and analyze attacks (e.g., path traversal).
2. Determine attacker geographical locations using IP addresses.
3. Analyze attacker methods to compromise systems.
4. Identify targeted vulnerabilities.
5. Create a timeline of attack events and identify patterns.
6. Extract IoCs and propose countermeasures.
7. Generate YARA rules based on IoCs.
8. Visualize findings for clarity.

#### Dataset Overview
- **File**: `Book1.csv`
- **Columns**: `timestamp`, `agent.name`, `full_log`, `rule.description`, `rule.mitre.tactic`, `rule.mitre.technique`, `rule.mitre.id`, etc.
- **Attack Type**: Common web attacks (path traversal attempts).
- **Source IP**: `192.168.204.1` (private IP, limiting geolocation).

---

### Analysis

#### 1. Identification and Analysis of Attacks
The dataset indicates **path traversal attacks** targeting the `/DVWA/vulnerabilities/xss_r/` endpoint via HTTP GET requests. The `name` parameter in the query string contains encoded strings attempting to access sensitive files, such as `/etc/passwd`, `boot.ini`, and `hosts`.

- **Attack Type**: Path Traversal
- **Description**: Attackers use encoded sequences (e.g., `%2e%2e`, `%f8%80%80%80%af`) to navigate the file system and access restricted files.
- **Targeted Files**:
  - Linux: `/etc/passwd`, `/etc/issue`
  - Windows: `boot.ini`, `windows/system32/drivers/etc/hosts`
- **Encoding Techniques**:
  - URL encoding (`%2e%2e` for `..`)
  - Unicode encoding (`%u2216`, `%f0%80%80%af`)
  - Custom encodings (`%bg%qf`, `%c1%af`)

**Visualization**: A bar chart of the top 10 targeted files was generated to understand the attack focus.  
- **File**: `target_files.png` (placeholder; generated in the notebook).

#### 2. Geographical Location of Attackers
All attacks originate from the private IP address `192.168.204.1`, which falls within the `192.168.0.0/16` range, typically used in local networks. This prevents geolocation since private IPs are not routable on the public internet.

- **Geolocation Attempt**: Using a GeoIP database (e.g., MaxMind's GeoLite2), the IP was identified as private, yielding no geographical data.
- **IP Distribution**: All requests originate from `192.168.204.1`, suggesting a single attacker or a local network proxy.

#### 3. Methods Used by Attackers
Attackers employ **path traversal** techniques to access sensitive files by manipulating the `name` parameter in HTTP GET requests. Key methods include:

- **Directory Traversal**: Using `..` (encoded as `%2e%2e`) to navigate up directories.
- **Encoding Obfuscation**:
  - URL encoding (e.g., `%2e%2e%f8%80%80%80%af`)
  - Unicode encoding (e.g., `%u2216` for `\`)
  - Custom encodings (e.g., `%bg%qf`, `%c0%af`)
- **Targeting System Files**: Attempts to access configuration files on both Linux and Windows systems.
- **Exploiting XSS Endpoint**: Using the `/xss_r/` endpoint, intended for reflected XSS, to inject traversal payloads.

**Visualization**: A bar chart of the top 10 encoding patterns was generated to analyze obfuscation techniques.  
- **File**: `encodings.png` (placeholder; generated in the notebook).

#### 4. Vulnerabilities Targeted
The attacks exploit vulnerabilities in the DVWA application:

- **Path Traversal Vulnerability**: The `/xss_r/` endpoint fails to sanitize the `name` parameter, allowing directory traversal.
- **Reflected XSS Vulnerability**: The endpoint, designed for XSS demonstrations, is misused to inject traversal payloads.
- **Improper Input Validation**: Lack of validation for encoded inputs enables obfuscated payloads.

**MITRE ATT&CK Mappings**:
- **T1055**: Process Injection
- **T1083**: File and Directory Discovery
- **T1190**: Exploit Public-Facing Application

**Visualization**: A bar chart of MITRE ATT&CK techniques was generated to summarize the attack methods.  
- **File**: `mitre_techniques.png` (placeholder; generated in the notebook).

#### 5. Timeline of Events
The attacks occurred on October 5, 2023, from 20:21:43 to 20:21:46, spanning just 3 seconds.

- **Observations**:
  - **High-Frequency Attacks**: Multiple requests per second indicate automated scanning or scripted attacks.
  - **Target Variation**: Rapid switching between Linux and Windows file paths suggests OS enumeration.
  - **Pattern**: Sequential attempts with increasing directory depth and varied encodings.

**Visualization**: A line plot of attack frequency per second was generated to illustrate the timeline.  
- **File**: `attack_timeline.png` (placeholder; generated in the notebook).

#### 6. Indicators of Compromise (IoCs) and Countermeasures
##### IoCs
- **Source IP**: `192.168.204.1` (useful in a local network context)
- **URL Patterns**:
  - `/DVWA/vulnerabilities/xss_r/?name=<encoded_path>`
  - Encoded paths targeting `/etc/passwd`, `boot.ini`, etc.
- **User-Agent**: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Safari/537.36`
- **Encoding Signatures**: `%2e%2e`, `%f8%80%80%80%af`, `%u2216`, `%bg%qf`, `%c0%af`

**IoCs were saved to**: `iocs.json` (structured JSON file generated in the notebook).

##### Countermeasures
1. **Input Sanitization**: Validate and sanitize the `name` parameter to prevent path traversal.
2. **Web Application Firewall (WAF)**: Deploy a WAF to detect and block encoded traversal attempts.
3. **File Access Controls**: Restrict application access to sensitive directories.
4. **Logging and Monitoring**: Enhance logging to detect repeated failed attempts.
5. **Patch Management**: Update DVWA or similar applications to fix known vulnerabilities.
6. **Network Segmentation**: Isolate vulnerable systems to limit lateral movement.

#### 7. YARA Rules
A YARA rule was created to detect similar path traversal attempts in web logs, focusing on URL patterns, encoding signatures, and targeted file names.

**YARA Rule**: `Path_Traversal_DVWA`
```yara
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
```
**Saved to**: `path_traversal.yara`

#### 8. Visualizations
The analysis includes several visualizations to clarify findings:
- **Target Files**: Bar chart of the top 10 targeted files (`target_files.png`).
- **Encoding Patterns**: Bar chart of the top 10 encoding techniques (`encodings.png`).
- **MITRE Techniques**: Bar chart of ATT&CK techniques (`mitre_techniques.png`).
- **Attack Timeline**: Line plot of attack frequency over time (`attack_timeline.png`).
- **Heatmap**: Heatmap of attack attempts by target file and encoding type (`attack_heatmap.png`).

---

### Interesting Fact
An unexpected finding was the attacker’s use of **multiple encoding schemes** (`%f8%80%80%80%af`, `%u2216`, `%bg%qf`) within a 3-second timeframe. This suggests a sophisticated, automated tool testing various obfuscation techniques to bypass input validation, highlighting the importance of robust decoding and sanitization in web applications.

---

### Conclusion
This analysis reveals a concentrated path traversal attack campaign targeting a DVWA system on October 5, 2023. Key findings include:
- **Attack Type**: Path traversal exploiting the `/xss_r/` endpoint.
- **Geolocation**: Limited by private IP (`192.168.204.1`).
- **Methods**: Encoded directory traversal with varied encodings.
- **Vulnerabilities**: Lack of input sanitization and misuse of the XSS endpoint.
- **Timeline**: High-frequency, automated attacks over a few seconds.
- **IoCs**: Specific URL patterns, encodings, and user-agent.
- **Countermeasures**: Input validation, WAF deployment, and access controls.
- **YARA Rule**: Created to detect similar attacks.

This analysis underscores the need for robust web application security and proactive monitoring to mitigate such threats.

---
