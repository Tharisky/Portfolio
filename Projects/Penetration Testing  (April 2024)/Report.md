SCENARIO
My cybersecurity firm,CCF (Cyber Career Fair), has been contracted to perform a penetration test for a medium-sized law firm named Client solution Agency, with multiple offices across the nation. The firm's web application, located at withheld, enables clients to access legal resources, schedule appointments with attorneys, and submit confidential documents for review. While the application doesn't store financial data, it does contain sensitive personal information about clients and their legal matters. Attorneys and administrative staff use the web application to manage client cases, access legal documents, and communicate with clients. Additionally, clients can submit inquiries and documents through the web portal. All staff credentials, including those of attorneys and support staff, are stored within the application's database.


PART A - INFORMATION GATHERING
The following are the ways through which information was gathered during this test:
1.OSINT Activities
2.Website Reconnaissance
3.Port Scanning and Enumeration

1.OSINT Activities: 
The OSINT activities performed on Client Solution Agency includes 
a.DNS Reconnaissance via WHOIS: WHOIS is a query and response protocol used for querying databases that store registered users or assignee of an Internet resource, such as a domain name, an IP address block, or an autonomous system. Using the WHOIS tool the following information were gotten: 
i.Domain Name: CWSCENARIO.SITE
ii.Registry Domain ID: D268362727-CNIC
iii.Registrant Country: Great Britain 

Figure 1. WHOIS result





b.DNS Enumeration via DNSenum: 
DNSenum is a recon naissance tool used in domain name information gathering during penetration testin. Using the DNSENUM, we were able to get the Host’s addresses, Name Servers, Mail (MX) Servers

Figure 2.   DNSenum result

c.DNS Enumeration via THEHARVESTER
TheHarvester is a powerful open-source tool used for gathering publicly available information about email addresses, subdomains, host names, and other details related to a target domain. Using this tool, we were able to discover subdomains,IP address associated with our clients domain name.

Figure 3.  theHarvester result
The   Effectiveness of OSINT 
OSINT is effective for penetration testers due to its ability to gather valuable information about a target without direct interaction. By leveraging publicly available information from sources such as social media, public databases, and online forums, penetration testers can gather reconnaissance data discreetly, minimizing the risk of detection and laying the groundwork for a successful penetration test. ImpactQA (2021). 
Scenario Assessment
i.Subdomain of the client: Provides attackers with a specific target for reconnaissance and exploitation, aiding in focused attacks on the client's infrastructure.
ii.IP address of the client: Enables targeted attacks such as DDoS or exploitation of server vulnerabilities, posing a direct risk to the availability and security of the client's web services.
iii.Name servers: Critical for DNS resolution, knowledge of name servers can facilitate DNS-related attacks or domain hijacking, leading to service disruption or unauthorized access.
iv.Host servers: Details about hosting providers or server configurations can aid attackers in identifying weak points for exploitation or unauthorized access to sensitive data.
v.Registry Domain: Offers insights into domain registration status and contact information, which attackers could leverage for social engineering or domain hijacking attacks.
2.Active  Reconnaissance 
The active reconnaissance carried out includes:
a.Information gathering from source code 
b.Enumeating files, and directory
c.Taking advantage of robots.txt
a.Information gathering from source code during penetration testing involves analyzing the codebase of a target application or system to uncover potential vulnerabilities or security weaknesses.   After proper scanning of the source code, few data leaks were found which include the username and password of users. This leaks  was  stored into a text file named users.txt and pass.txt.


Figure 4. The  homepage source code
b.Enumerating files, and directory: Enumerating files and directories during penetration testing involves systematically discovering and cataloging the files and directories present on a target system or web application. During this stage, a tool named dirbuster was used to discover files and directory on the clients server.

Figure 5. Files and directories discovered.

c.Taking advantage of robots.txt: During the files and directory enumeration phase, a file named robots.txt was discovered. . It's a text file located at the root directory of a website that specifies which parts of the site should not be crawled or indexed by search engine bots. This file  provided valuable insights into the site's structure, potentially revealing hidden directories or sensitive areas that are not intended for public access. 

Figure 6. Robots.txt


Figure 7. jotto directory



Figure 8. cgi-bin  directory

