Title page


Table of Content
Title page	1
Table of Content	2
Task 1: Vulnerability scanning network discover with Nessus and Metasploitable-2	4
Vulnerability scan using Nessus on Metasploitable-2 and the entire network	7
Critical Analysis of the result, potential consequences and countermeasures.	9
Contemporary Study - Capital One Data Breach (2020)	15
Task 2: Intrusion Detection and Prevention System.	16
Configuration of snort as IDS to detect ICMP,NMAP and Hping3 traffic	18
Detection of ICMP traffic	24
Detection of Hping3 traffic	25
Detection of Nmap traffic	26
Detection of SSH traffic	27
Analysis of IDS and IPS as a tool and their effectiveness in protecting against various types of attacks	28
Effectiveness of IDS and IPS	28
Current Research Insights	29
Task 3: Critical Analysis of Verizon Data Breach Report 2023, Crowdstrike Global Threat Report 2023, and IBM X-Force threat intelligence index for the Healthcare Industry	31
Predominant Trends in the Healthcare Sector	33
Malware in the Healthcare Sector	35
Root Cause of Malware Vulnerability Based on IBM X-Force, Crowdstrike and DIRB 2023.	36
Reccomendations	36
Task 4: Incidence response management	39
Reference	44



Task 1: Vulnerability scanning network discover with Nessus and Metasploitable-2
To complete this project, a kali linux machine and metasploitable-2 machine were installed and configure to utilize bridge adapters in a virtualized environment( Oracle VirtualBox). 

Figure 1: Lab environment for the project 

The roles of these machines include:
1.Nessus : This is a vulnerability scanner developed by Tenable to identify malware,default configurations, malicious software and other Vulnerability present in a single host, or an entire network. This tool was installed on the Linux machine used in this project to identify and security vulnerabilities present on the metasploitable-2 machine and the network housing this machine.  (Jaiswar Yash, 2023)

Figure 2: Nessus


Figure 3: Kali linux 
2.Metasploitable-2: This is an intentionally vulnerable virtual machine designed for testing and training purposes. (GeeksforGeeks, 2022). Its only role during the course of this project is to be the target syste whose vulnerability would be assessed. 


Figure 4: Metaspolitable -2 




Vulnerability scan using Nessus on Metasploitable-2 and the entire network
To conduct a vulnerability scan on metasploitable-2 using Nessus, the “Basic network scan” functionality of Nessus was utilized, and a new scan template  was created with the target machine IP address. 

Figure 5: Scan template
The scan was initiated, and the result includes scan summary, hosts, vulnerabilities, remediations, notes and history. The image below shows the scan in progress and the scan in completion.

Figure 6: Scan in Progress

Figure 7:  Scan in completion
According to the scan, the metasploitable-2 machine contains  63 vulnerabilities, 2 remediation plans, and 2 notes.
After the completion of the individual host scan, the entire network was also scaned. This part of the project was achieved by scanning 192.168.110.0 /24 which, in turn, scanned the entire network for vulnerabilities. The scan revelaed that there are 104 vulnerabilities present in the network,  5 remediations plans and 8 notes.

Figure 8: Result from the extended scan
Critical Analysis of the result, potential consequences and countermeasures.
The scan result showed a result of over 60 vulnerabilities, and some of the vulnerabilities  includes: 
1.rlogin service detection 
2.TLS version 1.0 protocol detection 
3.NFS exported share information information disclousre.
4.UnrealIRCd Backdoor Detection
5.VNC Server 'password' Password
6.SSL Version 2 and 3 Protocol Detection
7.Samba Badlock Vulnerability
8.Debian OpenSSH/OpenSSL Package Random Number Generator Weakness
9.Debian OpenSSH/OpenSSL Package Random Number Generator Weakness (SSL check)
10.Unencrypted Telnet Server
Below is the critical analysis of three of these vulnerabilities: 
1.rlogin service detection: This is a protocol that allows remote login access to a remote machine. This protocol is highly vulnerable and It is known for its lack of security measures,which inlcudes  the transmission of data in plaintext, which can be easily intercepted by attackers. (Network security). From the Nessus report, this vulnerability has a high severity rating , and a CVSS score of 6.5. 

