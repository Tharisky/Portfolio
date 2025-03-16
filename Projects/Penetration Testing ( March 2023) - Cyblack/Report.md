__A PENETRATION TESTING  REPORT ON  YELLOWSTONE(_Company name and IP withheld_)__

CONDUCTED BY  CYBLACK (JANUARY-2023 INTERNSHIP) TEAM 5

TEAM LIST
`1. Tharisky (Team lead) _Full name, and names of other teammembers with held)`


__EXECUTIVE SUMMARY__

Penetration testing is the use of authorized hacking techniques to discover exploitable weaknesses in the target's security systems. Pen testing is also referred to as ethical hacking. This report aims to provide the details of the recently conducted vulnerability assessment and penetration tests carried out for Yellowstone. 
To ensure the success and usefulness of penetration tests, the following steps may be carried out by the Security team:  
1. Verifying that a threat exists requires conducting reconnaissance using social engineering, vulnerability assessment tools, network scanners, etc.
2. Bypassing the security controls
3. Probe the controls for weaknesses, i.e., configuration weaknesses and errors, weak passwords, etc.
4. Exploit vulnerability
5. Escalating privileges
The team was assigned a penetration testing task to gain superuser access by identifying and exploiting vulnerabilities on Yellowstone’s target server.

The scope of the tasks includes: 
` 1. Carrying out  active reconnaissance or exploitation in the virtual environment`
` 2 . And if any denial-of-service vulnerability is discovered, it should be reported without it being exploited. Actions that would lead to an outage of services should be avoided` 

Below is the pictorial representation of the tasks performed.
![Picture 1]()


After the completion of the task, some of our recommendations include :
1. Stronger credentials should be utilized on the login page
2. On the server, bash history should be deleted after each login session
3. Open ports should  be patched periodically to prevent malicious attacks



__Chapter 1 - Key findings and Recommendation__

During the penetration test, we found out the following :
1. The use of unsecured ports (FTP and HTTP)
2. Hidden directories ( robots.txt, login.html)
3. Weak credentials are used on the login page
4. SSH credentials were left exposed in the homepage
5. Two users were found on the server (root and cyblack-user)
6. A flag was found in the home directory of cyblack-user
7. MySQL database credentials were found in a file (authenticate.php)
8. Three user credentials were found in the database.
9. The tar command was found to have sudo privileges on the cyblack-user account
10. A root.txt file was found in the root’s home directory 

Our Recommendation includes
1. The FTP port should be replaced with SFTP
2. The HTTP port should be replaced with HTTPS
3. Stronger credentials on the login page
4. Bash history should be deleted
5. Open ports should be patched periodically
6. SSH credentials should be removed from homepage
7. Database credentials should be removed from the website directory
8. Non root users binaries should have no sudo privilege


##Chapter 2 -Vulnerability Register*


Vulnerability register

Services/Port	Severity	Impact/Severity	Recommendation
FTP Service/ 21	High	Could be prone to an unauthenticated copying of files vulnerability.
Cross-site scripting
Brute-forcing passwords	Update of service version
Apache HTTP Server/ 80	High	Prone to unauthenticated root access  
cross-site scripting
SQL injections
DDoS attacks cross-site request forgeries	Install the latest version.
SSH /22	Medium	Prone to unauthorized users using leaked SSH keys or brute-forcing credentials	Using public key authentication
Weak login credentials	High	Prone to brute forcing	Use of stronger credentials
Exposure of credentials 	High	This helps the attacker  to be more productive and accurate as these exposed credentials can be used to gain initial access	All credentials should be securely saved or documented
Sudo privilege on non root account	High	The account can be exploited for privilege escalation	Non root users should have least privilege
CVE-2021-29041	High	This flaw allows an attacker with access to the agent socket to forward an agent either to an account shared with a malicious user or to a host with an attacker holding root access. The highest threat from this vulnerability is to confidentiality, integrity, as well as system availability.	Patch/upgrade the service
CVE-2021-41617	High	A flaw was found in Open SSH. Helper programs for Authorized Keys Command and Authorized Principals Command may run with privileges associated with group memberships of the ssh process, if the configuration specifies running the command as a different user. 	Use of IDP (intrusion detection systems)and IPS(intrusion prevention systems.)
CVE-2021-36368	Low	An issue was discovered in Open SSH before 8.9. If a client is using public-key authentication with agent forwarding but without -o Log Level=verbose, and an attacker has silently modified the server to support the Non authentication option, then the user cannot determine whether FIDO authentication is going to confirm that the user wishes to connect to that server, or that the user wishes to allow that server to connect to a different server on the user's behalf.	Regular scan and update
			


Technical detail

OPEN PORT 21 (FTP)
The first vulnerability is related to the FTP server and the fact that anonymous login is allowed, which could allow unauthorized access to sensitive files. This vulnerability is considered high severity due to the potential impact on the confidentiality and integrity of the data.
When a system is running an FTP service, it opens port 21 to allow incoming connections from clients that wish to transfer files. An open port 21 can be a security risk if the FTP service is configured to allow anonymous login or if weak authentication mechanisms are used.
If anonymous login is allowed, anyone can connect to the FTP server without providing a username or password. This means that an attacker could potentially gain unauthorized access to sensitive files on the server. To mitigate this risk, it is important to disable anonymous login and require all users to authenticate before accessing the FTP service.


