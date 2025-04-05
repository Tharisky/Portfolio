# Penetration Testing report 

 

## Section 1: Penetration Test Design and Scenario
This section covers the penetration test design and scenario


### Penetration Test Scenario
Risky_Corporations is a medium-sized company that specializes in software development. They have an internal network infrastructure that includes various servers and workstations. As part of their commitment to security, Risky_Corporations has requested an internal network penetration test to identify and address any vulnerabilities that malicious actors could potentially exploit.

### Objective
This penetration test aims to identify and exploit vulnerabilities within Risky_Corporations'  server, assessing all  open ports and running services. The goal is to assess the effectiveness of their current security controls and provide recommendations for improving their overall security posture.

### Scope
The penetration test will be conducted solely within the internal network environment, focusing on all ports and services explicitly listed in the provided asset list. The assessment will specifically target the server located at the IP address 192.168.0.136. Any additional services not documented in the asset list but discovered during the testing process, including web applications, will be considered out of scope for the assessment.  Note that it is possible to test all the components of an internal network, or to focus on some elements.(Vaadata 2023).

### Assets and Dependency
The Assets include 
1. Web server: A server hosting Apache web server, tomcat web server, Postfix mail server, MySQL and PostgreSQL database.
2. Workstation
3. Router


____
Figure 1.1  Assets Dependecy 


### Potential Vulnerabilities for the assets and their possible exploitation within the assets dependencies
1. Risky_Corporations Server: g

a. Apache Web Server: Common vulnerabilities in Apache can include misconfigurations, outdated software versions, or vulnerable plugins/modules. Exploitation can lead to unauthorized access, denial of service (DoS), or remote code execution.

b. Tomcat Web Server: Vulnerabilities in Tomcat may arise due to weak authentication, session management issues, or known exploits targeting specific versions. Exploitation can result in data exposure or server compromise.

c. Postfix Mail Server: Vulnerabilities in Postfix might involve email spoofing, denial of service via mail flood, or remote code execution through crafted email content. Exploitation can lead to unauthorized access or disruption of email services.

d. MySQL and PostgreSQL Databases: Vulnerabilities in databases could stem from SQL injection, weak authentication, or outdated software. Exploitation may result in unauthorized data access, manipulation, or deletion.

2. Workstations: Vulnerabilities on workstations often involve outdated software, phishing attacks, or weak passwords. Exploitation can lead to malware infection, data theft, or unauthorized access.

3. Router: Vulnerabilities in routers could include default credentials, outdated firmware, or misconfigured access control lists (ACLs). Exploitation can result in unauthorized access to network traffic, DNS hijacking, or complete compromise of the network.

   ____
### The Possible test  cases relevant to the scenario
The following are the possible tests that will be carried out to ensure that Risky_Corporations's server is resilient in the face of cyber attacks.

1. Service Enumeration: This aims to identify all open ports and  services running on the Risky_Corporations server using tools like Nmap. This would be considered a gray box test as some prior information about the active services was given already
2. Exploitation Testing	Attempts to exploit the discovered vulnerabilities on the Risky_Corporations's server using exploit modules available in Metasploit. This would be considered a gray box as prior information was given about the potential vulnerabilities that would be exploited during the course of the test
3. Database Security Assessment: This performs SQL injection testing on MySQL and PostgreSQL databases to validate input sanitization.	White Box testing is appropriate for assessing database security because testers have full knowledge of the internal structure, schema, and access controls of the databases. This allows for a detailed examination of security configurations, SQL injection vulnerabilities, and privilege escalation risks.
4. Password Cracking Tools like Hydra would be used in attempts to crack passwords on various services such as SSH, FTP, or Telnet.	This would be considered a black box test as no prior credentials were provided as part of the needed credentials for a successful password attack

Table 1.2 Test Cases
____ 

### How Each Stage of the Penetration Testing methodology will be carried out