Figure 9: rlogin service detection
The potential Consequences of this service includes:
a)Data exposure: rlogin sends information as plaintext over the netowrk, making it possible for attackers to capture these information.
b)Root account access: Access to this service will give attackers root access
c)MITM( Man in the midde) Attack: As a result of rlogin being  vulnerable, it is quite easy for attackers to intercept and modify data sent during a communication.
The following are helpful countermeasures for reducing the risk that this vulnerability poses:
a)Disable Rlogin: Replace rlogin with more secure protocols like SSH (Secure Shell), which provides encrypted communication.
b)Firewall Configuration: Block rlogin ports (usually port 513) on network firewalls to prevent external access.
c)Network Monitoring: Use network monitoring to find any attempts at rlogin and promptly fix any potential threats.
2.TLS Version 1.0 Protocol Detection: An older version of the TLS protocol, known as TLS (Transport Layer Security) 1.0, is used to protect network connections. It has known vulnerabilities that could jeopardize the security of the encrypted data, in particular its vulnerability to BEAST and POODLE attacks. This vulnerability has a medium severity level and a CVSS score of 6.5.
 
Figure 10: TLS version 1.0 detection
The potential consequences of this vulnerabilities include:
a)Data Interception: TLS 1.0 vulnerabilities make it possible for attackers to decrypt and intercept private data.
b)Session Hijacking: By taking advantage of flaws, attackers can take control of user sessions and gain unauthorized access to services.
c)Compliance Issues: Non-compliance with security standards and laws (e.g., PCI DSS) might arise from the use of antiquated protocols.
The following countermeasures are required to lessen the dangers that this vulnerability poses:
a)Upgrade TLS Protocols: Require the usage of more recent, secure versions, like TLS 1.2 or 1.3, and disable TLS 1.0.
b)Regular Updates: Make sure that any TLS-using software and libraries receive regular updates to the newest versions.
c)Configuration Management: Review and update server configurations to disable support for deprecated protocols.
3.Disclosure of NFS Exported Share Information: The Network File System, or NFS, enables file sharing across a network. Incorrectly configured NFS shares have the potential to expose sensitive information or grant unauthorized users access to shared directories. This vulnerability has a critical severity level and CVSS score of 10.0.

Figure 11:  NFS exported share information disclosure
The potential consequences of this vulnerability includes:
a) Data Exposure: Unauthorized users may be able to access 	sensitive data kept in NFS shares.
b) Privilege Escalation: Attackers may be able to obtain 	escalated network privileges through improperly configured 	NFS shares.
c) Network reconnaissance: By learning about the shared 	resources and network structure, attackers can plan their next 	attack more effectively.
Countermeasures include:
a)Restrict Access: Limit NFS share access to specific IP addresses or subnets that require it.
b)Implement Authentication: Use stronger authentication mechanisms, such as Kerberos, to secure NFS shares.
c) Regular Audits: Verify that NFS setups are appropriately 	secured and that access controls are being applied correctly 	by conducting regular security audits.
d) Use Secure NFS Versions: Make use of NFSv4, which has 	improved security features, and other more secure versions of 	the file system.



Contemporary Study - Siemens Ruggedcom WIN Products BEAST Attack Vulnerability 
Browser Exploit Against SSL/TLS is referred to as BEAST. It is an attack against TLS 1.0 and earlier SSL systems' network flaws. (Tomasz, 2020). 
In a recent identification of cybersecurity vulnerabilities, Siemens discovered a BEAST (Browser Exploit Against SSL/TLS) attack vulnerability within their Ruggedcom WIN products. This vulnerability was initially reported directly to Siemens ProductCERT by Dan Frein and Paul Cotter of West Monroe Partners. To address this issue, Siemens has released a firmware update designed to rectify compatibility problems associated with BEAST mitigations in current browser versions.
The BEAST attack vulnerability in Siemens Ruggedcom WIN products can be exploited remotely. This security flaw allows an attacker to potentially access the session ID of a user's ongoing web session. If the attacker successfully exploits this vulnerability, particularly when combined with a social engineering attack, they could intercept and read the traffic exchanged between the user and the device.
The specific impact of this vulnerability on individual organizations is highly variable and depends on several factors unique to each entity, including their operational environment, network architecture, and specific product implementation. An exploited vulnerability of this nature can lead to significant security breaches, including unauthorized access to sensitive information and potential disruption of critical operations. For example, an organization utilizing Siemens Ruggedcom WIN products for industrial control systems might face severe operational risks if an attacker gains access to the network. Such a breach could compromise the integrity of critical infrastructure, lead to substantial data theft, and cause extended downtime due to necessary security remediation efforts. (CISA, 2018)




