# Penetration Test Report for Client Solution Agency

### Overview

Cyber Career Fair (CCF) conducted a penetration test for Client Solution Agency, a medium-sized law firm with multiple offices across the nation. The firm’s web application enables clients to access legal resources, schedule appointments, and submit confidential documents, while attorneys and staff use it to manage cases and communicate with clients. The application stores sensitive personal information and staff credentials but does not handle financial data. This report details the information gathering, vulnerabilities identified, exploits performed, and recommendations to enhance the security posture of the web application. My contributions highlight expertise in penetration testing, vulnerability assessment, and mitigation strategies.

---

### Part A: Information Gathering

#### 1. OSINT Activities
Open-Source Intelligence (OSINT) was used to gather publicly available information without direct interaction, minimizing detection risk.

- **DNS Reconnaissance via WHOIS**: Queried the WHOIS database for domain details.  
  - **Findings**:  
    - Domain Name: `CWSCENARIO.SITE`  
    - Registry Domain ID: `D268362727-CNIC`  
    - Registrant Country: Great Britain  
  - **Figure 1**: WHOIS Result (Placeholder for Image)

- **DNS Enumeration via DNSenum**: Used DNSenum to gather domain information.  
  - **Findings**: Identified host addresses, name servers, and mail (MX) servers.  
  - **Figure 2**: DNSenum Result (Placeholder for Image)

- **DNS Enumeration via theHarvester**: Leveraged theHarvester to discover additional details.  
  - **Findings**: Uncovered subdomains and IP addresses associated with the domain.  
  - **Figure 3**: theHarvester Result (Placeholder for Image)

- **Effectiveness of OSINT**: OSINT enables discreet reconnaissance, laying the groundwork for targeted attacks by leveraging publicly available data (e.g., social media, public databases).

- **Scenario Assessment**:  
  - **Subdomains**: Provide attackers with specific targets for exploitation.  
  - **IP Addresses**: Enable targeted attacks like DDoS or server vulnerability exploitation.  
  - **Name Servers**: Facilitate DNS-related attacks or domain hijacking.  
  - **Host Servers**: Reveal configurations for potential exploitation.  
  - **Registry Domain**: Exposes registration details for social engineering or hijacking.

#### 2. Active Reconnaissance
Active reconnaissance involved direct interaction with the target to uncover vulnerabilities.

- **Information Gathering from Source Code**: Analyzed the web application’s source code.  
  - **Findings**: Discovered data leaks containing usernames and passwords in `users.txt` and `pass.txt`.  
  - **Figure 4**: Homepage Source Code (Placeholder for Image)

- **Enumerating Files and Directories**: Used DirBuster to discover files and directories.  
  - **Findings**: Identified hidden files and directories on the server.  
  - **Figure 5**: Files and Directories Discovered (Placeholder for Image)

- **Taking Advantage of robots.txt**: Analyzed the `robots.txt` file to identify hidden areas.  
  - **Findings**: Revealed directories like `/jotto` and `/cgi-bin`, potentially exposing sensitive areas (e.g., admin panels, backups).  
  - **Figures 6-8**: robots.txt, jotto Directory, cgi-bin Directory (Placeholders for Images)

- **Scenario Assessment**:  
  - **Credentials in Source Code**: Enable unauthorized access and privilege escalation, risking sensitive legal data.  
  - **robots.txt**: Exposes hidden directories, allowing attackers to target sensitive areas like case files or admin panels.

#### 3. Scanning and Enumeration
Scanning and enumeration identified vulnerabilities and gathered system information.

- **Scanning Open Ports**: Used Nmap to identify open ports.  
  - **Findings**:  
    - Port 22 (SSH): Secure Shell for network services.  
    - Port 80 (HTTP): Web communication.  
    - Port 139 (NetBIOS-SSN): Local network communication.  
    - Port 143 (IMAP): Email retrieval.  
    - Port 445 (Microsoft-DS): Active Directory and file sharing.  
    - Port 8080 (HTTP-Proxy): Web traffic intermediary.  
    - Port 8081 (BlackIce-ICECAP): Intrusion detection system component.  
  - **Figure 7**: Open Ports (Placeholder for Image)

- **Scanning Filtered Ports**: Adjusted Nmap parameters to identify filtered ports.  
  - **Findings**:  
    - Port 67 (DHCPC): Dynamic IP assignment.  
    - Port 137 (NetBIOS-NS): Name resolution.  
    - Port 138 (NetBIOS-DGM): Connectionless communication.  
  - **Figure 8**: Filtered Ports (Placeholder for Image)