The stages of  Penetration testing include reconnaissance, scanning, gaining access, maintaining access, and clearing tracks. (EC-Council, 2022)
1. Reconnaissance: This involves gathering information about the target system to identify potential vulnerabilities and attack vectors. Using tools like Nmap to scan the target network for open ports, services, and operating systems, an active reconnaissance would be carried out on the Risky_Corporations server.
2. Scanning: This involves probing the target system for vulnerabilities and weaknesses identified during the reconnaissance phase. Using tools like Nessus to identify known vulnerabilities, Smtp-user-enum would be  used to discover valid users  on the Risky_Corporations server.
3. Gaining Access: This  involves exploiting vulnerabilities identified during the reconnaissance and scanning phases to gain unauthorized access to the target system. This would be done using exploits targeting specific vulnerabilities in the target's software or configurations,  attempting to guess usernames and passwords for services like SSH or FTP using automated tools like Hydra. To escalate privilege, accounts with sudo permissions would be used to switch to the root users, VNC credentials would be harvested and exploited to gain root access, and vulnerable services running on privileged ports would be exploited.
4. Maintaining Access: This  involves establishing persistent access to the target system to ensure continued control even after initial access is lost. This would be achieved  utilizing the backdoor shells  contained on the target system, and  using a tool called nano to modify the sshd_config file to allow the use of ssh keys on the root account at a later time. 
5. Clearing Tracks: This involves covering up evidence of the attacker's presence on the target system to avoid detection and forensic analysis. This would be done by  using the rm tool to delete the  SSH or Apache log files and bash history command 

### Considering Red and Blue team-based testing for the test cases

1. Service Enumeration:

a. Red Team (Attackers): Actively scan for open ports and services using tools like Nmap to identify potential attack vectors.

b. Blue Team (Defenders): Monitor network traffic and logs for unauthorized service discovery attempts and ensure unnecessary services are disabled.

2. Exploitation Testing:

a. Red Team (Attackers): Exploit vulnerabilities in target systems using tools like Metasploit to demonstrate the impact of successful attacks.

b. Blue Team (Defenders): Deploy intrusion detection systems to detect and block exploit attempts, and ensure systems are promptly patched.

3. Password Cracking:

a. Red Team (Attackers): Attempt to crack passwords using tools like John the Ripper to highlight the risks of weak passwords.

b. Blue Team (Defenders): Enforce strong password policies, monitor authentication logs, and conduct user awareness training on password security.

4. Database Security Assessment:
   
a. Red Team: Exploit SQL injection vulnerabilities in MySQL and PostgreSQL databases to access or manipulate sensitive data.

b. Blue Team: Implement input validation and parameterized queries to prevent SQL injection attacks, monitor database activity for suspicious behavior, and enforce least privilege access controls.

### Types of malware that can breach the system 
Some of the malware that can breach the server  includes:
1. Trojans: Malicious software disguised as legitimate programs, used to steal information or gain unauthorized access.
2. Worms: Self-replicating malware that spreads across networks, exploiting vulnerabilities to infect other systems.
3. Rootkit: Malware that hides its presence and gives attackers privileged access to compromised systems, often for spying or further attacks.
4. Ransomware: Malware that encrypts files or locks users out of their systems, demanding ransom payments for restoration.
5. Botnets: Networks of compromised computers controlled by attackers, used for various malicious activities like DDoS attacks, spamming, or spreading malware.








# Section 2: Execution of the Penetration Tests

This section encompass the penetration carried out on Happiee web app in details, the test follows the methodology discussed in class, and the stages of the test includes:
1. Reconnaissance and scanning
2. Gaining Access
3. Maintaining Access
4. Clearing Tracks

# Reconnaissance and Scanning 
During this stage, Risky_Corporations examined and analyzed to obtain information needed to proceed with the test. Nmap,  powerful scanning tool, was used to scan the assets to capture information about them. Goburster was also used to enumerate hidden directories on the website  The tools used during this phase includes: 
1. Goburster: Gobuster is a tool primarily used for directory and file brute-forcing on web servers. It was used to discover hidden files and directories on Risky_Corporations web server.
2. Nmap: Nmap is a powerful open-source network scanning tool used for network discovery and security auditing. It was used to discover the services running on Risky_Corporations server
3. Smtp-user-enum: The Smtp-User-Enum is a tool used to discover valid users  on a target mail server.