Task 2: Intrusion Detection and Prevention System.
To carry out this project, a kali linux machine, a ubuntu machine, and metasploitable-2 was set up in a virtual environment. All these machines were installed on virtual box using the bridge adapter and connected to a single router with the home network address 192.168.0.0/24. The role of these machines  includes:
a.Kali Linux: This is the attacker machine set up to generate the ICMP, Nmap and Hping3 traffic needed for  the assessment. 

Figure 12: The kali system
b.UbuntuMachine: This machine contains the IDS system (Snort), and it is responsible for detecting the Hping, ICMP and Nmap traffic that was generated in this assessment.

Figure 13: The Snort version installed on the ubuntu machine

Figure 14: The Ubuntu system that contains the Snort IDS

c.Metasploitable 2: This is the victim machine receiving all the traffics generated by the attacker in this assessment

Figure 15: Metasploitable -2
Configuration of snort as IDS to detect ICMP,NMAP and Hping3 traffic
Snort is an open source intrusion detection and prevention system. It relies on the snort.conf file, its cocnfiguration file, for its operation. This filecontains series of commands and parameters that dictactes what type of traffic snorts responds to and the type of action it should take. (Techtarget, 2007).During the project, the snort.conf file was writtten in such a way that allows the detection of SSH, Nmap, ICMP, and Hping ttraffic

Figure 16: The snort file showing the home network address

Figure 17: The modified snort.conf file showing the rules

Figure 18: the rules
The snort.conf file was edited to include the following rules:
a.Local.rules: This is a customizable rules file where network administrators can define their own specific detection rules tailored to their unique network environment. The local.rules file was customized detect TCP connection from any external source to the SSH port.

Figure 19: The script above detects tcp connection from external sources to the SSH port
b.Dos.rules: These are rules created to detect denial of service attacks. The DoS attack aims to bring down a computer or network so that the intended users cannot use it.These attacks are achieved by transmitting packets that causes a crash or by overloading the target with traffic. (Paloalto) The script below was used to detect hping3 traffic.

Figure 20: The script above was used to detect Hping3 traffic.
c.DDoS.rules: These are rules  created to detect Distributed Denial of service attacks, where multiple compromised systems are used to target a single system or network, amplifying the scale of the attack.  
Figure 21: The script above was also set up to detect Hping3 traffic.
d.ICMP.rules: Error reporting and management questions are handled by ICMP. Network equipment such as routers utilize this supporting protocol to communicate error warnings and operational data. Attackers may, however, use this protocol as a weapon to overwhelm the target device with so many ping requests that it is unable to process them. The ICMP rules configured on snort helps to detect suspicious ping requests that maybe  arise from a denial of service attack.

Figure 22: The script above was set up to detect ICMP traffic.
e.Scan.rules: Scanning is a form of active reconnaissance or information gathering, where the attacker is directly interacting with the target to get informations. (Global Knowledge, 2023). The scan.rules are snort rules  designed to detect various types of network scanning activities carried out by these attackers.

Figure 23: The script above was set up to detect Nmap traffic.


Detection of ICMP traffic
Using the  “ping 192.168.0.150” command, the Kali linux was used to ping the metasploitable2 by sending ICMP traffic to it while the snort installed on the ubuntu machine detected the traffic. 

Figure 24: Snort detecting the ICMP traffic targeted at the metasploitable2 machine

Figure 25: Kali machine sending out ICMP traffic to metasploitable2


Detection of Hping3 traffic
Using the  “hping --flood --icmp 192.168.0.150” command, the Kali linux was used to perform a dos attack on the metasploitable2, while the snort installed on the ubuntu machine detected the traffic. 

Figure 26: Kali machine flooding the metasploitable2 with ICMP


Figure 27: Snort detecting the flood attack targeted at the metasploitable2 machine

Detection of Nmap traffic
Using the  “sudo nmap ” command, the Kali linux was used to scan the metasploitable2, while the snort installed on the ubuntu machine detected the nmap traffic. 

Figure 28: nmap scan targeted at the metasploitable2 machine


Figure 29: snort decting the nmap traffic 