Scenario Assessment: 
a.Credentials Found in Source Code: Malicious actors can directly use the credentials to gain unauthorized access to various services or legal resources associated with Client solution Agency and her clients. With access to credentials, attackers can escalate privileges within the system, gaining deeper access to critical infrastructure or sensitive data. 
b.Robots.txt: By enumerating the files and directories disallowed in robots.txt, attackers can target hidden or sensitive  areas of the website for further reconnaissance or exploitation. For instance, they may discover cases files, digital evidences, backup file, court orders, admin panels, or development environments that could be vulnerable to attacks. 
3.Scanning and Enumeration
Scanning and enumeration  aimed at identifying vulnerabilities and gathering information about target systems. While Scanning involves actively probing target systems or networks to discover open ports, services, and potential vulnerabilities, Enumeration is the process of gathering information about target systems, such as user accounts, network shares, and application configurations. Activities carried out on the client server includes: 
a.Scanning opened ports
b.Scanning filtered ports
c.Enumerating for services on opened ports 

a.Scanning Opened Ports: Scanning opened ports involves using network scanning tools to identify which network ports are actively listening for incoming connections on a target system or network. Open ports can indicate services or applications running on the system that are accessible from the network.  Using a tool called nmap, the client’s server was scanned,and the following open ports were discovered 
i.SSH (Secure Shell): Port 22 is typically used for SSH, a cryptographic network protocol for operating network services securely over an unsecured network.
ii.  HTTP (Hypertext Transfer Protocol): Port 80 is the default port for HTTP, which is the foundation of data communication for the World Wide Web. It is used to transfer hypertext (web pages and other resources) between clients and servers.
iii.NetBIOS-SSN (NetBIOS Session Service): Port 139 is used for NetBIOS Session Service, which allows communication between computers on a local network. 
iv.IMAP (Internet Message Access Protocol): Port 143 is the default port for IMAP, a protocol used by email clients to retrieve emails from a mail server. 
v.Microsoft-DS (Microsoft Directory Services): Port 445 is used for Microsoft Directory Services, including Active Directory, file sharing, and printer sharing services on Windows networks. 
vi.HTTP-Proxy: An HTTP proxy acts as an intermediary between clients and servers for web requests, providing functions such as caching, filtering, and anonymity.
vii. Black Ice-ICECAP: Port 8081 is often associated with BlackICE, a firewall and intrusion detection system. ICECAP is a component of BlackICE. 

Figure 7. Opened ports

b.Scanning Filtered Ports: Scanning filtered ports involves identifying network ports that are blocked or filtered by a firewall or other network security device.  By altering the parameters of  the nmap command, the following filtered ports were gotten: 
i.DHCPC (Dynamic Host Configuration Protocol Client): DHCP is a network protocol used to dynamically assign IP addresses and other network configuration parameters to devices on a network.
ii.NetBIOS-NS (NetBIOS Name Service): Port 137 is used for NetBIOS Name Service, which resolves NetBIOS computer names to IP addresses. It's part of the NetBIOS over TCP/IP suite of protocols commonly used in Windows networks.
iii.NetBIOS-DGM (NetBIOS Datagram Service): Port 138 is used for NetBIOS Datagram Service, which provides connectionless communication between computers on a local network. 

Figure 8. Filtered ports

c.Enumerating for Services on Opened Ports:This process typically involves sending specialized probes or queries to the open ports to gather information about the services, such as version numbers, banner information, or supported protocols. 


Figure 9.Version of Services

Open ports 
Open ports refer to communication endpoints on a computer or network device that are actively listening for incoming connections. Each open port is associated with a specific service or protocol, allowing data to be transmitted to and from the device over a network. Threats to an open port includes: 
i.Unauthorized Access; Attackers may exploit open ports to gain unauthorized access to a system by exploiting vulnerabilities in the associated services or protocols.
ii.Data Exfiltration; Open ports may be used as entry points for data exfiltration, allowing attackers to steal sensitive information or upload malware to compromised systems.
iii.Denial Of Service Attacks; Attackers can target open ports with DoS attacks, flooding the service with excessive traffic or requests to overwhelm and disrupt its normal operation.
iv.Information Disclosure; Open ports may inadvertently expose sensitive information or misconfigured services, providing attackers with valuable reconnaissance data for further exploitation. Einorytė, A. (2024)