Table 2.1 Reconnaissance and Scanning tools








 The information gathered during this phase includes: 
1.Service enumeration using nmap: This action was carried out to get information about the running services and open ports on Risky_Corporations's server.

Figure 2.1 Nmap result


Information	Description
Port 21 (ftp)
Version: vsftpd 2.3.4
	File Transfer Protocol (FTP) is used for transferring files between a client and a server on a network.
Port 22 (ssh)
Version: OpenSSH 4.7p1	 Secure Shell (SSH) provides secure access to a remote computer or server over an encrypted connection.
Port 23(telnet) 
Version: Linux Telnetd	Telnet is a network protocol used for remote terminal access. However, it's insecure as data is transmitted in plaintext.
Port 25(smtp)
Version: Postfix smtpd	Simple Mail Transfer Protocol (SMTP) is used for sending email messages between servers.
Port 53(domain)
Version: ISC bind 9.4.2
	Domain Name System (DNS) resolves domain names to IP addresses and vice versa.
Port 80(http)
Version: Apache httpd 2.2.8 (DAV/2)
	Hypertext Transfer Protocol (HTTP) is the foundation of data communication on the World Wide Web, used for accessing web pages.
Port 111(rpc Bind)
Version:2(RPC #100000)
	Port 111 is used for the RPC Bind service, facilitating remote program execution over a network. 
Port 139, 445  (netbios -ssn)
Samba smbd 3.x - 4.x 	NetBIOS session service facilitates communication between devices on a local network, often used for file and printer sharing.

Ports 512 (Exec)	Traditionally used for remote execution services on UNIX systems, allowing users to execute commands on a remote system.
Port 513 (Shell)	Historically used for remote login services on UNIX systems, enabling users to log in remotely to a system
Port 514( Login)	This port is used for remote shell services on UNIX systems, providing users with interactive shell access to a remote system.
Port 1099 (java -rmi)	Port 1099 is commonly associated with Java Remote Method Invocation (RMI), a mechanism that allows Java objects to invoke methods on remote Java objects operating in different Java virtual machines (JVMs), possibly on different hosts. It facilitates communication between Java applications distributed across a network.
Port 1524 (ingreslock?)
Version:GNU Classpath grmiregistry
	Port 1542 is associated with the IngresLock service, which is a part of the Ingres Database Management System (DBMS). IngresLock is responsible for managing locks within the Ingres database to ensure data integrity and prevent conflicts between concurrent transactions.
Port 2049 (nfs)
Version:  2-4(RPC #100003)	NFS is a Network File Sharing protocol that allows users to share directories and files over the network across different operating systems
Port 2121 (ftp)
Version: ProFTPD 1.3
	Port 2121 is an alternative port often used for FTP (File Transfer Protocol) services. 
Port 3306 (mysql)
Version: MySql 5.0.51a -3ubuntu5	MySQL is a popular open-source relational database management system, and port 3306 is the default port for MySQL server.
Port 5432 (postgresql)
Version: PostgreSQL  DB 8.3.0 - 8.3.7	PostgreSQL is an open-source object-relational database system, and port 5432 is the default port for PostgreSQL server.
Port 5900 (vnc)
Version: VNC (protocol) 3.3 
	Virtual Network Computing (VNC) allows remote desktop access to another computer over a network.
Port 6000 (x11)	Port 6000 is commonly associated with the X Window System (X11), which is a widely-used windowing system for bitmap displays in UNIX-like operating systems. X11 allows users to run graphical applications remotely, enabling the display of graphical user interfaces (GUIs) from a remote system on a local machine.
Port 6667 (IRC)
Version: UnrealIRCd	Internet Relay Chat (IRC) is a protocol used for real-time text messaging and chatting over the Internet.
Port 8009 (ajp13)	Port 8009 is typically associated with the Apache JServ Protocol version 1.3 (AJP13). AJP is a binary protocol that allows communication between a web server (like Apache HTTP Server) and a servlet container (like Apache Tomcat).
Port 8180(http)
Version: Apache Tomcat/ Coyote JSP engine 1.1	Port 8180 is commonly associated with HTTP (Hypertext Transfer Protocol) service, which is used for serving web pages and other resources over the internet or a local network

Table 2.2  Open ports and running service discovered on Risky_Corporations’s server Using Nmap

2.Web pages discovery: The Nmap scan revealed an open port 80. Subsequently, a scan was initiated to probe for hidden directories using Gobuster. However, no additional actions were pursued on the webpages, as they fell outside the defined scope of the assessment.

Figure 2.2 Goburster scan





3.User enumeration: Following user enumeration conducted with the Smtp-User-Enum tool, the valid users identified are incorporated into the wordlist essential for brute-force attacks.

Figure 2.3 SMTP-ENUM scan

2. 2. Gaining Access
This  section involves exploiting vulnerabilities identified during the reconnaissance and scanning phases to gain unauthorized access to the target system. This was done by:  
1.Password Cracking:  Attempting to guess usernames and passwords for services like SSH or FTP using automated tools like Hydra.
2.Exploitation Testing: Leveraging publicly available exploits, vulnerabilities present in Risky_Corporations's server services or configuration were exploited.
Tools 	Function
Hydra	Hydra is a powerful and versatile password-cracking tool used for performing online attacks against various types of network services. It supports multiple protocols including HTTP, HTTPS, FTP, SSH, Telnet, SMB, SNMP, and others. 
Metasploit	Metasploit is a widely-used penetration testing framework that provides tools for developing, testing, and executing exploit code against remote target systems. It includes a vast database of known vulnerabilities and exploits, allowing security professionals to simulate real-world attacks and assess the security posture of systems and networks

Table 2.5  tools used for exploitation

The Vulnerabilities discovered during the reconnaissance and scanning inlcude:
S/N	Information	Description
1	Port 21 (ftp)
Version: vsftpd 2.3.4
 CVE-2011-2523	The port appears open and it is running an ftp vsftpd 2.3.4, an outdated and vulnerable  version of the very secure FTP daemon that contains a backdoor which opens a shell on port 6200/tcp.

Default credential is also been used on this port (msfadmin/msfadmin)
2	Port 22 (ssh)
Version:OpenSSH 4.7p1
Weak and common credentials	This vulnerability involves the utilization of default credentials on port 22. When default credentials are left unchanged, they pose a significant security risk as unauthorized individuals can exploit them to gain unauthorized access to the associated service or device.
3	Port 23(telnet)
Version: Linux Telnetd
Weak and common credentials	This vulnerability involves the utilization of default credentials on port 23. When default credentials are left unchanged, they pose a significant security risk as unauthorized individuals can exploit them to gain unauthorized access to the associated service or device.
4	Port 139,445  (netbios -ssn)
Version: Samba smbd 3.x - 4.x 
CVE-2007-2447
	The version of the service running on these ports allows attackers to remotely execute arbitrary commands via shell metacharacters
5	Ports 512, 513, and 514
CVE-1999-0651	These ports  are known as the  "r" services, running exec login and shell services respectively. They have been misconfigured to allow remote access from any host, and that feature was exploited during the test, to gain access.
6	Port 1099 (java -rmi)
CVE-2011-3556	An unspecified vulnerability was identified in the Java Runtime Environment component within Oracle Java SE JDK and JRE versions 7, and earlier
7	Port 3306 (mysql)
Version: MySql 5.0.51a -3ubuntu5
CVE-2008-4097	The MySQL database in Risky_Corporations  has negligible security, it was exploited by  using the MySQL function of Kali,  defining the username and host IP while leaving the  password blank. 

8	Port 5432 (postgresql)
Version: PostgreSQL  DB 8.3.0 - 8.3.7
CVE-2007-3280
	Postgres is associated with SQL and it  runs a version 8.3.0 - 8.3.7 of this service  on port 5432. This version allows remote authenticated superusers to map and execute a function from any library,  the exploit/linux/postgres/postgres_payload  exploit was useful in exploiting this vulnerability.
9	Port 5900 (vnc)
Version: VNC (protocol) 3.3 
CVE-1999-0506
	Virtual Network Computing or VNC service runs on port 5900, this service was  exploited using a module in Metasploit to find the login credentials.

10	Port 8180(http)
Version: Apache Tomcat/ Coyote JSP engine 1.1	The port 8180 has been configured to run the Coyote JSP engine 1.1 version of the Apache tomcat. This is a vulnerable version that  makes it easier for attackers to remotely execute arbitrary code by leveraging access to the manager role. 


Table 2.4 Vulnerabilities Discovered and exploited in the server

After vulnerabilities were discovered, the server fell victim to exploitation through various means, and initial access was gained. The different means includes password cracking and exploitation testing. 
1.Password Cracking: 
a.The SHH Port was  subjected to a password attack using Hydra, and two weak and common credentials were discovered. The credentials include:
a)user-user: This account was logged into and it was discovered that it had no sudo or admin privileges
b)msfadmin-msfadmin: This account was logged into and it was discovered that it had sudo privileges and can be used to escalate privileges or own the root account.

