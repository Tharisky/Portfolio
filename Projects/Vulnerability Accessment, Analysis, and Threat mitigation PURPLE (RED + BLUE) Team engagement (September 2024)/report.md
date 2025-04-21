# Project: Cybersecurity Analysis and Threat Mitigation

### Overview
This project encompasses a comprehensive cybersecurity analysis conducted across multiple tasks, including vulnerability scanning, intrusion detection, incident response, and threat intelligence analysis. The goal was to assess vulnerabilities, detect malicious activities, and provide actionable recommendations to secure systems and networks, with a focus on the healthcare sector. The project demonstrates my proficiency in vulnerability management, intrusion detection, incident response, and threat analysis, using tools like Nessus, Snort, and packet capture analysis.

---

### Task 1: Vulnerability Scanning and Network Discovery with Nessus and Metasploitable-2

#### Lab Setup
The experiment was conducted in a virtualized environment using Oracle VirtualBox. Two machines were configured with bridge adapters to simulate a networked environment:
- **Kali Linux Machine**: Used to host Nessus, a vulnerability scanner developed by Tenable, to identify security flaws such as malware, default configurations, and other vulnerabilities on a target system or network.
- **Metasploitable-2 Machine**: An intentionally vulnerable virtual machine designed for testing purposes, serving as the target for vulnerability assessment.

#### Vulnerability Scanning Process
I utilized Nessus’s "Basic Network Scan" functionality to create a new scan template targeting the Metasploitable-2 machine’s IP address. The scan provided detailed results, including scan summary, hosts, vulnerabilities, remediation plans, notes, and history. Key findings include:
- **Metasploitable-2 Scan Results**: Identified 63 vulnerabilities, with 2 remediation plans and 2 notes.
- **Network-Wide Scan Results**: A broader scan of the network (192.168.110.0/24) revealed 104 vulnerabilities, 5 remediation plans, and 8 notes.

#### Critical Analysis of Vulnerabilities
The scan identified several critical vulnerabilities on Metasploitable-2, including rlogin service detection, TLS Version 1.0 protocol detection, NFS exported share information disclosure, UnrealIRCd backdoor detection, VNC server password issues, SSL Version 2/3 protocol detection, Samba Badlock vulnerability, Debian OpenSSH/OpenSSL weaknesses, and unencrypted Telnet servers. Below is an in-depth analysis of three key vulnerabilities:

1. **Rlogin Service Detection**  
   - **Description**: Rlogin is a remote login protocol that transmits data in plaintext, making it highly susceptible to interception. Nessus rated this vulnerability as high severity with a CVSS score of 6.5.
   - **Potential Consequences**:
     - **Data Exposure**: Plaintext transmission allows attackers to capture sensitive information.
     - **Root Access**: Exploiting rlogin can grant attackers root privileges on the system.
     - **Man-in-the-Middle (MITM) Attacks**: Attackers can intercept and modify data during communication.
   - **Countermeasures**:
     - Disable rlogin and replace it with SSH for encrypted communication.
     - Block rlogin ports (typically port 513) using firewall rules.
     - Implement network monitoring to detect and respond to rlogin attempts.

2. **TLS Version 1.0 Protocol Detection**  
   - **Description**: TLS 1.0 is an outdated protocol vulnerable to attacks like BEAST and POODLE, compromising encrypted data security. This vulnerability has a medium severity rating with a CVSS score of 6.5.
   - **Potential Consequences**:
     - **Data Interception**: Attackers can decrypt and access sensitive data.
     - **Session Hijacking**: Exploiting TLS 1.0 flaws can allow attackers to hijack user sessions.
     - **Compliance Violations**: Using deprecated protocols may violate standards like PCI DSS.
   - **Countermeasures**:
     - Upgrade to secure TLS versions (e.g., TLS 1.2 or 1.3) and disable TLS 1.0.
     - Regularly update software and libraries that use TLS.
     - Review and update server configurations to disable deprecated protocols.