Scenario Assessment
i.HTTP (Port 80): While HTTP is essential for web communication, an open HTTP port could be vulnerable to various attacks such as HTTP flooding, HTTP header injection, or cross-site scripting (XSS). Attackers could exploit these vulnerabilities to gain unauthorized access to sensitive legal documents or client information stored on the web application.
ii.NetBIOS-SSN (Port 139):  An open NetBIOS-SSN port could potentially expose file shares or printer resources to unauthorized access. Attackers could use this to gain access to confidential legal documents stored on network shares or compromise the integrity of the network.
iii.IMAP (Port 143): An open IMAP port could be targeted for email account enumeration, brute-force attacks, or email phishing attempts. Compromised email accounts could contain sensitive communications between attorneys and clients, potentially breaching attorney-client privilege or exposing confidential information.
iv.Microsoft-DS (Port 445): An open Microsoft-DS port could expose the server to SMB-based attacks such as EternalBlue or SMB relay attacks, leading to unauthorized access to sensitive legal documents or client data stored on network shares.
v.HTTP-Proxy (Port 8080): An open HTTP-Proxy port could be targeted for proxy server exploits, allowing attackers to intercept and manipulate web traffic passing through the proxy. This could lead to data interception, injection of malicious code into web pages, or unauthorized access to sensitive legal documents or client information transmitted over the web.
vi.Black Ice-ICECAP (Port 8081): An open port for an intrusion detection system could potentially be targeted by attackers for evasion or bypass techniques, compromising the effectiveness of network security defenses and allowing malicious activities to go undetected.
vii.DHCP (Port 67): An open DHCP port could potentially be targeted for DHCP-based attacks such as DHCP spoofing or DHCP starvation. Attackers could disrupt network connectivity, intercept network traffic, or conduct man-in-the-middle attacks, compromising the confidentiality and integrity of data transmitted over the network.


Part B
1.Data Tampering
Here, the DVWA login page was accessed and a  tool called owasp-mantra was used to intercept traffic on the client side .

Figure 10. The DVWA login page


The traffic which contained the user credential was intercepted, and the credential was then modified to alter the original content.

Figure 11. The Intercepted Traffic




Research on Data Tampering:  
Data tampering vulnerability refers to the susceptibility of data to unauthorized modification or alteration by malicious actors. This vulnerability typically arises when there are weaknesses or flaws in the systems, protocols, or processes responsible for managing and securing data. Attackers exploit these weaknesses to gain unauthorized access to data and modify it for malicious purposes, such as stealing information, disrupting operations, or undermining the integrity and trustworthiness of the data.
This vulnerability violates the cybersecurity tenet of "integrity." Integrity ensures that data remains accurate, consistent, and trustworthy throughout its lifecycle. Data tampering undermines integrity by introducing unauthorized changes or alterations, which can lead to incorrect decisions, financial losses, reputational damage, and legal consequences. 
Scenerio Question:
In a data tampering attack on Client Solution Agency's web application, attackers can manipulate sensitive information stored in the database or exchanged between clients and staff. Here's what attackers can obtain and why it's dangerous:
a.Client Data: Attackers can alter client information like names, addresses, and case details. This could lead to incorrect legal advice, miscommunication, or legal disputes.
b.Legal Documents: Attackers can modify legal documents, contracts, or court filings, potentially leading to invalid agreements or legal liabilities.
c.Communication Records: Attackers can manipulate emails and messages related to client cases, misrepresenting instructions or fabricating evidence.
d.Credentials: Attackers may alter user credentials to gain unauthorized access, escalating privileges and compromising security.

2. SQLI
A formpage contained on the DVWA website was accessed, and was tested for an SQL injection vulnerability using payloads and Hackbar, a pre installed tool contained in the owasp-mantra.

Figure 12. The  Vulnerable Form


The server responded back with an error when the first (‘) payload was sent to it. The error returned exposed the fact that the server is vulnerable to SQL injection attacks.


Figure 13. The error repsonse after a payload was injected


Further payloads were then crafted to get the usernames contained in the database and their respective hash. The username was returned with the column “First Name”, while the hash was returned with column “Surname”