Figure 2.4 Bruteforcing and exploiting the ssh ‘user’ account

Figure 2.5 Bruteforcing and exploiting the ssh port using  ‘msfadmin’ account

b.The FTP port was also subjected to a password attack using hydra, and two accounts “user”, and “msfadmin” were discovered and used to access the server

Figure 2.6 Bruteforcing and exploiting the FTP  port using ‘msfadmin’ and ‘user’  account

c.The Telnet port was subjected to   a  bruteforce attack using hydra,and a single user account “user” was gotten. This was later used to access the server.

Figure 2.7 Bruteforcing and exploiting the telnet port using the ‘msfadmin’ account


d.Virtual Network Computing or VNC service runs on port 5900, this service was exploited using the auxiliary/scanner/vnc/vnc_login module in Metasploit to find the login credentials.

Figure 2.8 Bruteforcing and exploiting the postgres  port using the ‘postgres’ account

2.Exploitation Testing
a.FTP vsftpd 2.3.4 exploitation: The FTP  port  is running a  vsftpd 2.3.4 version, an outdated and vulnerable  version of the very secure FTP daemon that contains a backdoor which opens a shell on port 6200/tcp. This vulnerability was exploited using the  exploit/unix/ftp/vsftpd_234_backdoor  contained in the metasploit framework.  


