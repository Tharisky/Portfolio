![image](https://github.com/user-attachments/assets/b5bd875b-fcc3-4286-afcc-a077677343fc)Wreath is designed as a learning resource for beginners with a primary focus on:

Pivoting
Working with the Empire C2 (Command and Control) framework
Simple Anti-Virus evasion techniques



# Brief
There are two machines on my home network that host projects and stuff I'm working on in my own time -- 
one of them has a webserver that's port forwarded, so that's your way in if you can find a vulnerability! It's serving a website that's pushed to my git server from my own PC for version control, then cloned to the public facing server. See if you can get into these! My own PC is also on that network, but I doubt you'll be able to get into that as it has protections turned on, doesn't run anything vulnerable, and can't be accessed by the public-facing section of the network. Well, I say PC -- it's technically a repurposed server because I had a spare license lying around, but same difference.


# Enumeration 

As with any attack, we first begin with the enumeration phase
1. Fping: Using the command fping -agq 10.200.73.200/24 the network was ping to figure out what is in the network
The reult returned 3 Ip address,
  A. 10.200.73.1 - the gateway
  B. 10.200.73.200 - Which is the public facing server 
  C. 10.200.73.250 - unknown machine
![image](https://github.com/user-attachments/assets/1f8ce2fb-c9a3-4f5a-8f7b-7f3a33af18e1)



2. Nmap: This was used to further enumerate the Hosts found in the network
   A.  10.200.73.250 Host: This was scanned using nmap -T4 -sV -A 10.200.73.250  -oN scan.txt  and the result only showed
       i.  port 22 is actively running OpenSSH 7.6p1 Ubuntu 4ubuntu0.5 (Ubuntu Linux; protocol 2.0)

   ![image](https://github.com/user-attachments/assets/13b0b801-9bd8-4a18-aeeb-ca6942862a54)

  B. 10.200.73.200 Host: This was scanned using nmap -T4 -sV -p- 15000  -A 10.200.73.200  -oN scan.txt, and it returned the following
      i. Port 22 runnig OpenSSH 8.0 (protocol 2.0)
      ii. Port 80 running Apache httpd 2.4.37 ((centos) OpenSSL/1.1.1c)
      iii.Port  443   Apache/2.4.37 (centos) OpenSSL/1.1.1c
      ![image](https://github.com/user-attachments/assets/01be25df-0866-42bd-be16-3791b2237e54)
Going forward with the enumeration, the website was accessed, and was accessible only after adding the domain name resolved on the bowsrr when the IP addressed was input into the browser, into the /etc/hosts file
![image](https://github.com/user-attachments/assets/2c468504-6e52-4663-ba16-9dcba2c33952)
      iv. Port 9090 which showed closed status but is running zeus-admin
      v. Port 10000 running      MiniServ 1.890 (Webmin httpd)
      vi. The operating system is linux CenSOS