Figure 14. The  Usernames and hashes contained in the database
Research On SQL injection
SQL injection is a cybersecurity vulnerability where attackers inject malicious SQL code into input fields of a web application. This code is executed by the application's database, enabling attackers to manipulate data, modify database contents, or execute commands.
SQL injection attacks undermine the integrity and confidentiality of data within databases. By inserting malicious SQL queries into input fields, attackers can manipulate or delete data, compromising its integrity.
Scenario Assessment
In a SQL injection attack on Client Solution Agency's web app, attackers exploit vulnerabilities to access sensitive data and gain unauthorized access. Here's what they can obtain and the risks:

a.Client Data: Attackers can steal personal and case information, risking client privacy and legal consequences.
b.Authentication Credentials: Stolen usernames and passwords grant unauthorized access to the app and data.
c.Administrative Access: Attackers may gain control over the app, compromising its integrity and availability.
d.System Information: Attackers gather details to identify more vulnerabilities and plan further attacks.

3.XSS
The  sheperd sceurity page was examined for a cross site scripting vulnerability using a payload and HTTP Header Live, a firefox extension. The attack failed as the application has been developed in a way to filter out the word “script”, a  known command needed to carry out a XSS attack

Figure 15. XSS attack failed

However, another payloaded(<IMG SRC=”#” ONERROR=”alert(’Vulnerable to XSS’)”/>) was crafted and tested against the application. The attack was succeful, which proved that the application is vulnerable to an XSS attack.
Figure 15. XSS attack completed

Rsearch on XSS
Cross-Site Scripting (XSS) is a cybersecurity vulnerability where attackers inject malicious scripts into web applications. These scripts run in users' browsers and can steal data or perform unauthorized actions. Cross-Site Scripting (XSS) breaches the integrity and availability of web applications. Through injecting malicious scripts into web pages, attackers tamper with the content or functionality of legitimate websites, compromising their integrity
Scenario Question
Here's the information attackers can obtain and the dangers they pose to the company:

a.Client Data: Attackers can steal client session cookies or input data, such as usernames and passwords, when clients inadvertently execute malicious scripts injected into web pages. This compromises the confidentiality and security of client accounts and personal information.
b.Sensitive Documents: If administrative staff or attorneys are targeted, attackers can access and exfiltrate sensitive legal documents, contracts, or case-related information stored within the web application. This breach can lead to privacy violations, legal disputes, or exploitation of confidential information.
c.Communication Records: Attackers can intercept and manipulate communications between clients, attorneys, and staff, potentially altering instructions, agreements, or evidence exchanged through the web application. This undermines the integrity and confidentiality of attorney-client privilege and jeopardizes the trust between the law firm and its clients.
4.Other Vulnerability
a.Remote file inclusion: This vulnerability was identified when the url of the application was edited to accomodate the url of the vicnum index folder.

Figure 16. RFI identified
Scenario Assessment
Remote File Inclusion (RFI) presents a severe threat to Client Solution Agency's web application, allowing attackers to include and execute remote files hosted on external servers through vulnerabilities within the application.  RFI directly violates the Cybersecurity tenet of Integrity, as it compromises the system's integrity by permitting the execution of unauthorized code, potentially leading to unauthorized modifications or access to sensitive data.

b.OS command Injections: This vulnerability was discovered when a form intended for pinging hosts allowed other commands to run.
 
Figure 17. OS command injection

Scenario Assessment
Operating System (OS) Command Injection poses a significant risk to the security and availability of Client Solution Agency's web application by enabling attackers to execute arbitrary operating system commands on the server through vulnerabilities within the application. This exploitation grants attackers full control over the server, compromising data confidentiality and integrity, and allowing for malicious actions such as deleting files, modifying configurations, or gaining unauthorized access to the server. OS Command Injection directly violates the Cybersecurity tenets of Confidentiality and Availability, as it compromises the confidentiality of sensitive data stored on the server and threatens the availability of the system by allowing attackers to disrupt services or compromise the functionality of the web application.

5.Cryptanalysis Attack
A cipher text was discovered on the security shepherd,  and an attempt to crack it was carried out . The ciphertext was eventually cracked using key 13.
Ciphertext =
Plaintext =

Figure 18. Security sheperd

				


					Figure 19. Result Key

Scenario assessment
The impact of a cryptanalysis attack on the company if succesful includes
a.Data Breach: The exposure of plaintext resulting from a cryptanalysis attack constitutes a data breach, potentially compromising sensitive information such as customer data, financial records, intellectual property, or trade secrets.
b.Loss of Confidentiality: The primary impact of a successful cryptanalysis attack is the loss of confidentiality. Sensitive information that was intended to be kept secret and secure is now accessible to unauthorized parties, which can lead to reputational damage and loss of trust among customers, partners, and stakeholders.
Part C - Denial of Service:  
Attackers carry out Denial of Service (DoS) attacks on web services by flooding them with a high volume of malicious traffic, overwhelming their resources and causing them to become unavailable to legitimate users.The CPU usage of the server was captured, then a tool called hping3 was used to perform denial of service attack on the client’s web server.

Figure 20 CPU usage of the server before the attack

Figure 21: Hping3 

After the attack was launched against the server, the CPU% incrreased from the initial 13% to 48%, causing the server to slow down and become unresponsive.

Figure 22. CPU usage of the server after the DOS attack
What cybersecurity tenet this vulnerability violates
A denial of service attack aims to disrupt the availability of a service, system, or network by overwhelming it with a flood of malicious traffic, requests, or actions. This prevents legitimate users from accessing the service or resource, effectively denying them access.
Scenario Question: What is the impact of this attack on your scenario company
a.Disruption of Services: The primary impact of a DoS attack is the disruption of services provided by the web application. If the application becomes inaccessible or experiences significant slowdowns due to overwhelming traffic or resource exhaustion, clients and staff will be unable to access legal resources, schedule appointments, submit documents, or manage client cases. 
b.Loss of Revenue: The inability to provide services to clients due to a DoS attack can result in a loss of revenue for Client Solution Agency. If clients are unable to access the web application to schedule appointments or submit documents, they may seek legal services from other firms, resulting in a loss of potential business for the company.

Part D - Client Exploits
1.Man in the Middle Attack: 
A Man-in-the-Middle (MitM) attack is a type of cyber attack where an attacker intercepts and possibly alters communications between two parties without their knowledge or consent.
A tool called Wireshark was used to  capture whatever session is going on in (eth0) while waiting in the background

Figure 23 Wireshark
As soon as a  legitimate user tries to send packets (tries to login), the wireshark captures the traffic and then the traffic was analyzed.  

Figure 24. Captured traffic

The http request being a request without security was selected and the  POST message was investigated , because when users input their details on a webpage, it will be sent using the POST method.
After analyzing the Traffic to get POST, details such as the IP address, HTML form URL encoded. This gave us the user credential
 
 Figure 25. Captured traffic revealing user credentials 
Scenario assessment:
a.Client Credentials: Attackers could intercept login credentials entered by clients when accessing the web application. This includes usernames and passwords, which could be later used for unauthorized access to client accounts. This breach of client credentials compromises the confidentiality and security of their personal information and legal matters.
b.Confidential Documents: Since clients can submit confidential documents for review through the web portal, attackers could intercept these documents during transmission. This includes legal documents, contracts, sensitive correspondence, and any other information clients entrust to the law firm. Access to such documents could lead to privacy breaches, identity theft, or exploitation of sensitive legal matters.
c.Case Details and Communications: By intercepting communications between attorneys, administrative staff, and clients, attackers can access sensitive case details, discussions, and strategies. This breach compromises attorney-client privilege, which is fundamental to the legal profession. Attackers could exploit this information for various malicious purposes, including blackmail, extortion, or gaining unfair advantage in legal disputes.

2. Social Engineering Attacks:
A social engineering attack is a type of cyber attack in which an attacker manipulates individuals into divulging confidential information, performing actions, or providing access to sensitive systems or data. Using Site Cloner, a subset of Social Engineering Attack Tools,  we were able to clone a webpage on the client’s website, and redirect legitimate users to it, to capture their credentials
 
 Figure 26. Captured  credentials 
Scenerio Assessment
In a social engineering attack on Client Solution Agency, attackers manipulate employees to obtain sensitive information such as login credentials. This breach can lead to unauthorized system access, financial losses, and reputational damage.



Part E - Recommendations 
1.Reconnaissance
Based on the reconnaissance findings, here are some recommendations to minimize the threats posed by potential attackers:
a.Implement Domain Privacy: Since WHOIS lookup revealed sensitive information about the domain registration, such as contact details, consider enabling domain privacy services offered by registrars. This will help in masking personal information and making it harder for attackers to gather information about the organization.
b.Regular DNS Monitoring and Security: Given that DNS enumeration provided insights into the domain's architecture and infrastructure, it's crucial to regularly monitor DNS records for any unauthorized changes or suspicious activities. Implement DNS security solutions that can detect and prevent DNS-related attacks such as DNS spoofing, DNS hijacking, and DNS cache poisoning. 
2.Port Knocking
Port knocking is a security technique used to protect network services by hiding them behind a firewall or router and only allowing access to these services after a specific sequence of connection attempts, known as "knocks," has been detected. 
Port koncking can protect the threats posed by the identified ports by :
a.Obscurity: Port knocking hides the existence of network services and ports by keeping them closed and inaccessible to unauthorized users. Attackers scanning for open ports will not receive a response from the server, making it more difficult for them to identify potential targets.
b.Reduced Attack Surface: By keeping ports closed and inaccessible until the correct knocking sequence is received, port knocking reduces the attack surface and minimizes the exposure of network services to potential threats, such as port scanning, unauthorized access, and exploitation of vulnerabilities.
3.SQL
a.Exercise Caution with User Input: Approach all user input with skepticism. Given that any user-provided data utilized within an SQL query poses a potential SQL Injection threat, it's imperative to treat all input as untrustworthy.
b.Avoid relying on blacklists for filtering user input. Blacklist-based filtering methods are susceptible to circumvention by adept attackers. 
c.Opt for the latest iterations of development environments, programming languages, and associated technologies to benefit from enhanced security features. .(Acutenix)
4.XSS_
Effectively mitigating XSS vulnerabilities typically involves implementing a combination of the following strategies:
i.Input Filtering: Apply rigorous filtering to user input upon its arrival. This involves scrutinizing input based on expected or permissible formats to minimize the risk of malicious content being accepted.
ii.Output Data Encoding: Encode user-controlled data before it is presented in HTTP responses to thwart any attempts at malicious interpretation. Depending on the context of the output, a combination of encoding methods such as HTML, URL, JavaScript, and CSS encoding may be necessary. (Portswigger)
5.  Cryptanalysis: 
The following are ways through which this attack can be mitigated:
a.The Use of  Strong Encryption Algorithms such as AES (Advanced Encryption Standard) for symmetric encryption and RSA (Rivest-Shamir-Adleman) or ECC (Elliptic Curve Cryptography) for asymmetric encryption. 
b.Applying Cryptographic Salts when storing passwords or sensitive data hashes. Salting adds random data to each password before hashing, preventing the use of precomputed hash tables (rainbow tables) for password cracking.

6.MitM_
To protect against or minimize the impact of such attacks, security analysts can carry out several activities:
a.Encryption: Ensure that all sensitive communications, especially those involving credentials or personal data, are encrypted using protocols like HTTPS for web traffic, SSL/TLS for email, and VPNs for remote access. Encryption makes it difficult for attackers to decipher intercepted data.
b.Strong Authentication: Enforce strong authentication mechanisms such as multi-factor authentication (MFA) to add an extra layer of security. Even if credentials are intercepted, attackers would need additional information to gain unauthorized access.s
7.Social Engineering_
To prevent users from falling victim to social engineering attacks like the one carried out, companies should do the following:
a.Security Awareness Training: Conduct regular security awareness training sessions for all employees to educate them about social engineering tactics, such as phishing, pretexting, and impersonation. Training should include real-world examples, interactive exercises, and best practices for recognizing and responding to social engineering attempts.
b.Phishing Simulations: Conduct simulated phishing campaigns to test employees' susceptibility to phishing attacks. These simulations can help identify weaknesses in employee awareness and behavior, allowing organizations to provide targeted training and reinforcement where needed.
c.Multi-Factor Authentication (MFA): Enforce the use of multi-factor authentication for accessing sensitive systems and applications. MFA adds an extra layer of security by requiring users to provide additional verification, such as a one-time code sent to their mobile device, in addition to their username and password.
8.DOS_
To protect their web services against such attacks, companies employ various strategies which includes:
a.DDoS Mitigation Services: Many companies subscribe to DDoS mitigation services provided by specialized vendors. These services utilize sophisticated traffic filtering techniques to identify and block malicious traffic, allowing legitimate requests to reach the server.
b.Traffic Monitoring and Anomaly Detection: Implementing robust traffic monitoring and anomaly detection systems allows companies to identify abnormal patterns indicative of a DDoS attack. Automated systems can then trigger mitigation measures to mitigate the impact in real-time.
c.Rate Limiting and Throttling: Implementing rate limiting and throttling mechanisms can help control the rate of incoming requests, preventing the server from becoming overwhelmed during a DDoS attack. This involves setting limits on the number of requests a user or IP address can make within a certain time frame. (Stormwall 2022)
9.IDS and IPS _
Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) are both cybersecurity tools used to protect networks from unauthorized access, malicious activities, and security breaches. However, they serve different purposes and operate at different points within the network. Here are the key differences between IDS and IPS:
a.IDS monitors network traffic or system activity for signs of unauthorized access or malicious activities. It detects and alerts administrators to potential security threats but does not take direct action to prevent them. IPS goes a step further than IDS by not only detecting security threats but also actively blocking or preventing them from reaching their target. IPS can automatically respond to detected threats by blocking malicious traffic or taking other predefined actions to prevent exploitation.
b. IDS typically operates in a passive mode, meaning it only monitors and analyzes network traffic or system logs. When suspicious activity is detected, it generates alerts for human intervention, such as further investigation or manual response. IPS operates in an active mode, allowing it to actively block or modify network traffic in response to detected threats. IPS can automatically take predefined actions based on established security policies without requiring human intervention. (EC-council, 2023)
Scenario Assessment: 
For mitigating a Denial of Service (DoS) attack like the one carried out using hping3, an Intrusion Prevention System (IPS) would be a more suitable recommendation compared to an Intrusion Detection System (IDS). Here's why:
a.Real-time Response: An IPS is designed to respond to security threats in real-time by actively blocking or preventing malicious traffic from reaching its target. In the case of a DoS attack, such as the one initiated with hping3, the IPS can detect the abnormal flood of traffic and automatically take action to block the offending packets before they overwhelm the server.
b.Proactive Protection: Unlike an IDS, which merely alerts administrators to potential security incidents, an IPS proactively protects the network by actively blocking malicious traffic. This proactive approach is crucial for quickly mitigating the impact of a DoS attack and preventing service disruption or downtime.