3. **NFS Exported Share Information Disclosure**  
   - **Description**: Misconfigured NFS shares can expose sensitive data or grant unauthorized access to shared directories. This vulnerability is rated critical with a CVSS score of 10.0.
   - **Potential Consequences**:
     - **Data Exposure**: Unauthorized users can access sensitive data in NFS shares.
     - **Privilege Escalation**: Attackers can gain elevated privileges through misconfigured shares.
     - **Network Reconnaissance**: Exposed shares provide attackers with insights into network structure.
   - **Countermeasures**:
     - Restrict NFS share access to specific IP addresses or subnets.
     - Implement strong authentication mechanisms like Kerberos for NFS shares.
     - Conduct regular security audits to ensure proper access controls.
     - Use secure NFS versions (e.g., NFSv4) with enhanced security features.

#### Contemporary Study: Siemens Ruggedcom WIN Products BEAST Attack Vulnerability
A recent vulnerability in Siemens Ruggedcom WIN products involves the BEAST (Browser Exploit Against SSL/TLS) attack, which targets weaknesses in TLS 1.0 and earlier SSL systems. Reported by Dan Frein and Paul Cotter of West Monroe Partners to Siemens ProductCERT, this flaw allows remote exploitation to access a user’s session ID during a web session. When combined with social engineering, attackers can intercept and read traffic between the user and the device. Siemens released a firmware update to address this issue. The impact varies by organization but can lead to unauthorized access, data theft, and disruption of critical operations, especially in industrial control systems.

---

### Task 2: Intrusion Detection and Prevention System (IDPS) with Snort

#### Lab Setup
The experiment was conducted in a virtual environment using VirtualBox, with three machines configured on a bridge adapter within the network 192.168.0.0/24:
- **Kali Linux Machine**: Acted as the attacker, generating ICMP, Nmap, and Hping3 traffic.
- **Ubuntu Machine**: Hosted Snort, an open-source intrusion detection system (IDS), to detect malicious traffic.
- **Metasploitable-2 Machine**: Served as the target receiving the generated traffic.

#### Snort Configuration
Snort was configured to detect various types of malicious traffic by modifying its configuration file (`snort.conf`) and defining custom rules:
- **Local.rules**: Configured to detect TCP connections from external sources to the SSH port (port 22).
- **Dos.rules and DDoS.rules**: Designed to detect denial-of-service (DoS) and distributed denial-of-service (DDoS) attacks, specifically targeting Hping3 traffic.
- **ICMP.rules**: Set up to detect suspicious ICMP ping requests that could indicate a DoS attack.
- **Scan.rules**: Created to identify network scanning activities, such as Nmap scans.

#### Traffic Detection Results
1. **ICMP Traffic Detection**  
   - The Kali machine initiated ICMP traffic using the command `ping 192.168.0.150` targeting Metasploitable-2.
   - Snort on the Ubuntu machine successfully detected this traffic, identifying potential reconnaissance attempts.

2. **Hping3 Traffic Detection**  
   - The Kali machine performed a DoS attack using the command `hping3 --flood --icmp 192.168.0.150`, flooding Metasploitable-2 with ICMP traffic.
   - Snort detected the flood attack, flagging it as malicious activity indicative of a DoS attempt.

3. **Nmap Traffic Detection**  
   - The Kali machine executed an Nmap scan using the command `sudo nmap` against Metasploitable-2.
   - Snort identified the Nmap traffic, alerting on the scanning activity as a potential precursor to an attack.

4. **SSH Traffic Detection**  
   - The Kali machine attempted to log into the `msfadmin` account on Metasploitable-2 via SSH (port 22).
   - Snort detected the TCP connection to port 22, confirming its ability to monitor external SSH access attempts.