Figure 2.9 Exploiting the vsftpd vulnerability using metasploit 

b.Samba Smbd exploitation:  The NetBIOS ports (139, 445) are hosting the Samba service running versions 3.x to 4.x. This service is susceptible to remote command execution through shell metacharacters. The exploit/multi/samba/usermap_script module in Metasploit was utilized to exploit this vulnerability.

Figure 2.10 Exploiting the samba 3x - 4x vulnerability using metasploit 









c.Exploiting Port 3306 (MYSQL): The MySQL database on port 3306 within Risky_Corporations lacks adequate security measures. Exploitation involved connecting to it using the MySQL functionality of Kali, specifying the username and host IP, while leaving the password blank.

Figure 2.11  Exploiting Mysql  vulnerability 

d.Postgresql exploitation: The PostgreSQL service running versions 8.3.0 to 8.3.7 on port 5432 permits remote authenticated superusers to map and execute functions from any library. This vulnerability was exploited using the postgres_payload module in the Metasploit framework.

Figure 2.12 Exploiting the  vulnerability contained in version 8.3.0 using metasploit 

e.Apache Tomcat exploitation: Port 8180 hosts an instance of the Apache Tomcat server configured to run the vulnerable Coyote JSP engine version 1.1. Attackers could remotely execute arbitrary code by leveraging access to the manager role. Exploitation involved utilizing the tomcat_mgr_login and tomcat_mgr_deploy modules in Metasploit.

Figure 2.13 Bruteforcing the apache tomcat using metasploit 


Figure 2.14 Exploiting the  vulnerability contained in the apache tomcat  using metasploit 

