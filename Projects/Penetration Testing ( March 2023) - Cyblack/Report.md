
## Penetration Testing Report: Yellowstone (Conducted by Cyblack Team 5, January 2023)

### Overview

This report details a penetration testing engagement conducted by Cyblack’s Team 5 during a January 2023 internship for Yellowstone (company name and IP withheld). The objective was to identify and exploit vulnerabilities on Yellowstone’s target server to gain superuser access, while adhering to ethical hacking principles. The scope included active reconnaissance and exploitation in a virtual environment, with a directive to report but not exploit denial-of-service (DoS) vulnerabilities to avoid service outages. This project showcases my skills in penetration testing, vulnerability assessment, privilege escalation, and secure remediation strategies.

**Team Members**  
- Tharisky (Team Lead)  
- Other team members (names withheld)

---

### Executive Summary

Penetration testing, also known as ethical hacking, involves authorized techniques to identify exploitable weaknesses in a target’s security systems. The Cyblack Team 5 was tasked with gaining superuser access on Yellowstone’s server by identifying and exploiting vulnerabilities. Key activities included reconnaissance, bypassing security controls, probing for weaknesses, exploiting vulnerabilities, and escalating privileges.

**Scope of Engagement**  
- Perform active reconnaissance and exploitation within the virtual environment.  
- Report any DoS vulnerabilities without exploitation to prevent service outages.

**Key Findings**  
- Unsecured ports (FTP on port 21, HTTP on port 80) were vulnerable to attacks like unauthenticated access and cross-site scripting.  
- Hidden directories (e.g., `robots.txt`, `login.html`) exposed sensitive information.  
- Weak credentials on the login page were easily brute-forced.  
- Exposed SSH and MySQL credentials were found on the homepage and in `authenticate.php`.  
- Sudo privileges on a non-root account (`cyblack-user`) allowed privilege escalation via the `tar` binary.  
- CVE vulnerabilities (e.g., CVE-2021-29041, CVE-2021-41617) posed risks to confidentiality, integrity, and availability.

**Recommendations**  
- Replace FTP with SFTP and HTTP with HTTPS to secure data transfer.  
- Use stronger credentials on the login page and enforce public key authentication for SSH.  
- Delete bash history after each session and remove exposed credentials from the website.  
- Patch open ports periodically and remove sudo privileges from non-root accounts.  
- Upgrade services to address CVE vulnerabilities and deploy intrusion detection/prevention systems (IDS/IPS).