Weak login credentials
There is a use of weak and common credentials on the website. This was easily brute-forced using BurpSuite as the credentials were caught in a word-list and an SSH login was discovered after the sign in was completed.	

Open port 22 (SSH)
Though the credentials for  this port were gotten from the homepage, the port is vulnerable to brute force.
 An open port 22 typically refers to an SSH (Secure Shell) service running on a system that is listening for incoming connections on port 22. SSH is a network protocol that allows secure remote access to a system or device over an unsecured network, such as the internet. 
This could allow an attacker to gain unauthorized access to the system or escalate privileges.  An open port 22 can be a security risk if weak authentication mechanisms or outdated software are used.
If weak authentication mechanisms are used, an attacker could potentially gain unauthorized access to the system by guessing or brute-forcing the password. This can be mitigated by enforcing strong password policies, implementing two-factor authentication, or using public-key authentication instead of passwords.
An open port 22 can also be vulnerable to attacks such as SSH brute-force attacks, which involve attempting to guess the correct username and password combination to gain access to the system. To mitigate this risk, it is important to implement security measures such as rate limiting, IP blocking, or using tools that detect and prevent brute-force attacks.
To secure an open port 22, it is important to ensure that the SSH service is configured securely, that authentication mechanisms are strong, that the software is up-to-date and that access to the port is restricted to authorized users.
 It is also recommended to use tools such as intrusion detection systems (IDS) or security information and event management (SIEM) systems to monitor the SSH traffic and detect any suspicious activity.


Exposure of credentials
Credentials for SSH was found unprotected in the homepage while credentials for MySQL was found in the  authenticator.php file. This exposed credential gave us the accuracy to sign in to accounts and exploit them



Sudo privilege on non root account
A binary, tar , has a sudo privilege configured on it. This was exploited to gain root access and own the server.
























Chapter 3 - Testing Timeline

PArt A -  Reconnaissance: Port/Service Scannning Steps

This is the information gathering stage where we collected data about the targeted system.The following data were gathered during the port scanning stage
Port 21 - FTP
Port 22 - SSH
Port 25 - SMTP
Port 80 - HTTP
Port 587 - submission
To gather this data, we;
Opened a terminal on our Linux virtual machine and the following command was used sudo Nmap -O 104.248.32.109




Part B - Web content discovery

Content discovery is the  process of searching through website’s directory to access or see its content that are kept hidden from the public.
The team used a tool called Gobuster to find robots.txt, a hidden directory on the website.To achieve this, we :

Opened a terminal on our Linux virtual machine and the following command was used gobuster dir --url http://104.248.32.169 --word-list big.txt -t20




After robots.txt, the hidden directory was found, we tried the directory out on our browser and we got another exposed directory - login.html






The login.html directory was accessed and it turned out to be a login page 




We performed a brute-force attack on the login page using burpusite where we got the credentials admin(user)  - password(password)





The gotten credentials were later used to sign in and we found  SSH credentials lying in the homepage










Part C -  Linux Enumeration, Exploitation and Privilege Escalation Steps.



The linux enumeration is the act of methodically searching a target for data. During this phase, we were able to access the server using the SSH service and the credentials found in the website’s homepage. The following steps were taken(on the server) from the initial access stage to the privilege escalation phase:


Using the following commands, we accessed the server via SSH on our linux terminal with the discovered SSH credentials, and enumerated the  kernel version and the linux distribution respectively



We also enumerated the users and services on the server using the following command cat /etc/passwd. Two users (root and cyblack-users) were found to be the users on the server while mysql service was found too.


We found this flag in the home directory


Using cd var/www/html/ We tried looking into the website directory, maybe there will be a clue to access the database 


We checked out the files listed in this directory and a file aunthenticate.php seems to contain some credentials for the mysql database. 


We accessed the database using the following command mysql -u admin -p with the hope of finding a credential that can be used on the SSH service to gain more privilege. The following credentials were found and none of them are users on the server, they are users only on the website.




Meeting a dead end, we tried downloading a LinEnum.sh scrpt on the server (a script that automates linux enumeration)  by setting up a SimpleHTTPServer on our machine and then downloading the file on the server.

We gave the script an execution privilege and we executed it.  More details were discovered  but we focused more on misconfiguration and  bits that can be exploited to gain escalated privilege. A bin -tar- was found guilty










We exploited this vulnerability using sudo tar -cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/bash a command we got and edited from GTFOBins and we were able to gain the root privilege.







After we gained the root access, below is the flag gotten from the root  home directory




Conclusion

Based on the result of the penetration Testing, it is clear that there are vulnerabilities present in the server which could lead to security breaches and compromise . It is highly recommended that the identified vulnerabilities are promptly addressed and remediated.
It is also important to note that penetration testing is an ongoing process that should be conducted regularly to keep up with new threats and potential vulnerabilities















































Appendix 1: Tools Used

Visual Machine. The oracle VM virtual box is a powerful x86 and AM64/Intel64 visualization product




Nmap. This allows us to scan the network and discover a wide variety of information about what is connected and what services each host operates on.




Gobuster. This is a brute force scanner tool to enumerate directions and files of web content discovery.



3.Burp Suite. This is an integrated platform tool for performing security testing of web applications.





MySQL. This was used to view the database and change the password which was encrypted. 



LinEnun.sh. this is a script that was used to enumerate the privileged escalation vector.

