- **Enumerating Services on Open Ports**: Probed open ports for service details.  
  - **Findings**: Retrieved service versions and configurations.  
  - **Figure 9**: Version of Services (Placeholder for Image)

- **Threats to Open Ports**:  
  - **Unauthorized Access**: Exploiting service vulnerabilities for access.  
  - **Data Exfiltration**: Stealing data via open ports.  
  - **DoS Attacks**: Overwhelming services with traffic.  
  - **Information Disclosure**: Exposing sensitive configurations.

- **Scenario Assessment**:  
  - **HTTP (Port 80)**: Vulnerable to HTTP flooding, header injection, or XSS, risking access to legal documents.  
  - **NetBIOS-SSN (Port 139)**: Exposes file shares to unauthorized access, risking document compromise.  
  - **IMAP (Port 143)**: Susceptible to email enumeration or phishing, risking attorney-client communications.  
  - **Microsoft-DS (Port 445)**: Vulnerable to SMB attacks (e.g., EternalBlue), risking data access.  
  - **HTTP-Proxy (Port 8080)**: Allows traffic interception or manipulation, risking data integrity.  
  - **BlackIce-ICECAP (Port 8081)**: Can be bypassed, weakening security defenses.  
  - **DHCP (Port 67)**: Susceptible to DHCP spoofing or starvation, risking network connectivity.

---

### Part B: Identified Vulnerabilities

#### 1. Data Tampering
- **Test**: Intercepted traffic on the DVWA login page using OWASP Mantra, modifying user credentials.  
  - **Figures 10-11**: DVWA Login Page, Intercepted Traffic (Placeholders for Images)  
- **Research**: Data tampering vulnerabilities allow unauthorized data modification, violating the cybersecurity tenet of **integrity**.  
- **Scenario Assessment**: Attackers can:  
  - Alter client data (e.g., names, case details), leading to incorrect legal advice or disputes.  
  - Modify legal documents, risking invalid agreements or liabilities.  
  - Manipulate communication records, fabricating evidence or instructions.  
  - Change credentials for unauthorized access and escalation.

#### 2. SQL Injection (SQLi)
- **Test**: Tested a DVWA form for SQLi using payloads via Hackbar, exposing usernames and hashes.  
  - **Figures 12-14**: Vulnerable Form, Error Response, Usernames and Hashes (Placeholders for Images)  
- **Research**: SQLi allows attackers to inject malicious SQL code, undermining **integrity** and **confidentiality** by manipulating or stealing data.  
- **Scenario Assessment**: Attackers can:  
  - Steal client data, risking privacy violations.  
  - Access authentication credentials for unauthorized entry.  
  - Gain administrative control, compromising app integrity.  
  - Gather system information for further attacks.

#### 3. Cross-Site Scripting (XSS)
- **Test**: Tested the Security Shepherd page for XSS using payloads. An initial attempt failed due to filtering of the word “script,” but a second payload (`<IMG SRC="#" ONERROR="alert('Vulnerable to XSS')"/>`) succeeded.  
  - **Figures 15-16**: XSS Attack Failed, XSS Attack Completed (Placeholders for Images)  
- **Research**: XSS allows malicious script injection, violating **integrity** and **availability** by tampering with web content.  
- **Scenario Assessment**: Attackers can:  
  - Steal client session cookies or input data, compromising accounts.  
  - Access sensitive legal documents, risking privacy breaches.  
  - Manipulate communications, undermining attorney-client privilege.

#### 4. Other Vulnerabilities
- **Remote File Inclusion (RFI)**: Identified by editing the application URL to include the Vicnum index folder.  
  - **Figure 17**: RFI Identified (Placeholder for Image)  
  - **Assessment**: RFI allows execution of remote files, violating **integrity** by enabling unauthorized code execution.  
- **OS Command Injection**: Discovered in a form allowing arbitrary command execution.  
  - **Figure 18**: OS Command Injection (Placeholder for Image)  
  - **Assessment**: Allows attackers to execute OS commands, violating **confidentiality** and **availability** by granting server control and disrupting services.

#### 5. Cryptanalysis Attack
- **Test**: Cracked a ciphertext on Security Shepherd using key 13, revealing the plaintext.  
  - **Figures 19-20**: Security Shepherd, Result Key (Placeholders for Images)  