f.Exploiting the VNC service: Virtual Network Computing or VNC service runs on port 5900, this service was  exploited using the auxiliary/scanner/vnc/vnc_login  module in Metasploit to find the login credentials, and returning  a GUI to interact with the server as the root admin.

Figure 2.15 Exploiting the  VNC vulnerability 

Figure 2.16  VNC GUI  

g.Exploiting port 1099: An unspecified vulnerability was identified in the Java Runtime Environment component within Oracle Java SE JDK and JRE versions 7, and earlier 


Figure 2.17 Exploiting the Java-rmi vulnerability 

e.Using the auxiliary/scanner/postgres/postgres_login exploit contained in the metasploit framework, the postgresql database was subjected to bruteforce to obtain the credentials needed to login to the database, and the user account “postgres” was discovered.

Figure 2.18 Bruteforcing and exploiting the postgres  port using the ‘postgres’ account

h.Rlogin exploitation:  The remote shell server service daemon, which activates upon a request for a shell service, offers remote execution capabilities with authentication relying on privileged port numbers from trusted hosts. However, it was misconfigured to allow remote access from any host, and that feature was exploited during the test, to gain access.


Figure 2.19 Exploiting the remote login 







2. 3. Maintaining Access
1.The SSH config file was edited to accept root login using using ssh keys, this was later  used to directly gain access to the root account. 

Figure 2.20 The edited SSHD_config file

2.The FTP version that is being utilized on the server has a backdoor and it was  used to maintain access to the server.

Figure 2.21  The backdoor contained in the FTP version.





2. 4.Clearing Tracks
This stage  involves covering up evidence of the attacker's presence on the target system to avoid detection and forensic analysis. This was  done by deleting SSH or Apache log files and bash history command 


Figure 2.22  The Deleted Bash history 


Figure 2.23   The Deleted logs. 









Section 3: Controls
Vulnerability	Action	Reference 
Port 21 (ftp)
Version: vsftpd 2.3.4
Severity: High
Base score: 10.0
CVE-2011-2523
https://www.cvedetails.com/cve/CVE-2011-2523/	Newer version of vsptdf has to be downloaded .
The default credentials should be replaced with strong and unique credentials 	https://vigilance.fr/vulnerability/vsftpd-backdoor-in-version-2-3-4-10805

Port 22 (ssh)
Version:OpenSSH 4.7p1
Severity: High
Explo
Weak and common credentials 	The default credentials should be replaced with strong and unique credentials.
SSH keys should also  be utilized.	https://securitytrails.com/blog/mitigating-ssh-based-attacks-top-15-best-security-practices#content-6-strong-passwordspassphrase-for-ssh-users-and-keys
Port 23(telnet)
Version: Linux Telnetd
Severity:medium
Exploitability: 10
Weak and common credentials	The default credentials should be replaced with strong and unique credentials 	
Port 139,445  (netbios -ssn)
Base: 6
Severity:Medium
Exploitability: 6.8
https://www.cvedetails.com/cve/CVE-2007-2447/	This issue could be addressed by eliminating all specified external script executions (such as username map script, add printer command, etc.) from smb configuration files. 	https://www.samba.org/samba/security/CVE-2007-2447.html

Ports 512, 513, and 514
Base: 7.5 
Severity High
Exploitability: 10
https://www.cvedetails.com/cve/CVE-1999-0651/	The line that enables the rlogin service should be removed  in the internet services daemon configuration file.	https://exchange.xforce.ibmcloud.com/vulnerabilities/2995

Port 1099 (java -rmi)
Base: 7.5 
Severity High
Exploitability: 10
https://www.cvedetails.com/cve/CVE-2011-3556/	Critical Patch Update CPU fixes should be applied	https://www.oracle.com/security-alerts/javacpuoct2011.html