**Task Visualization**  
![Picture 1](https://github.com/Tharisky/Portfolio/blob/main/Projects/Penetration%20Testing%20(%20March%202023)%20-%20Cyblack/.assets/Picture1.png)


---

### Chapter 1: Key Findings and Recommendations

#### Key Findings

During the penetration test, the following vulnerabilities were identified:  
- **Unsecured Ports**: FTP (port 21) and HTTP (port 80) were vulnerable to unauthenticated access, cross-site scripting, SQL injections, and DDoS attacks.  
- **Hidden Directories**: `robots.txt` and `login.html` were discovered, exposing a login page.  
- **Weak Credentials**: The login page used easily brute-forced credentials (`admin:password`).  
- **Exposed Credentials**:  
  - SSH credentials were visible on the homepage.  
  - MySQL database credentials were found in `authenticate.php`.  
- **User Enumeration**: Two users were identified on the server: `root` and `cyblack-user`.  
- **Flags Discovered**:  
  - A flag was found in the `cyblack-user` home directory.  
  - A `root.txt` file was found in the root directory after privilege escalation.  
- **Database Access**: Three user credentials were extracted from the MySQL database, though they were not server users.  
- **Sudo Privilege Misconfiguration**: The `tar` binary had sudo privileges on the `cyblack-user` account, enabling privilege escalation.  

#### Recommendations

- Replace FTP with SFTP and HTTP with HTTPS to encrypt data transfers.  
- Enforce stronger credentials on the login page and use public key authentication for SSH.  
- Delete bash history after each session to prevent exposure of command history.  
- Patch open ports periodically to mitigate malicious attacks.  
- Remove exposed SSH and MySQL credentials from the homepage and website directory.  
- Remove sudo privileges from non-root accounts to prevent privilege escalation.  
- Upgrade services to address CVEs and deploy IDS/IPS for enhanced monitoring.

---

### Chapter 2: Vulnerability Register

| **Service/Port**      | **Severity** | **Impact**                                                                 | **Recommendation**                          |
|-----------------------|--------------|---------------------------------------------------------------------------|---------------------------------------------|
| **FTP Service/21**    | High         | Unauthenticated file copying, cross-site scripting, brute-forcing passwords | Update service version, disable anonymous login |
| **Apache HTTP Server/80** | High     | Unauthenticated root access, cross-site scripting, SQL injections, DDoS, CSRF | Install the latest version                  |
| **SSH/22**            | Medium       | Unauthorized access via leaked keys or brute-forcing                     | Use public key authentication               |
| **Weak Login Credentials** | High    | Easily brute-forced, leading to unauthorized access                      | Enforce stronger credentials                |
| **Exposure of Credentials** | High   | Facilitates attacker access to accounts                                  | Securely store or document credentials      |
| **Sudo Privilege on Non-Root Account** | High | Enables privilege escalation                                          | Apply least privilege to non-root users     |
| **CVE-2021-29041**    | High         | Agent forwarding vulnerability risking confidentiality, integrity, availability | Patch/upgrade the service                   |
| **CVE-2021-41617**    | High         | Privilege escalation via OpenSSH helper programs                         | Use IDS/IPS for monitoring                  |
| **CVE-2021-36368**    | Low          | FIDO authentication bypass in OpenSSH (pre-8.9)                          | Regular scans and updates                   |

#### Technical Details

- **Open Port 21 (FTP)**  
  The FTP service allowed anonymous login, enabling unauthorized access to sensitive files. This high-severity vulnerability risks data confidentiality and integrity. **Mitigation**: Disable anonymous login and require authentication for all users.

- **Open Port 22 (SSH)**  
  SSH was vulnerable to brute-force attacks due to weak authentication mechanisms. Exposed credentials on the homepage exacerbated the risk. **Mitigation**: Enforce strong password policies, implement two-factor authentication, use public key authentication, and deploy rate limiting or IP blocking to prevent brute-force attacks.

- **Weak Login Credentials**  
  The login page used weak credentials (`admin:password`), which were brute-forced using Burp Suite. An SSH login was discovered post-sign-in. **Mitigation**: Use complex, unique credentials and implement account lockout mechanisms.

- **Exposure of Credentials**  
  SSH credentials were exposed on the homepage, and MySQL credentials were found in `authenticate.php`, enabling easy account access. **Mitigation**: Remove exposed credentials and store them securely.

- **Sudo Privilege on Non-Root Account**  
  The `tar` binary had sudo privileges on the `cyblack-user` account, allowing privilege escalation to root. **Mitigation**: Remove sudo privileges from non-root accounts.

---

### Chapter 3: Testing Timeline

#### Part A: Reconnaissance (Port/Service Scanning)

**Objective**: Gather information about the target system.  
**Steps**:  
- Used a Linux virtual machine terminal.  
- Executed the command: `sudo nmap -O x.x.x.x` (IP withheld).  
- Identified open ports and services:  
  - Port 21: FTP  
  - Port 22: SSH  
  - Port 25: SMTP  
  - Port 80: HTTP  
  - Port 587: Submission  

**Visualization**:  
![Picture 2]( https://github.com/Tharisky/Portfolio/blob/main/Projects/Penetration%20Testing%20(%20March%202023)%20-%20Cyblack/.assets/Picture2.png)


#### Part B: Web Content Discovery

**Objective**: Identify hidden directories and content on the website.  
**Steps**:  
- Used Gobuster to enumerate directories with the command:  
  `gobuster dir --url http://x.x.x.x --wordlist big.txt -t20` (IP withheld).  
- Discovered `robots.txt`, which led to a hidden directory: `login.html`.  
- Accessed `login.html` in a browser, revealing a login page.  
- Brute-forced the login page using Burp Suite, obtaining credentials: `admin:password`.  
- Post-login, found exposed SSH credentials on the homepage.  

**Visualization**:  
![Picture 2]( https://github.com/Tharisky/Portfolio/blob/main/Projects/Penetration%20Testing%20(%20March%202023)%20-%20Cyblack/.assets/Picture3.png)


#### Part C: Linux Enumeration, Exploitation, and Privilege Escalation

**Objective**: Gain initial access, enumerate the system, and escalate privileges.  
**Steps**:  
- Accessed the server via SSH using the discovered credentials.  
- Enumerated the system:  
  - Kernel version and Linux distribution using standard commands.  
  - Users and services with `cat /etc/passwd`: Identified `root` and `cyblack-user` as users, and MySQL as a service.  
- Found a flag in the `cyblack-user` home directory.  
- Navigated to `/var/www/html/` to inspect website files; discovered MySQL credentials in `authenticate.php`.  
- Accessed the MySQL database with `mysql -u admin -p`, finding three website user credentials (not server users).  
- Downloaded `LinEnum.sh` to the server using a SimpleHTTPServer for automated enumeration:  
  - Identified a sudo privilege on the `tar` binary.  
- Exploited the `tar` vulnerability using:  
  `sudo tar -cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/bash` (adapted from GTFOBins).  
- Gained root access and retrieved a flag from the root directory (`root.txt`).  

---

### Conclusion

The penetration test revealed critical vulnerabilities in Yellowstone’s server, including unsecured ports, weak credentials, exposed credentials, and sudo privilege misconfigurations, which could lead to security breaches and system compromise. Prompt remediation of these vulnerabilities is essential to secure the environment. Additionally, penetration testing should be conducted regularly to address new threats and vulnerabilities as they emerge.

---

### Appendix 1: Tools Used

- **Oracle VM VirtualBox**: A virtualization platform for running the Linux virtual machine.  
- **Nmap**: Network scanning tool to identify open ports and services.  
- **Gobuster**: Brute-force scanner for enumerating hidden directories and files on the web server.  
- **Burp Suite**: Platform for security testing of web applications, used for brute-forcing credentials.  
- **MySQL**: Used to access and enumerate the database.  
- **LinEnum.sh**: Script for automating Linux enumeration and identifying privilege escalation vectors.

---