Detection of SSH traffic
The kali machine was used to log in to the msfadmin account present on the metasploitable-2 machine. This was detected by snort, as it has been configured to detect external tcp connections to port 22 

Figure 30: ssh connection from the kali machine to metasploitable-2

Figure 31: snort detecting the SSH traffic 

Analysis of IDS and IPS as a tool and their effectiveness in protecting against various types of attacks
1.IDS: An intrusion detection system is a security software that monitors network traffic and activities  for known  anomalies or suspicious behavior. IDS looks for malicious activity in network or system events to identify intrusions. When suspicious activity is detected, it sends out notifications so that security administrators can respond. IDS is mainly reactive as it does not stop attacks—it just finds and notifies them.  IDS offers early threat detection and visiblity into the company’s network or IT environment. Types of Intrusion detection systems includes host based IDS — where the software is installed on individual hosts or computers in a network, and network based IDS — where the system is deployed at strategic points within the network. (Network security, 2023)
2.IPS: Unlike IDS, Intrusion prevention systems take further actions at the point where IDS stops. They have the capability to act against suspicious or malicious traffic and activities based on predefined rules. (Network security, 2023). Types of IPS includes:
a)Network-based: Usually installed at network gateways, a network-based intrusion prevention system (NIPS) is placed at key locations within a computer network. The entire network of the company, including all connected hosts and devices, can be safeguarded by it.
b)Host-based: An IPS (host-based intrusion prevention system) is installed on a particular computer or server and provides defense for a single host. It keeps an eye on system activity and has the power to restrict or stop access to system resources.



Task 3: Critical Analysis of Verizon Data Breach Report 2023, Crowdstrike Global Threat Report 2023, and IBM X-Force threat intelligence index for the Healthcare Industry
Every year, Verizon releases a comprehensive study known as the Data Breach Investigations analysis (DBIR), which offers insights into the trends and patterns of data breaches that happened the previous year The Verizon Data Breach Report 2023 highlights a number of significant developments in healthcare cybersecurity. Of the 525 occurrences classified in the report, 436 involved confirmed leak of data. System intrusion, basic web application attacks, and other errors are the main themes that have been shown to account for 68% of breaches. 
A comprehensive analysis of cybersecurity threats as they exist today can also be found in the CrowdStrike Global Threat Report 2023. The study makes use of data from CrowdStrike's extensive network of threat intelligence and is based on information from the CrowdStrike Falcon platform, incident response engagements, and a range of additional intelligence sources.  The CrowdStrike Global Threat Report 2023 provides a thorough examination of the changing cyber threat environment, emphasizing noteworthy developments, important threat actors, and cutting-edge strategies. An increasing level of skill among cybercriminals is evident from the data, which shows a 50% increase in interactive incursion activities.  Prominent eCrime organizations like Wizard Spider and LockBit, well-known for their well-publicized ransomware attacks, are among the key threat players mentioned in the research. 

Also, a thorough assessment of the cyber threat landscape was given by the IBM X-Force Threat Intelligence Index 2023, which also highlights important trends, notable threat actors, and changing strategies. According to the research, ransomware represented for 17% of all incidents that were resolved in 2022, demonstrating its continued threat level even in the face of an increase in backdoor activity caused by the Emotet malware. In 27% of cases, there was extortion, primarily targeting the manufacturing industry.With 41% of occurrences, phishing continued to be the most common initial access vector, followed by the use of public-facing applications (26%). As a result of increased group collaboration and a notable uptick in malicious malware and hacktivism, the research sheds light on a significant evolution in the cybercrime scene. Geopolitical issues, like the ongoing war between Russia and Ukraine, are largely linked to these developments. 

The particular weaknesses, trends, and ramifications for healthcare organizations are the main topics of this research.


Predominant Trends in the Healthcare Sector 
Considering the data in the healthcare industry is so sensitive, hackers continue to attack it frequently. A number of significant developments are highlighted by the 2023 DBIR and other publications, including:
a.Malicious software Attacks: The healthcare industry continues to face a substantial danger from ransomware attacks. Due to a greater willingness to pay ransoms in order to recover vital services, attackers frequently target healthcare firms. It is evident from the DBIR 2023 that ransomware assaults are becoming more frequent and sophisticated.
b.Social Engineering and Phishing: Phishing is still a common attack method. Phishing emails that attempt to steal credentials or install malware frequently target healthcare workers. Strong staff training initiatives are crucial to reducing this risk, as the paper emphasizes.
c.Insider Threats: Whether done on purpose or accidentally, insider threats nonetheless pose a significant risk. Data breaches can happen by accident or intentionally by contractors or employees who are authorized to access private data.
d.extortionate methods: The twin threat posed by ransomware—encrypting data and threatening to release it—is highlighted by the X-Force threat intelligence index, which lists extortion as the biggest impact at 27%. This strategy increases the pressure on healthcare institutions to abide by ransom requests in order to safeguard patient privacy and prevent harm to their reputation. 