#### Analysis of IDS and IPS Effectiveness
- **Intrusion Detection System (IDS)**: IDS monitors network traffic for anomalies or suspicious behavior, alerting administrators to potential threats. It is reactive, focusing on detection rather than prevention, and can be host-based or network-based. IDS provides early threat detection and visibility into network activity.
- **Intrusion Prevention System (IPS)**: IPS extends IDS capabilities by actively blocking malicious traffic based on predefined rules. It can be network-based (deployed at gateways) or host-based (installed on individual systems). IPS offers proactive defense by stopping attacks in real time.
- **Effectiveness**: IDS and IPS are critical for detecting and mitigating various attacks, such as DoS, DDoS, and reconnaissance scans. However, their effectiveness depends on proper configuration, timely rule updates, and integration with other security tools to address evolving threats.

---

### Task 3: Threat Intelligence Analysis for the Healthcare Sector

#### Analysis of Industry Reports
This task involved analyzing the Verizon Data Breach Investigations Report (DBIR) 2023, CrowdStrike Global Threat Report 2023, and IBM X-Force Threat Intelligence Index 2023 to identify cybersecurity trends, threats, and vulnerabilities in the healthcare sector.

#### Predominant Trends in Healthcare
1. **Ransomware Attacks**: Healthcare remains a prime target for ransomware due to the sector’s willingness to pay ransoms to restore critical services. The DBIR 2023 notes an increase in the frequency and sophistication of these attacks.
2. **Phishing and Social Engineering**: Phishing is a leading attack vector, with 41% of incidents starting with phishing (IBM X-Force). Healthcare employees are often targeted with emails designed to steal credentials or deploy malware.
3. **Insider Threats**: Both malicious and inadvertent insider actions contribute to breaches, as employees or contractors with access to sensitive data can cause accidental or intentional leaks.
4. **Extortion Tactics**: Extortion accounts for 27% of impacts (IBM X-Force), with ransomware operators encrypting data and threatening to release it, pressuring healthcare organizations to comply.
5. **Geopolitical Influence**: Geopolitical tensions, such as the Russia-Ukraine conflict, have led to a rise in hacktivism and destructive malware targeting healthcare.

#### Malware in Healthcare
- **Ransomware**: A primary threat, distributed via phishing, software vulnerabilities, and RDP attacks, causing financial losses, reputational damage, and service disruptions.
- **Trojans and Backdoors**: Trojans, particularly those stealing credentials, are prevalent. IBM X-Force notes that backdoors (e.g., Emotet) account for 21% of incidents, enabling persistent access and data exfiltration.

#### Root Causes of Malware Vulnerabilities
1. **Phishing**: The primary initial access vector (41% of incidents, IBM X-Force), exploiting human vulnerabilities through social engineering.
2. **Public-Facing Applications**: 26% of incidents involve exploiting vulnerabilities in unpatched or misconfigured public-facing applications.
3. **Initial Access Brokers (IABs)**: CrowdStrike highlights that IABs lower the barrier to entry for attackers by providing pre-compromised access points.

#### Recommendations
1. **Threat Intelligence**: Invest in comprehensive threat intelligence to understand attackers’ motives, capabilities, and tools beyond basic indicators of compromise (IOCs).
2. **Cyber Hygiene**: Implement multi-factor authentication (MFA), regular patching, and strong passwords to reduce malware risks.
3. **Employee Training**: Conduct ongoing training on phishing, social engineering, and safe internet practices to mitigate insider threats.
4. **Incident Response Planning**: Develop and regularly test incident response plans to ensure swift recovery from ransomware and malware attacks.
5. **Network Segmentation**: Segment networks and restrict access to sensitive data to limit malware spread.
6. **Advanced Threat Detection**: Deploy SIEM and EDR systems for continuous monitoring and rapid threat response.

---

### Task 4: Incident Response Management

#### Packet Capture Analysis
I analyzed two packet capture files (`Networkcapture3.pcap` and `Networkcapture2.pcap`) to identify malicious and suspicious network activity.

