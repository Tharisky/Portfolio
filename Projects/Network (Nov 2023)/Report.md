# TASK A

The following are the network security problems for Company A based on the business requirements given in the scenario.
1. Denial of service: This usually  occurs when the network resources are overloaded with bogus requests or traffic, making them unavailable to  legitimate users.  If this event should happen, company A’s website may become unavailable for customers to access, internal operations may become impossible to carry out, and customers' account information may become unavailable.
2. Data breaches occur when an entity gains unauthorized access to sensitive  customer information.  Company A deals with their customers' financial data, and  these  data have  a very high hack value, making it  a target for bad actors. A Data breach to the Company may lead to the exposure of customers' financial data, which may cause huge financial loss to both customers and the company.
3. Single point of failure: Company A relies solely on its on-premises to provide its services or solutions to the customers. An Attack on their on-premise network may cause downtime, as there’s no cloud infrastructure to complement their on-premises activities.  This single point of failure may lead to disruption of services, and customers may be unable to access their accounts, and  investments or carry out online transactions using their cards.
4. Noncompliance with Regulatory standards: Company A falls in the financial sector where PCI DSS is the Regulatory standard.  Not being compliant with these regulations may attract regulatory fines, legal consequences, or Reputational damage.


The following are the Infrastructure problems for Company A  based on the business requirement given in the scenario.
1. Scalability: Being a global financial company, the absence of a cloud infrastructure has  caused scalability issues which will  not allow the company to expand physically into some regions, as their mode of network is rigid and can not conveniently handle increased network traffic especially when merged with Company B
2. Redundancy: This is achieved when critical network infrastructure is duplicated to ensure the continuation of services, in the face of fault or attack. The presence of cloud infrastructure would have helped company A achieve this, and help maintain the availability of their services to their customers at all times.
3. Lack of a VPN for remote desktop access: Enabling remote desktop connection (RDP) over the internet without proper implementation of a VPN introduces security risks such as unauthorized access, brute force attacks, and network eavesdropping. The presence of a VPN helps to secure the communication between the remote desktop and the internal Computer VLAN of the company.



The following are the network security problem for Company B  based on the business requirement given in the scenario.

1.Phishing Attacks: This occurs when a user is tricked into divulging sensitive information. This Network security issue may allow unauthorized  access into the servers of Company B, revealing the credit card information of medical providers that have purchased their services before.
2.Use of weak or common credentials :Many industry regulations and standards, such as the Payment Card Industry Data Security Standard (PCI DSS) and National Institute of Standards and Technology (NIST) guidelines, recommend or require the use of longer and more complex passwords to enhance security. Using eight-character passwords may lead to non-compliance. Such passwords are more susceptible to brute-force attacks, where an attacker systematically attempts all possible combinations to gain unauthorized access.


The following are the Infrastructure problem for Company B based on the business requirement given in the scenario.
1.Utilization of third part support for infrastructure needs: This might have saved cost for Company but the security and compliance standard of this third party is a great concern. Inherent  vulnerabilities from these infrastructure could be exploited which could expose their payment records, reveal sensitive info from the client’s credit cards.

2.Lack of a dedicated cybersecurity role: Company B, being a provider of specialized software to medical provider, lacks a cybersecurity personnel needed to help oversee the overall security posture of the company.  This shows that the company is not really security conscious as expected, and is more vulnerable to unauthorized access, and other security related attacks.


# TASK B (Company A)

1.Two existing vulnerabilities for company A include:
a)Open ports 21-90, 3389: While these ports maybe necessary to achieve the operations of the company, some of them are lacking security mechanism (I.e port 23 - telnet). These unsecured ports are target for attackers and can serve as an entry point into the network. if outdated services are running on the secured ports, they could also be exploited to gain access into the servers.

b)User accounts no longer required are not removed: This vulnerability indicates that some unneeded accounts are still active in the company. This is not a good security practice as these dormant accounts could be exploited and used to access the company resources.

2.The impact, risk and likelihood of having Open ports 21-90, 3389.
a)The Impact of  this vulnerability. 
i.These ports, when actively probed by attackers, will give out potential information that can be used to further exploit and gain access to the servers.
ii. Ports like FTP(21), HTTP(80) , Telnet (23), and some other open ports are built without a security mechanism. Data in transit  can then be easily manipulated, eavesdropped or redirected  in the face of a man-in-the-middle attack. 
b)The risks associated with this vulnerability include:
i.Unauthorized access to the servers
ii. Unintended file disclosure.
iii.The compromise of Data confidentiality and Integrity.