e. Geopolitical Influence: The study saw a surge in malware activity associated with geopolitical tensions, such as Russia's war in Ukraine, which fueled a spike in hacktivism and harmful malware directed at a number of industries, including the medical field.

The healthcare sector continues to be a prime target for cybercriminals due to the sensitive nature of the data it holds. The 2023 DBIR, along with other reports, highlights several key trends:
a.Rise in Ransomware Attacks: Ransomware remains a significant threat in the healthcare sector. Attackers often target healthcare organizations because they are more likely to pay ransoms to restore critical services. The DBIR 2023 indicates a noticeable increase in the frequency and sophistication of ransomware attacks.
b.Phishing and Social Engineering: Phishing remains a prevalent attack vector. Healthcare employees are often targeted with phishing emails that lead to credential theft or the deployment of malware. The report underscores the need for robust employee training programs to mitigate this risk.
c.Insider Threats: Insider threats, both malicious and inadvertent, continue to pose significant risks. Employees or contractors with legitimate access to sensitive information can unintentionally or deliberately cause data breaches. The DBIR 2023 emphasizes the importance of monitoring and managing insider activities.
d.Extortion Tactics: The prevalence of extortion as the primary impact at 27%, according to X-Force threat intelligence index, highlights the dual threat posed by ransomware—encrypting data and threatening to release it. This tactic adds pressure on healthcare organizations to comply with ransom demands to protect patient privacy and avoid reputational damage. Effective data encryption, monitoring for data exfiltration, and secure backups are essential to mitigate these risks.
e.Geopolitical Influence: The report noted a rise in malware activity linked to geopolitical tensions, such as Russia’s war in Ukraine, which contributed to an increase in hacktivism and destructive malware targeting various sectors, including healthcare.
Malware in the Healthcare Sector
A wide range of harmful or malicious software intended to damage or steal data falls under the general category of malware. According to Verizon DBIR,IBM X-force, and Crowdstrike the following malware categories are most worrisome in the healthcare sector:

Ransomware: One of the main threats is ransomware.Ransomware is a specific type of malware or malicious software that holds data hostage in exchange for a ransom.It is distributed by attackers via phishing emails, software vulnerabilities, and remote desktop protocol (RDP) attacks. There may be serious consequences, including financial loss, reputational harm, and service interruption.