1. **Networkcapture3.pcap Analysis**  
   - **Unsuccessful Connection Attempts**: From IP 192.168.56.102:34227 to multiple ports on 192.168.56.102 (e.g., 554, 8888, 110, 22), packets 31–87 show TCP SYN attempts followed by RST, ACK responses, indicating the ports were closed or unexpected. Port 21 responded with a SYN-ACK, confirming it was open, suggesting an Nmap SYN scan for open port discovery.
   - **Unsuccessful Login Attempts**: Packets 115–140 show login attempts to 192.168.56.102:21 from 192.168.56.1 using various passwords (e.g., “eeeeeeea”, “eeeeeeeeO”), indicative of a brute-force attack on the FTP port.

2. **Networkcapture2.pcap Analysis**  
   - **Suspicious FTP Interaction (192.168.56.102 to 192.168.56.101)**: Packet 1 shows a TCP FIN/ACK from the attacker to close an FTP connection on port 21, with no prior SYN packet, suggesting an Nmap FIN scan. The destination responded with errors (e.g., "500 OOPS", "child died") and received RST packets, confirming port 21 was open.
   - **Connection and Brute-Force Attempts (192.168.56.1 to 192.168.56.101)**: Packet 87 initiates a TCP SYN to port 21, followed by a successful handshake (packets 90–91). Subsequent packets (94–96) show repeated connection attempts to port 1889, with the server responding with a "220 (vsFTPd 2.0.7)" message and errors. Packets 99–100 indicate abrupt TCP RST and RST-ACK, suggesting an attempt to exploit or disrupt the FTP server. Packets 101–133 show multiple failed login attempts, confirming a brute-force attack.

#### Incident Response Model Evaluation
I evaluated the CyBOK Incident Response Management model, inspired by NIST SP 800-61, which outlines three phases: anticipating incidents, responding to incidents, and following up. This model was applied to the scenario involving port scanning and brute-force attacks on the FTP port.

1. **Anticipating Incidents**:
   - Implement strong access controls, such as unique passwords and MFA for FTP services.
   - Conduct regular security audits and employee training to identify and mitigate vulnerabilities like open ports.

2. **Responding to Incidents**:
   - Establish an incident response team with clear reporting procedures.
   - Use network traffic analysis and log reviews to assess the attack’s scope.
   - Block the attacker’s IP, apply patches to vulnerable services, and enhance security controls.

3. **Following Up**:
   - Perform a root cause analysis to identify lessons learned.
   - Update security policies and incident response plans based on the findings.

#### Summary of Malicious and Suspicious Behavior
- **Networkcapture3**:
  - Scanning attempts (packets 31–87, 192.168.56.1 to 192.168.56.102).
  - Brute-force login attempts on FTP (packets 134–140, 192.168.56.1 to 192.168.56.102).
- **Networkcapture2**:
  - FIN/ACK to close FTP connection (packet 1, 192.168.56.102 to 192.168.56.101).
  - FTP server errors indicating issues (packets 2–5, 192.168.56.102 to 192.168.56.101).
  - TCP RST flood to check port status (packets 6–9, 192.168.56.102 to 192.168.56.101).
  - Connection attempts to FTP port 21 (packet 87, 192.168.56.1 to 192.168.56.101).
  - Repeated probing on FTP port (packets 94–96, 192.168.56.1 to 192.168.56.101).
  - Brute-force login attempts (packets 101–133, 192.168.56.1 to 192.168.56.101).

---

### Key Takeaways
- **Vulnerability Management**: Identifying and mitigating vulnerabilities, such as outdated protocols and misconfigured services, is critical to securing systems.
- **Intrusion Detection**: Tools like Snort are effective for detecting malicious traffic, but their success relies on proper configuration and rule updates.
- **Threat Intelligence**: Understanding trends like ransomware and phishing in healthcare informs better defense strategies.
- **Incident Response**: Structured models like CyBOK ensure a systematic approach to handling security incidents, from preparation to recovery.

---