c)The likelihood  of attackers exploiting these ports is extremely high, as they will be captured during the early stage of cyber attacks (Reconnaissance and scanning).
 
3.The impact, risk and likelihood of having unrequired accounts being active.
a)The impact of this vulnerabilities:
i.These unneeded but active could easily be exploited and used to gain persistence into the company’s infrastructure.
b)The risk associated with this vulnerability:
i.Compromised Confidentiality: The confidentiality of  sensitive financial information contained in the servers would be compromised
ii.Increased potential for unauthorized users
c)The likelihood of attackers exploiting this vulnerability is medium.


# TASK B (Company B)
1.Two existing vulnerabilities for Company B includes:
a)MFA not enforced across all users: This vulnerability describes the lack of Multifactor authentication in company B. The Multifactor authentication, when enabled, helps to limit unauthorized access by requesting for another means of user verification after both authorized or unauthorized users has tendered a legitimate credential. Inability to tender this second level of verification will restrict access to the resource being contacted. 
b)PostgreSQL admin is reachable from internet: This Vulnerability indicates that the PostgreSQL database admin account can be accessed remotely via the internet

2.The impact, risk and likelihood of the absence of MFA. 
a)The impact of this vulnerability when exploited may include:
i.Bruteforcing and Gaining unauthorized access  into  the company’s resources that requires credential access (e.g workstations, servers ).
ii.Compromised workstations could be used to access customers payment data, leading to unauthorized transaction and credit card fraud. These workstations could also be used to access the company’s trade secret (source code or blueprint of their specialized software)


b) The risks involved with this vulnerability includes
i.Compromised security:  MFA not being enforced, weakens the overall security posture of the company’s resources, making it easier for attackers to gain access on bruteforcing weak or default credentials, or after a worker has been tricked to disclose his/her credentials via phishing.
ii.Financial loss: Unauthorized transaction or exposure of credit card details could lead to direct financial loss for customers.s
iii.Disruption of Operations: In the face of an attack caused by the absence of MFA (I.e account takeover or data breaches), normal business operations can be  disrupted, leading to downtime, or additional cost of recovery.

c)Given that the company offers specialized software, and also deals with credit card,  they are a high value target for cyber criminals looking to get their hands on the source code or blueprint of the software, and cyber criminals looking to get access to credit cards.  The likelihood this vulnerability being exploited is high..

3.The impact, likelihood and the risk associated with  the PostgreSQL admin being  reachable from internet
a)The impact of this vulnerability when exploited may include:
i.Unauthorized access to the PostgreSQL database: In a bid to attack a company,  Attackers tend to exploit public facing apps or database owned by the target company. Attackers could potentially exploit weak credentials, absence of command filters and other vulnerabilities to gain control over the database.
ii.The compromise of data integrity:  The data present in the database could be compromised or manipulated by an attacker, hereby, making it difficult for the company to trust the accuracy of its own data especially when there’s no backup dat.

b)The risks involved 
i.Credentials harvest: On compromise, attackers could harvest all the credentials present in the database, which could be used to initiate unauthorized communications or transactions.
ii.Reputation Damage: The company’s reputation could be easily damaged and clients would easily lose trust in them to protect their sensitive information(credit card details) 