b. Trojans: Trojans, especially those designed to steal credentials, are commonly used in healthcare attacks. They often remain undetected for extended periods, exfiltrating sensitive data such as patient records and financial information. According to BM X-Force Threat Intelligence Index 2023, Backdoors accounted for 21% of incidents, indicating that attackers often establish persistent access to healthcare networks. The spike in backdoor activity was significantly driven by Emotet, a versatile malware used for multiple purposes, including data theft and facilitating further malware attacks.
Root Cause of Malware Vulnerability Based on IBM X-Force, Crowdstrike and DIRB 2023.
a.Phishing as the Main Initial Access Vector: IBM X-Force stated that 41% of initial access in malware instances was caused by phishing, despite DBIR confirming that phishing is a key cause of malware infection. Through the use of advanced social engineering techniques, attackers take advantage of human vulnerabilities by luring victims into installing malware or divulging private information.
b.Exploitation of Public-Facing Applications: 26% of first access instances involved the exploitation of vulnerabilities in public-facing applications. In order to spread malware, attackers target unpatched software or improperly configured systems.
c.Initial Access Brokers (IABs): According to crowdstrike, by offering pre-made access points, access brokers dramatically reduce the barrier to entry for cyberattacks. This frees up other attackers to concentrate on carrying out their destructive payloads without having to first breach defenses.
Reccomendations
X-Force, CrowdStrike, and DBIR 2023 investigation led to the following suggestions for the healthcare industry: 
a.Know your enemy: Organizations frequently struggle with an excessive volume of alerts and lack a clear understanding of the "who, why, and how" behind assaults. Time and resources may be used inefficiently as a result. Consequently, it is essential to make investments in thorough threat intelligence that extends beyond the provision of indicators of compromise (IOCs). This kind of intelligence ought to provide comprehensive understanding of the attackers' intents, skills, and arsenal. 
b.Putting in place Sturdy Cyber Hygiene Practices: Multi-factor authentication (MFA), frequent patching, and strong passwords are just a few examples of basic security practices that can drastically lower the likelihood of malware attacks.
c.Employee Education and Awareness: It is essential to provide ongoing training to staff members on social engineering, phishing, access brokers, and safe internet usage techniques. The danger of insider threats and unintentional data breaches can be reduced with the aid of awareness efforts.
d.Incident Response and Recovery Planning: It is imperative that healthcare institutions establish thorough procedures for handling incidents. Frequent drills and revisions to these strategies can guarantee a quick and efficient reaction to occurrences involving ransomware or other malware.
e.Network Segmentation and Access Controls: To prevent malware from spreading and minimize the impact of a breach, networks should be segmented and access to sensitive data should be restricted. 
f.Advanced Threat Detection and Monitoring: Threats may be quickly recognized and neutralized by putting advanced security solutions, such security information and event management (SIEM) and endpoint detection and response (EDR) systems, into place. Ongoing surveillance and threat intelligence can reveal new threats.





Task 4: Incidence response management
The analysis of the Networkcapture3.pcap file revealed a pattern of suspicious and potentially malicious network activity. This activity involves:
1.Unsuccessful connection attempts from 192.168.56.102:34227 to multiple ports: The traffic from number 31 to 87  shows a typical TCP handshake attempt with a SYN packet , followed by an RST, ACK response. The RST, ACK packets  indicates that the destination 192.168.56.102 did not expect or accept the connection on ports 554, 8888,110,22,199, 133,25,445,587,1025,3306,3389,1720,9999,144,5432,5051,513,1027,1110,1029,444,26,6646,49157, and 6000. (Alibaba cloud, 2023). However, on revcieving the SYN flag, port 21 responded with  SYN-ACK flag, indicating its willingness to communicate and also confirming that the port is open. This looks more like an automated nmap scan with the SYN flag set, where the tool is meant to probe for open ports.
2.Unsuccesful Login attempts from 192.168.56.1 to 192.168.56.102:21 via multiple ports: Packet 115 showed the initiaition of this communitcation, with the attacker sending a SYN flag to the destination. Attempts to login to the FTP port started from packet 161, with the attacker trying different combinations of password steeming from different ports per attempt. Passwords like “eeeeeeea”, “eeeeeeeeO”, “eeeeeeees” were recorded, and the number of login attempts and packets suggested the presence of a password cracking tool running a bruteforce attack on port 21.

The analysis of the Networkcapture2 file reveals a pattern of suspicious and potentially malicious network activity. This activity involves:
1.Interactions between, 192.168.56.102(Attacker IP)  and 192.168.56.101 (Destination IP): The first packet recorded in this file, is an TCP FIN/ACK packet from the attacler to the destiation on port 21. This traffic suggests that the attacker is attempting to close an FTP connection.This action seems abnormal, as there was no record of a SYN packet that initiated any connection the attacker is trying to terminate with the FIN/ACK packet.(GeeksforGeeks, 2023). This traffic is suspected to be a result of an Nmap scan with the FIN flag.(Nmap.org). Following this initial packet, the destination server (192.168.56.101) responds with a series of error messages, and they include a "500 OOPS" error, a "vsf_sysutil_recv_peek: no data" error, an empty response, and , another "500 OOPS: child died" error. Port 21 further recieved RST packets from the attacker, without giving any response. This proves that the port is opened and can recieve communcations.(Nmap). In summary, the overall interaction here was used to discover if port 21 is opened to engage or not.
2.Interactions between  192.168.56.1(Attacker)  and 192.168.56.101 (Destination): This interaction started with a TCP SYN packet (packet 87)  being sent from 192.168.56.1 to the destination at 192.168.56.101:21, initiating a new connection. This was followed  by ARP requests and responses to resolve the IP address 192.168.56.1. Packets 90 and 91 show a TCP connection establishment process with a SYN-ACK from the destimation and an ACK from attacker, completing the TCP handshake. A TCP FIN-ACK from 192.168.56.1 attempts to terminate this connection, and  Packet 93 shows the destination server acknowledging this termination request. Subsequent packets (94 to 96) showed another attempt by the attacker to establish a new TCP connection to the destination server on a different port (1889). The destination server responded with a "220 (vsFTPd 2.0.7)" welcome message in packet 97, and an error message "500 OOPS" in packet 98, indicating a server-side issue. Finally, packets 99 and 100 show abrupt TCP RST and RST-ACK packets from 192.168.56.1 to the FTP server, forcefully terminating the connection. This behavior is indicative of malicious activity, suggesting an attempt to exploit vulnerabilities in the FTP server or disrupt its operations through repeated connection attempts and abrupt terminations. Packet 94 and subsequents packets then showed signs of multiple faailed login attempts, suggesting a bruteforce attack. 

