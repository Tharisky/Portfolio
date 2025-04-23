
## Project: Network Security and Infrastructure Analysis for Merged Financial and Software Companies

### Overview

This project focuses on assessing and enhancing the network security and infrastructure of two merged companies: Company A, a global financial services provider, and Company B, a provider of specialized software for medical providers. The merger introduces challenges such as scalability, compliance with PCI DSS and HIPAA, and the need for a secure network design. This project identifies vulnerabilities, proposes a merged network topology, and implements secure design principles to address emerging threats, regulatory requirements, and budgetary constraints. My contributions demonstrate expertise in network security, vulnerability assessment, infrastructure design, and compliance management.

---

### Task A: Network Security and Infrastructure Problems

#### Company A: Network Security Problems

- **Denial of Service (DoS)**: Overloading network resources with bogus traffic could make Company A’s website unavailable, disrupt internal operations, and block access to customer account information.
- **Data Breaches**: As a financial company handling sensitive customer data, Company A is a prime target for attackers. A data breach could expose financial data, leading to significant financial losses for both customers and the company.
- **Single Point of Failure**: Relying solely on on-premises infrastructure without cloud redundancy risks service disruptions, preventing customers from accessing accounts or conducting transactions.
- **Noncompliance with Regulatory Standards**: Failure to comply with PCI DSS, a key standard for the financial sector, could result in regulatory fines, legal consequences, or reputational damage.

#### Company A: Infrastructure Problems

- **Scalability**: The absence of cloud infrastructure limits Company A’s ability to expand globally, especially post-merger with Company B, as the rigid on-premises network struggles with increased traffic.
- **Redundancy**: Lack of duplicated critical infrastructure increases the risk of downtime during faults or attacks, impacting service availability.
- **Lack of VPN for Remote Desktop Access**: Enabling Remote Desktop Protocol (RDP) without a VPN exposes the network to unauthorized access, brute-force attacks, and eavesdropping, as communication with the internal VLAN is unsecured.

#### Company B: Network Security Problems

- **Phishing Attacks**: These attacks could trick users into revealing sensitive information, potentially granting unauthorized access to Company B’s servers and exposing medical providers’ credit card details.
- **Weak or Common Credentials**: Using eight-character passwords violates PCI DSS and NIST guidelines, making accounts vulnerable to brute-force attacks and risking noncompliance.

#### Company B: Infrastructure Problems

- **Third-Party Support for Infrastructure**: Relying on third-party infrastructure introduces security and compliance risks, as vulnerabilities could expose payment records and client credit card information.
- **Lack of Dedicated Cybersecurity Role**: Without a cybersecurity professional, Company B lacks oversight of its security posture, increasing vulnerability to unauthorized access and attacks.

---

### Task B: Vulnerability Assessment

#### Company A: Identified Vulnerabilities

1. **Open Ports 21-90, 3389**  
   - **Impact**:
     - Attackers can probe these ports (e.g., FTP on port 21, Telnet on port 23, HTTP on port 80) to gather information or exploit outdated services, gaining access to servers.
     - Unsecured ports like Telnet lack encryption, making data in transit vulnerable to man-in-the-middle (MITM) attacks, eavesdropping, or redirection.
   - **Risks**:
     - Unauthorized access to servers.
     - Unintended file disclosure.
     - Compromise of data confidentiality and integrity.
   - **Likelihood**: Extremely high, as open ports are often targeted during reconnaissance and scanning phases of cyberattacks.

2. **Unrequired User Accounts Not Removed**  
   - **Impact**:
     - Dormant accounts can be exploited to gain persistent access to company infrastructure.
   - **Risks**:
     - Compromised confidentiality of sensitive financial data.
     - Increased potential for unauthorized access.
   - **Likelihood**: Medium, as attackers may need to identify these accounts through reconnaissance.

#### Company B: Identified Vulnerabilities

1. **MFA Not Enforced Across All Users**  
   - **Impact**:
     - Attackers can brute-force credentials or use phishing to gain unauthorized access to resources like workstations and servers.
     - Compromised workstations could lead to unauthorized transactions, credit card fraud, or theft of trade secrets (e.g., software source code).
   - **Risks**:
     - Weakened security posture, making resources more accessible to attackers.
     - Financial losses from unauthorized transactions or credit card exposure.
     - Disruption of operations due to account takeovers or data breaches.
   - **Likelihood**: High, given Company B’s handling of credit card data and trade secrets, making it a prime target for cybercriminals.

2. **PostgreSQL Admin Reachable from the Internet**  
   - **Impact**:
     - Attackers can exploit weak credentials or vulnerabilities to gain unauthorized access to the database.
     - Data integrity may be compromised, as attackers could manipulate or delete data, undermining trust in the database.
   - **Risks**:
     - Credential harvesting from the database for unauthorized communications or transactions.
     - Reputational damage and loss of client trust due to exposure of sensitive credit card details.
   - **Likelihood**: High, as internet-facing databases are easily discoverable and exploitable using automated tools.