References

Acunetix. What is SQL Injection (SQLi) and How to Prevent It. Retrieved from 
https://www.acunetix.com/websitesecurity/sql-injection/

Einorytė, A. (2024). Open ports: Definition and security challenges. Retrieved from https://nordvpn.com/blog/what-are-open-ports/#:~:text=Open%20ports%20identify%20network%20endpoints,can%20be%20abused%20by%20hackers.

EC-Council. 2023. IDS and IPS: Understanding Similarities and Differences. Retrieved from
https://www.eccouncil.org/cybersecurity-exchange/network-security/ids-and-ips-differences/

Fazila, M. 2024. 10 Ways to Prevent Man-in-the-Middle (MITM) Attacks. Retreived from
https://www.strongdm.com/blog/man-in-the-middle-attack-prevention

ImpactQA. 2021. OSINT Methodologies & Penetration Testing. Retrieved from https://impactqa.medium.com/osint-methodologies-penetration-testing-1872f6bf9ab3#:~:text=Open%2Dsource%20intelligence%20(OSINT)%20assists%20the%20penetration%20tester%20to,exposure%2C%20open%20ports%2C%20etc.

Interserver. 2017. What is port knocking. Retreived from
https://www.interserver.net/tips/kb/what-is-port-knocking/

LoginRadius.  Social Engineering Attacks: Prevention and Best Practices. Retreived from 
https://www.loginradius.com/blog/identity/social-engineering-attacks/

Portswigger. What is cross-site scripting (XSS)?
https://portswigger.net/web-security/cross-site-scripting#:~:text=In%20general%2C%20effectively%20preventing%20XSS,Encode%20data%20on%20output.

Stormwall. 2022.  How to increase the sustainability of websites and Internet applications against DDoS attacks. Retrieved from https://stormwall.network/blog-increase-resistance-to-ddos-attacks

            