Evaluation of incidence response models
1.NIST Framework (SP) 800-61: This is a revised version of NIST's Special Publication (SP) 800-61, which offers instructions on how businesses should handle computer security events, was published in 2012. In addition to providing thorough guidance on team structures, staffing methods, tools, and other services IR teams can give the larger enterprise, it describes how firms can develop and grow their IR capabilities. (ISACA, 2020) Additionally, SP 800-61 suggests a life cycle that divides the IR process into four stages: 
a)Preparation
b)Detection and analysis
c)Containment, eradication and recovery
d)Postincident activity
2.CREST: A cybersecurity incident response guide, issued by CREST in 2013, presents a three-phase high-level paradigm. (ISACA, 2020). While the model contains a number of specific processes related to each stage of the life cycle, the guide concentrates on offering guidance that is applicable to real-world situations.  The prepare phase, respond phase, and follow up phase are among the steps. (CREST). Upon closer inspection, the "respond" phase of the CREST model, which includes the phases of identification, containment, eradication, and recovery, is actually based on the guidelines found in NIST SP 800-61, despite the model's apparent differences from the others.
3.CyBOK Incidence response management: This is a simplified incidence management model that was inspired from NIST Framework (SP) 800-61. It outlines three main tasks that an organization needs to complete: anticipating incidents, responding to them when they arise, and following up once they are resolved. (Cybok)

Figure 32: CyBOK incidence management model.

The CyBOK model has multiple advantages in the scenario given by the pcap files, where an attacker searched a target for open ports, found the FTP port, and then brute-forced it.
a.Anticipating Incidents: Implement strong access control policies, including unique passwords and multi-factor authentication for FTP, and conduct regular security audits and employee training to recognize and mitigate vulnerabilities like open ports.
b.Responding to Incidents: Have an incident response team and clear reporting procedures to manage and communicate incidents effectively, use network traffic analysis and log reviews to understand the attacker's actions and the extent of the compromise, and block the attacker's IP, apply patches to vulnerable services, and enhance security controls to prevent further attacks.
c.Following Up: Conduct a root cause analysis and document the incident to identify lessons learned, and update security policies and procedures based on the incident review while continuously improving incident response plans.
Capture Number	Malicious /Suspicious Behavour	Start Packet 	End Packet 	Attacker Ip	Destination Ip	Remarks
3	Suspicious	31	87	192.168.56.1	192.168.56.102	Scanning attempts.
3	Malicious	134	140	192.168.56.1	192.168.56.102	Login attempts with incorrect credentials
2	Suspicious	1	1	192.168.56.102	192.168.56.101	FIN/ACK flag indicating an attempt to close the connection gracefully
2	Suspicious	2	5	192.168.56.102	192.168.56.101	FTP server responds with multiple error messages, indicating potential issues or unexpected flags.
2	TCP Reset flood		6	9	192.168.56.102	192.168.56.101	Multiple TCP RST packets, possibly indicating an attempt to check if the port is opened or not

2	Suspicious	87	87	192.168.56.1	192.168.56.101	Connection attempts to FTP port 21 from another IP.
2	Suspicious	94	96	192.168.56.1	192.168.56.101	Repeated connection attempts to FTP port 21, possible probing or attack	
2	Malicious	101	108	192.168.56.1	192.168.56.101	Login attempt with incorrect credentials
2	Malicious	112	133	192.168.56.1	192.168.56.101	Login attempt with incorrect credentials