Port 3306 (mysql)
Version: MySql 5.0.51a -3ubuntu5
Base:4.6
Severity: Medium
Exploitability: 3.6
https://www.cvedetails.com/cve/CVE-2008-4097/?q=CVE-2008-4097	The issue can be resolved by updating to version mysql-server-5.0 - 5.0.51a-3ubuntu5.4	https://ubuntu.com/security/notices/USN-671-1
Port 5432 (postgresql)
Version: PostgreSQL  DB 8.3.0 - 8.3.7
Base: 9.0
Severity: High
Exploitability:8.0 
https://www.cvedetails.com/cve/CVE-2007-3280 	Contact Postgresq organization  for upgrade or patch information	https://exchange.xforce.ibmcloud.com/vulnerabilities/35145
Port 5900 (vnc)
Version: VNC (protocol) 3.3 
Base:7.2
Severity: High 
Exploitability: 3.9 
https://www.cvedetails.com/cve/CVE-1999-0506/
	Disable the VNC Server’s “No Authentication” security type.
	https://www.beyondsecurity.com/resources/vulnerabilities/vnc-server-authentication-less
Port 8180(http)
Version: Apache Tomcat/ Coyote JSP engine 1.1
Base score: 5.0
Severity: Medium
Exploitability: 10
https://www.cvedetails.com/cve/CVE-2010-4094/	Replacing the current version with Version 7.9.0.3  will fix the vulnerability1
	https://www.zerodayinitiative.com/advisories/ZDI-10-214/

Table 3.1  Controls


References
Canocical Ubunt. (2008). USN-671-1 Retrieved from  https://ubuntu.com/security/notices/USN-671-1
CVE Details . (1998) CVE-1999-0506 Retrieved from https://www.cvedetails.com/cve/CVE-1999-0506/
CVE Details. (1999) CVE-1999-0651 Retrieved from https://www.cvedetails.com/cve/CVE-1999-0651/
CVE Details. (2007). CVE-2007-2447. Retrieved from https://www.cvedetails.com/cve/CVE-2007-2447/
CVE Details.(2007).  CVE-2007-3280. Retrieved from https://www.cvedetails.com/cve/CVE-2007-3280
CVE Details. (2008). CVE-2008-4097. Retrieved from https://www.cvedetails.com/cve/CVE-2008-4097/?q=CVE-2008-4097
CVE Details. (2010). CVE-2010-4094. . Retrieved from https://www.cvedetails.com/cve/CVE-2010-4094/
CVE Details. (2010).  CVE-2010-2075. Retrieved from https://www.cvedetails.com/cve/CVE-2010-2075/
EC-Council. (2022). Learn about the five penetration testing phases. Retrieved from  https://www.eccouncil.org/cybersecurity-exchange/ethical-hacking/what-is-ethical-hacking/
FORTRA. VNC Server Unauthenticated Access Vulnerability Fix. Retrieved from https://www.beyondsecurity.com/resources/vulnerabilities/vnc-server-authentication-less
IBM Security. PostgreSQL Database Link library (dblink) command execution. Retrieved from https://exchange.xforce.ibmcloud.com/vulnerabilities/35145
IBM Security. remote shell server service enabled. Retrieved from: https://exchange.xforce.ibmcloud.com/vulnerabilities/2995
Samba. Samba Announcement Archive.. Retrieved from https://www.samba.org/samba/security/CVE-2007-2447.html
Security Trails (2023) Top 15 Best SSH Security Practices . Retrieved from https://securitytrails.com/blog/mitigating-ssh-based-attacks-top-15-best-security-practices#content-6-strong-passwordspassphrase-for-ssh-users-and-keys
Vigilance.Fr.  Vulnerabiltity about vspftpd : Backdoor in version 2.3.4. Retrieved from https://vigilance.fr/vulnerability/vsftpd-backdoor-in-version-2-3-4-10805
Vaadata.  (2023) .  Internal Penetration Testing: Objective, Methodology, Black Box and Grey Box Tests. Retrieved from https://www.vaadata.com/blog/internal-penetration-testing-objective-methodology-black-box-and-grey-box-tests/
Zero Day Initiative. (2010).  ZDI-10-214. 
Retrieved from https://www.zerodayinitiative.com/advisories/ZDI-10-214/