---
### TASK C

![Network_Topology](https://github.com/user-attachments/assets/fd9a069a-9718-40ff-a3bc-b6adbc6bd2f0)



### Task D: Network Components and Their Roles

The proposed network topology includes the following components, with their roles and OSI/TCP-IP layer mappings:

- **IPS (Intrusion Prevention System)**: Monitors and prevents malicious network activity. Operates at the **Network Layer** (OSI and TCP/IP models).
- **VPN Tunnel**: Provides a secure, encrypted connection over the internet. Operates at the **Network Layer** (tunnel establishment, OSI and TCP/IP), **Presentation Layer** (encryption/decryption, OSI), and **Transport Layer** (encryption/decryption, TCP/IP).
- **ISP Router**: Connects the private network to the internet. Operates at the **Network Layer** (OSI and TCP/IP).
- **Servers (CDE, Application, Database)**: Provide services and resources to clients. Operate at the **Application Layer** (OSI and TCP/IP).
- **Switch**: Connects devices within a LAN. Operates at the **Data Link Layer** (OSI and TCP/IP).
- **Meraki Access Point**: Enables WiFi devices to connect to the wired network. Operates at the **Data Link Layer** (OSI and TCP/IP).
- **Sophos Firewall**: Monitors and filters network traffic based on rules. Operates at the **Network Layer** (OSI and TCP/IP).
- **Active Directory Server**: Manages user accounts, policies, and security configurations. Operates at the **Application Layer** (OSI and TCP/IP).
- **2FA Server**: Manages two-factor authentication processes. Operates at the **Application Layer** (OSI and TCP/IP).
- **Printers**: Produce hard copies of documents. Operate at the **Application Layer** (OSI and TCP/IP).
- **Laptops and Desktops**: Client devices accessing network resources. Operate at the **Application Layer** (OSI and TCP/IP).
- **VPN Client**: Software enabling secure connections to a VPN server. Operates at the **Presentation Layer** (OSI and TCP/IP).
- **VPN Gateway**: Facilitates connections between VPN clients and servers. Operates at the **Presentation Layer** (OSI and TCP/IP).
- **MFP/Copier**: Combines scanning, copying, and faxing functionalities. Operates at the **Application Layer** (OSI and TCP/IP).

---

### Task E: Network Component Modifications and Budgetary Considerations

The following modifications were made to the merged network topology, addressing security, compliance, and budgetary constraints:

1. **Added Cloudflare Web-App Firewall**  
   - **Cost**: $20/month ($240/year).  
   - **Purpose**: Protects the external web server from malicious traffic.  
   - **Budget Impact**: Reduces risks of attacks, minimizing incident response and recovery costs.

2. **Replaced Exchange and SharePoint Servers with Microsoft 365 Business Basic**  
   - **Cost**: $6/month per user ($72/year per user, $7,200/year for 100 users).  
   - **Purpose**: Enhances scalability for Company A’s expansion, replacing legacy on-premises servers.  
   - **Budget Impact**: Subscription-based model offers predictable costs compared to on-premises server maintenance.

3. **Added Two Cisco L-ASA5512-IPS-SSP Devices**  
   - **Cost**: $1,160 per unit ($2,320 total).  
   - **Purpose**: Detects and prevents anomalies in traffic to/from the server segment and internal network.  
   - **Budget Impact**: Enhances security, reducing potential costs of breaches.

4. **Replaced One Fortinet Firewall with Two Sophos XGS 126w Firewalls in Company A**  
   - **Purpose**: Achieves high availability and redundancy. Sophos firewalls have a higher rating (4.7/5) compared to Fortinet (4.6/5) and are more cost-effective.  
   - **Budget Impact**: Two Sophos firewalls are more economical than two Fortinet firewalls.

5. **Replaced Border Router 7600 with Cisco2911-v/k9**  
   - **Cost**: $1,722.10.  
   - **Purpose**: The Cisco 7600 reached end-of-life, requiring a modern replacement.  
   - **Budget Impact**: Ensures long-term support and reliability.

6. **Separated Servers into VLANs**  
   - **Purpose**: Achieves micro-segmentation to enhance security by isolating server traffic.  
   - **Budget Impact**: No additional cost, as it leverages existing infrastructure.

7. **Separated Guest WiFi from Corporate WiFi**  
   - **Purpose**: Segments enterprise traffic from guest traffic to improve security.  
   - **Budget Impact**: No additional cost, as it uses existing wireless infrastructure.

8. **Migrated Company B Servers to Google Cloud (e2-standard-2)**  
   - **Cost**: $48.91/month ($586.92/year).  
   - **Purpose**: Enables scalability and accessibility for both companies.  
   - **Budget Impact**: More cost-effective than purchasing new hardware for Company B’s virtual servers.

9. **Added OpenVPN (Standard Version)**  
   - **Cost**: $70/month ($840/year).  
   - **Purpose**: Secures remote desktop access, preventing eavesdropping.  
   - **Budget Impact**: Affordable solution to address a critical security gap.

10. **Repurposed SharePoint and Exchange Servers into 2FA and Active Directory Servers**  
    - **Purpose**: Enhances access control and authentication.  
    - **Budget Impact**: Saves costs by avoiding new hardware purchases.

11. **Added Two Dell PowerEdge R720 Servers as CDE Servers**  
    - **Cost**: $762 per unit ($1,524 total).  
    - **Purpose**: Ensures PCI DSS compliance through segmented storage of cardholder data, both on-premises and in the cloud.  
    - **Budget Impact**: Balances compliance needs with cost efficiency.

---

### Task F: Secure Network Design Principles

The proposed topology incorporates the following secure design principles:

- **Defense in Depth**: Multiple security layers (IPS, firewalls, VPNs) protect against various threats across different OSI layers.
- **Zero Trust**: Assumes no inherent trust, achieved through micro-segmentation, continuous monitoring via IPS, and a 2FA server for strict access control.
- **Economy of Principle**: Keeps the design simple and manageable to reduce security flaws, ensuring clear connections between components.

---

### Task G: Regulatory Compliance

The topology addresses the following regulatory requirements:

- **PCI DSS (Payment Card Industry Data Security Standard)**:  
  - Relevant for the merged company’s financial services and credit card transactions.  
  - Compliance achieved by:
    - Deploying dedicated, segmented CDE servers for cardholder data.
    - Using IPS for continuous network monitoring.

- **HIPAA (Health Insurance Portability and Accountability Act)**:  
  - Relevant for Company B’s software services to healthcare providers, involving patient data.  
  - Compliance achieved by:
    - Micro-segmenting the network to limit access to health-related data.

---

### Task H: Emerging Threats and Mitigation

#### Identified Threats

1. **Advanced Persistent Threats (APTs)**  
   - **Description**: Sophisticated, targeted attacks by well-funded groups aiming to steal financial data, customer information, or intellectual property.  
   - **Impact**: Financial losses, reputational damage, regulatory consequences, and network congestion from data exfiltration.  
   - **Mitigation**: Prioritize regular risk assessments and vulnerability management to detect and respond to APTs.

2. **Ransomware**  
   - **Description**: Malware that encrypts systems or files, demanding ransom for access. Often delivered via phishing or vulnerabilities.  
   - **Impact**: Loss of financial data, operational disruptions, compromised customer trust, regulatory noncompliance, and reduced network performance.  
   - **Mitigation**: Implement regular backups and develop an incident response plan to ensure data recovery.

---

### Task I: Overview of Merged Topology and Justification

#### Topology Overview

The proposed network topology enhances Company A’s on-premises infrastructure while migrating Company B’s infrastructure to the cloud for scalability and communication:

- The external web server is isolated from the internal network and protected by a Cloudflare Web-App Firewall.
- Two Sophos XGS 126w firewalls and IPS devices monitor traffic to/from the internal network and DMZ switch (hosting servers).
- Active Directory and 2FA servers enforce strict access controls.
- CDE servers ensure segmented storage of cardholder data.
- Company B’s internal network is limited to workstation-printer communication, with all other interactions routed through the Google Cloud infrastructure.
- Microsoft 365 replaces legacy SharePoint and Exchange servers for modern collaboration.

#### Justification for Recommendations

- **Micro-Segmentation of Web Servers**: Isolates external access and protects against web application attacks via the Cloudflare firewall.
- **Enhanced On-Premises Infrastructure**: Maintains continuity for Company A while improving security with additional firewalls and IPS.
- **Cloud Migration for Company B**: Introduces scalability and flexibility, enabling seamless communication with Company A.
- **IPS and Access Controls**: Continuous monitoring and strict authentication (via Active Directory and 2FA) strengthen security.
- **CDE Segmentation**: Ensures PCI DSS compliance by isolating cardholder data.
- **Microsoft 365 Adoption**: Modernizes collaboration with a scalable, cloud-based solution, improving efficiency.

#### Cost-Benefit Analysis

- **Cloud Infrastructure and Services**: Subscription fees (e.g., Google Cloud at $586.92/year, Microsoft 365 at $7,200/year for 100 users) enhance collaboration, communication, and productivity.
- **On-Premises Infrastructure**: New components (e.g., CDE servers at $1,524, Sophos firewalls, 2FA/AD servers) incur operational costs but improve security and compliance, reducing breach-related expenses.
- **Staff Training for Microsoft 365**: May cause short-term disruptions and training costs but ensures long-term efficiency gains.

The proposed topology balances improved security, compliance, and scalability with manageable costs, including subscription fees, hardware investments, and operational expenses.

---

