Reference
CISA. (2018) “Siemens Ruggedcom WIN Products BEAST Attack Vulnerability” Available at 
https://www.cisa.gov/news-events/ics-advisories/icsa-14-098-03 (Accessed: 15 July 2024)
Crest. “Cyber Security Incident Response Maturity Assessment”, Crest. Avacilable at https://www.crest-approved.org/buying-building-cyber-services/cyber-security-incident-response-maturity-assessment/ (Accessed: 11 July 2024)
Crowdstrike. “Crowdstrike 2023 Global Threat Report” Crowdstrike. Available at
https://go.crowdstrike.com/rs/281-OBQ-266/images/CrowdStrike2023GlobalThreatReport.pdf (Accessed: 11 July 2024)
Cybok. “Security Operations Incident ManagementV1.0.2”  Available at 
https://www.cybok.org/media/downloads/Security_Operations_Incident_Management_v1.0.2.pdf (Accessed: 15 July 2024) 
EC Council.  2023 “IDS and IPS: Understanding Similarities and Differences”, EC Council. Available at 
https://www.eccouncil.org/cybersecurity-exchange/network-security/ids-and-ips-differences/ (Accessed: 10 July 2024)
GeeksforGeeks, (2023) “Internet Control Message Protocol (ICMP)”, GeeksforGeeks. Available at
https://www.geeksforgeeks.org/internet-control-message-protocol-icmp/ (Accessed: 11 July 2024)
Geeksforgeeks (2023) “TCP flags.”  Geeksforgeeks. Available at 
https://www.geeksforgeeks.org/tcp-flags/ (Accessed: 11 July 2024)
GeeksforGeeks (2022), “How to install Metasploitable 2 in VirtualBox”. Available at https://geeksforgeeks.org/how-to-install-metasploitable-2-in-virtualbox/. (Accessed: 8 July 2024)
Global Knowledge, (2023) “THE 5 PHASES OF HACKING: SCANNING
“, Global Knowledge. Available at 
https://www.globalknowledge.com/us-en/resources/resource-library/articles/the-5-phases-of-hacking-scanning/#gref (Accessed: 11 July 2024)
Jaiswar, Y. (2023),“What is Nessus Scanner? Features, Benefits, and Installation”,Knowledgehut. Available at  
https://www.knowledgehut.com/blog/security/nessus-scanner (Accessed: 6 July 2024)
Network Security “Rlogin”, Network Security. Available at 
https://www.networxsecurity.org/da/mitgliederbereich/glossary/r/rlogin.html#:~:text=rlogin%20is%20also%20the%20name,physically%20present%20at%20the%20computer. (Accessed: 12 July 2024)
Palto Alto. “What is a denial of service attack (DoS) ?”, Palo Alto. Available at
https://www.paloaltonetworks.com/cyberpedia/what-is-a-denial-of-service-attack-dos#:~:text=A%20Denial%2Dof%2DService%20(,information%20that%20triggers%20a%20crash.  (Accessed: 11 July 2024)
Snort, “Snort - Netork lntrusion Detection and Prevention System”,  Snort. Available at https://www.snort.org/  (Accessed: 11 July 2024)
Techtarget (2023), “Snort configuration -- snort.conf file”, Techtarget. Available  at 
https://www.techtarget.com/searchitchannel/feature/Snort-configuration-snortconf-file#:~:text=1.2%2F%20directory%2C%20but%20it%20will,place%20to%20control%20Snort's%20operation. (Accessed: 6 July 2024)
Tomasz, A. N. (2020) “What Is the BEAST Attack”. Acunetix
https://www.acunetix.com/blog/web-security-zone/what-is-beast-attack/
Verizon “2023 Data Breach Investigations Report - InQuest.net” Verizon. Available at 
https://inquest.net/wp-content/uploads/2023-data-breach-investigations-report-dbir.pdf (Accessed: 6 July 2024)
x-force-threat-intelligence-index-2023 (2023) IBM. Available at 
https://mysecuritymarketplace.com/mp-files/x-force-threat-intelligence-index-2023.pdf/ (Accessed: 11 July 2024)
Young, C. (2020), “ Incident Response Models”, ISACA. Available at https://www.isaca.org/resources/isaca-journal/issues/2020/volume-4/incident-response-models (Accessed: 11 July 2024)