- **Scenario Assessment**:  
  - **Data Breach**: Exposes sensitive data (e.g., client information, legal records).  
  - **Loss of Confidentiality**: Compromises data secrecy, risking reputational damage and loss of trust.

---

### Part C: Denial of Service (DoS) Attack
- **Test**: Used hping3 to perform a DoS attack on the web server, increasing CPU usage from 13% to 48%, causing unresponsiveness.  
  - **Figures 21-23**: CPU Usage Before Attack, hping3, CPU Usage After Attack (Placeholders for Images)  
- **Cybersecurity Tenet Violated**: **Availability**—DoS attacks disrupt service access for legitimate users.  
- **Scenario Assessment**:  
  - **Disruption of Services**: Prevents clients and staff from accessing legal resources, scheduling appointments, or managing cases.  
  - **Loss of Revenue**: Inaccessibility drives clients to competitors, causing financial losses.

---

### Part D: Client Exploits

#### 1. Man-in-the-Middle (MitM) Attack
- **Test**: Used Wireshark to capture traffic on `eth0`, intercepting an HTTP POST request with user credentials.  
  - **Figures 24-26**: Wireshark, Captured Traffic, Captured Credentials (Placeholders for Images)  
- **Scenario Assessment**: Attackers can:  
  - Steal client credentials, compromising account security.  
  - Intercept confidential documents, risking privacy breaches.  
  - Access case details and communications, violating attorney-client privilege.

#### 2. Social Engineering Attack
- **Test**: Used Site Cloner to clone a webpage and redirect users, capturing their credentials.  
  - **Figure 27**: Captured Credentials (Placeholder for Image)  
- **Scenario Assessment**: Manipulates employees into divulging credentials, leading to unauthorized access, financial losses, and reputational damage.

---

### Part E: Recommendations

#### 1. Reconnaissance Mitigation
- **Implement Domain Privacy**: Mask WHOIS details to prevent exposure of registration information.  
- **Regular DNS Monitoring and Security**: Monitor DNS records and implement DNS security solutions to prevent spoofing, hijacking, and cache poisoning.

#### 2. Port Knocking
- **Obscurity**: Hide services by keeping ports closed until a specific knocking sequence is received, reducing visibility to attackers.  
- **Reduced Attack Surface**: Minimize exposure by limiting port access, mitigating threats like unauthorized access and exploitation.

#### 3. SQL Injection Mitigation
- **Validate User Input**: Treat all input as untrustworthy, avoiding blacklist-based filtering.  
- **Use Modern Technologies**: Leverage the latest development environments with enhanced security features.

#### 4. XSS Mitigation
- **Input Filtering**: Scrutinize user input for permissible formats.  
- **Output Data Encoding**: Encode user-controlled data in HTTP responses (e.g., HTML, URL, JavaScript, CSS encoding) to prevent malicious interpretation.

#### 5. Cryptanalysis Mitigation
- **Strong Encryption Algorithms**: Use AES for symmetric encryption and RSA/ECC for asymmetric encryption.  
- **Cryptographic Salts**: Apply salts to password hashes to prevent rainbow table attacks.

#### 6. MitM Mitigation
- **Encryption**: Use HTTPS, SSL/TLS, and VPNs to encrypt communications.  
- **Strong Authentication**: Enforce multi-factor authentication (MFA) to secure access.

#### 7. Social Engineering Mitigation
- **Security Awareness Training**: Educate employees on social engineering tactics (e.g., phishing, impersonation).  
- **Phishing Simulations**: Test employee susceptibility and provide targeted training.  
- **Multi-Factor Authentication (MFA)**: Require MFA for accessing sensitive systems.

#### 8. DoS Mitigation
- **DDoS Mitigation Services**: Use specialized vendors to filter malicious traffic.  
- **Traffic Monitoring and Anomaly Detection**: Identify and mitigate abnormal traffic patterns in real-time.  
- **Rate Limiting and Throttling**: Control request rates to prevent server overload.

#### 9. IDS vs. IPS for DoS Mitigation
- **Intrusion Detection System (IDS)**: Monitors traffic and alerts on threats but does not block them (passive).  
- **Intrusion Prevention System (IPS)**: Actively blocks threats in real-time (active).  
- **Recommendation**: Use an IPS for DoS mitigation due to:  
  - **Real-Time Response**: Blocks malicious traffic during a DoS attack, preventing server overload.  
  - **Proactive Protection**: Automatically mitigates threats, ensuring service availability.

---