c)Given that the PostgreSQL  admin is reachable from the internet makes the database more susceptible` to cyber attacks, as the visibility of this service on the internet is an entry point for attackers to gain access to the database using automated tools.


# TASK C

![Network_Topology](https://github.com/user-attachments/assets/fd9a069a-9718-40ff-a3bc-b6adbc6bd2f0)




# TASK D

Components in the network includes: 
1.IPS: The Intrusion prevention systems is a security component that monitors network and/or system activities for malicious or unexpected behavior, and can take preventive actions against such events. It can be found in the network layer of both OSI and TCP/IP models.

2.VPN Tunnel: The VPN tunnel is a secure and and encryption connection between two devices or network over the internet.  It can be found in the Network Layer of the OSI model and TCP/IP model for tunnel establishment, Presentation layer in the OSI model for the encryption and decryption of data, and Transport layer of the TCP/IP model for Encryption and decryption of data. 

3.ISP Router: This is a device that connects a user or private network to the  network  It operates at the network layer of both OSI and TCP/IP model.

4.Servers: In a network, servers are specialized computers that provides services, resources, or functionalities to other computers called clients. Severs present In this topology includes CDE servers, Application servers, database servers.  The server operates at the Application layer of both OSI and TCP/IP model.

5.Switch: A switch is a network components that helps connect multiple devices within a local area Network. It operates  at  the Data link layer of both OSI and TCP/IP  model

6.Miraki Access  Point: This is a wireless networking component that allows WiFi enabled devices to connect to a wired network. It operates at the data link layer of both OSI and TCP/IP model

7.Sophos Firewall: A firewall is a network security that monitors and allows access into the network based  on predetermined rules. This firewall  operates at the network layer of both OSI and TCP/IP model. 

8.Active Directory server:  The AD server is responsible for managing resources within a network, including user accounts, policies and security configurations. It operates at the 
9.2FA server:  The 2FA server is responsible for managing the two factor authentication process. It operates at the application layer of both OSI and TCP/IP model.

10.Printers: These are devices that produces hardcopy of written documents or images stored in electronic form.it  operates at the application layer of both OSI and TCP/IP model

11.Laptops and Desktops: These are computers designed for individual use. They are reffered to as clients, as they feed off resources that is being supplied by a server. it  operates at the application layer of both OSI and TCP/IP model


12.VPN Client: This is a software installed on a device, and enables it to connect to a VPN server, establishing a secure and encrypted connection over the internet.  It operates at the presentation layer of both OSI and TCP/IP model

13.VPN gateway: This is a network device that facilitates connection between VPN clients and the VPN server. It operates at the presentation layer of both OSI and TCP/IP model

14.MFP/Copier: A MFP  or copier combines various office functionalities such as scanning, copying and faxing.  It operates at the Application layer of both OSI and TCP/IP model


# TASK E
The rationale for adding, deleting, or repurposing network components in the newly merged network topology diagram, including details of how each component addresses budgetary constraints.

1.Cloudflare web-app firewall which cost $20 per month ($240 per year) when billed annually was added to help shield or protect the external web-server from malicious traffic.  This addressed the budgetary constraints by providing enhanced security for the web server, and has in turn, reduced the risks of attacks, and minimized the potential costs related to incident response and recovery in the face of an attack. 
2.The exchange and sharepoint servers were deleted and replaced with  Microsoft 365 business basic which costs $6 per month ($72) for a single user, and ($7,200) for 100 users. This helps to accommodate the expansion of Company A, and these services can easily scale up or down to meet the Merged company’s demand.Microsoft 365 operates on a subscription-based model, which can result in predictable and potentially lower costs compared to the upfront capital expenses associated with maintaining on-premises servers.
 
3.Two Cisco L-ASA5512-IPS-SSP devices which costs $1,160 per unit, were added to the network to:
a)Detect and prevent anomaly in the traffic entering  and leaving the server segment of the network.
b)Detect and prevent anomaly in the traffic entering and leaving the internal network to the internet
4.One Fortinet Firewall  was replaced  with Two Sophos XGS 126w firewall   in company A to achieve high availability and redundancy. Based on the comparison of the Sophos and Fortinet firewall  gotten from gartner.com, Sophos firewall is more cost  effective than Fortinet. Also, it has an overall rating of 4.7/5 when compared to Fortinet 4.6/5.  Therefor, getting two Sophos firewall at company A is more cost effective than getting two Fortinet firewall at Company B.
5.The Border router 7600 used in company was removed and replaced with Cisco2911-v/k9 which costs $1,722.10 as the border router has reached the end of life according to Cisco.
6.The Servers in the internal network of company A were separated into different VLANs to achieve micro segmentation and enhance security.
7. The guest  WiFi was separated from the corporate WiFi to achieve the segmentation of the enterprise traffic from guest traffic.  
8.The servers present in Company B are migrated to the Google  cloud and both companies  can access them as a cloud infrastructure. The  e2-standard-2 which costs $48.91/mo(586.92) is sufficient to handle all the needed infrastructure.  This helped to save cost since Company B was initially  using virtual servers and purchasing new hardware to replace them will cost much more. 
9.OpenVPN (standard version) which costs $70 per month($840 per year)  was added to address accessing the network via the remote desktop without a proper security mechanism which would help  prevent eavesdropping. 
10.Repurposing the sharepoint and exchange servers  into 2FA and Active directory servers helped save the cost of buying new hardware components.
11.Two Dell PowerEdge R720 Server which costs $762 per unit  were added as the CDE(Card Holder Data Environment)  servers to the on premise.  and also  to the cloud. This was done to ensure that the company is being compliant with the PCI DSS regulations, and that access control and proper network segmentation is achieved.


# TASK F
The secure network design principle used in this proposed network topology include:
1.Defense in depth: This ensures that Multiple layers of security controls are employed to protect against a variety of threat. This was achieved in the proposed methodology by deploying IPS, an extra unit of firewall and VPN to help secure the network at different layers of the OSI model.

2.Zero trust: This principle ensures that no entity , whether inside or outside the network’ should be inherently trusted. This was achieved in the topology by the micro-segmentation of the network( especially the on premises servers), the  Installation of  IPS to enhance the continuous monitoring of the network, and the installation of a 2FA server. 

3. Economy of principle: This principle  requires that the network design or topology is kept simple as possible to reduce the likelihood of security flaws and make the system more understandable and manageable. The proposed network was created with simplicity, ensuring that the connection between components of the the network are understandable and manageable.





# TASK G
The relevant  regulatory compliance requirement that were addressed by the proposed topology include:
1.PCI DSS: PCI DSS is the acronym of Payment Card Industry Data Security Standard, and it is a set of security standards designed to ensure that companies that accept, process store or transmit payment card information or details maintain a secure environment .  This regulatory is relevant to the newly merged company as its operates in the financial industry, and serves it customers with financial products. The company also accepts credit card as a mode of payment. The proposed network meets the regulatory requirement of PCI DSS by ensuring;
a)The deployment of a dedicated, secured and properly segmented Server for the CDE( Cardholder Data Environment),
b)The Continuous monitoring of the network by the deployed IPS

2.HIPAA:   This is the acronym for Health Insurance  Portability  and Accountability Act.It focuses primarily on the portability and health insurance company, and the protection of sensitive patient health information. Asides offering financial products, the newly merged company also offers specialized software to healthcare  providers. Offering this services means they are , either directly or indirectly, going to handle data that belongs to patient, so the  company has to also navigate regulatory requirement in HIPAA . To achieve compliance with HIPAA, the topology of the merged network was designed to be micro segmented, to limit who can access data that relates to health.




# TASK H

Emerging threats that are applicable to the merged organization includes:
1.Advanced Persistent Threats: APTs are sophisticated and targeted cyberattacks conducted by well-funded and organized groups. These attackers aim to gain unauthorized access to financial networks, exfiltrate sensitive information, and remain undetected for an extended period. APTs aim to steal sensitive financial information, customer data, or intellectual property of the merged company which  could lead to severe financial losses, reputational damage, and regulatory consequences for the financial institution. In the face of an attack,  APTs may use the network to exfiltrate large volumes of data, leading to increased network traffic and potential congestion. This network congestion can result in slower response times, affecting the performance of critical financial applications and services. To manage these risks posed by APTs,  the company should prioritize regular risk assessment and vulnerability management. 
2.Ransomware: Ransomware is a type of malware designed to deny access to a computer system or files until a sum of money, or ransom, is paid by the victim. Bad actors use various methods, such as phishing emails or exploiting vulnerabilities, to infect a system with ransomware. Once activated, the ransomware encrypts files or the entire system, rendering it inaccessible to the user. 
Ransomware activities, including communication with command and control servers and encryption processes, can consume significant network bandwidth,  resulting  in decreased network performance and slower response times for legitimate network activities.
 The actualization of this threat can lead to loss of critical financial data, disruption of  operations, compromise of  customer trust, and  regulatory non-compliance. Regular backups and the development of an incident response plan can help save and retain data in the face of this attack.



# TASK I
Overview of the merged topology.
The Proposed network maintains and improve on the on premises infrastructure of Company A, while Company B’s infrastructure were migrated to the cloud to allow for scalability and easier communication with company A. The topology is design such that the external web server is located outside the internal network, and it is protected by a web application firewall. Two sophos firewall were IPS was introduced into the network to monitor traffics going into the internal network from the internet, and to also monitor traffics entering and leaving the DMZ switch were all servers are connected. Active Directory and 2factor authentication server were added to the network for strict monitoring and access controls. CDE servers were also added to allow for a segmented storage and handling of the CardHolder Data. 
The internal network of Company B was limited to communications between the workstations and the printers in the company. Every other communication between Company B and Company will have to pass through the cloud infrastructure.  The topology utilizes Microsoft 365 in place of the legacy sharepoint and exchange  servers. 

Justification for the recommendations
The micro segmentation of the external web servers helps to control external  access to the internal network via  the website, and the implementation of a web application firewall helps to protect against web application attacks. 
Also,  Maintaining and enhancing the on-premises infrastructure of Company A ensures continuity and improvement of existing systems. Simultaneously, migrating Company B's infrastructure to the cloud introduces scalability, flexibility, and facilitates seamless communication with Company 
While the Introduction of IPS helps to monitor and report anomaly,  The inclusion of Active Directory and a dedicated 2FA server ensures robust access controls and strict monitoring. This strengthens overall network security by verifying user identities and providing an additional layer of authentication, enhancing protection against unauthorized access.
Also, Segmenting the storage and handling of Cardholder Data (CDE) enhances compliance with data security standards. This approach ensures that sensitive information is stored and processed in a controlled environment, reducing the risk of unauthorized access and data breaches.
Finally, the adoption of Microsoft 365 in place of legacy SharePoint and Exchange servers aligns with industry trends and modernizes communication and collaboration tools. This cloud-based solution offers scalability, automatic updates, and improved accessibility, contributing to increased efficiency and collaboration.



The cost-benefit analysis for the proposed topology.
1.The cloud infrastructure and services: While these infrastructures and services  attracts subscription fees, they also enhance collaboration, communication and productivity.
2.The on premises infrastructure: Newly added components like the CDE servers, Sophos firewall, 2FA and AD servers, and other initially existing infrastructure attracts continuous operational expenses for r maintaining and supporting the network infrastructure.
3.Adapting to the new Microsoft 365 environment may cause short disruption as staffs may not be familiar with utilizing or maximizing the service. A training which may incure training cost may be required. 
The proposed network infrastructure brings significant benefits in terms of improved communication, enhanced security, compliance with data handling standards, and scalability. However, there are associated costs, including subscription fees, initial hardware and software investments, implementation and migration costs, and ongoing operational expenses






#Reference

Nick, J (2023). What is PCI DSS?
https://www.techtarget.com/searchsecurity/definition/PCI-DSS-Payment-Card-Industry-Data-Security-Standard

Cisco 7600 Series Routers - Retirement Notification
https://www.cisco.com/c/en/us/obsolete/routers/cisco-7600-series-routers.html

Fortinet vs Sophos 
https://www.gartner.com/reviews/market/network-firewalls/compare/fortinet-vs-sophos

Network Redundancy: Definition, Types and How To Improve It
https://www.indeed.com/career-advice/career-development/network-redundancy

Lutkevich, B.(2020). What is HIPAA
https://www.techtarget.com/searchhealthit/definition/HIPAA

Raina, k.(2023) what is zero trust.
https://www.crowdstrike.com/cybersecurity-101/zero-trust-security/

Alspach, K(2023)
https://www.crn.com/news/security/10-emerging-cybersecurity-threats-and-hacker-tactics-in-2023/3

Our plans|Pricing|Cloudflare
https://www.cloudflare.com/plans/

Compare all Microsoft 365 plans
https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products

	
CISCO2911-V/K9
https://www.router-switch.com/cisco2911-v-k9-p-164.html

Ryan Jones, R(2023). Google cloud pricing.
https://www.websiteplanet.com/blog/google-cloud-pricing/

https://www.amazon.com/Sophos-XGS-126w-Next-Gen-Firewall/dp/B095L2JJ4B/ref=sr_1_2?crid=1F00JBZ7C55SU&keywords=sophos+xg+126&qid=1701798540&sprefix=sophos+xgs+12%2Caps%2C283&sr=8-2









