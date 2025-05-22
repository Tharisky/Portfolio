![image](https://github.com/user-attachments/assets/32e3e37b-e3ef-4a1c-bea4-36a244bba89b)This lab is available on https://tryhackme.com/room/adbasicenumeration


Checing  that the attacker machine can communicate with the target network using the command route -n
![image](https://github.com/user-attachments/assets/79c6293a-a682-490c-a912-5438061f109b)


## Mapping out the network 
1. Host discovery: this was done to chec out the availble macines in the activev directory enviironmnt usin the command fping  -agq 10.211.11.20/24. Four hosts were returned 
   ![image](https://github.com/user-attachments/assets/79e25dd6-aa59-4c82-9d1c-f7d452803583)
2. Nmap scan: This was done on each of the hosts fond in the environment to enumerate their services and undrstadn their role in the environment
     a. using nmap -T4 -sV -A 10.211.11.20. The  ports and sevices contained in the picture were discovered, 
   ![image](https://github.com/user-attachments/assets/949a1fe9-f8d6-4b9d-b8a4-722ccf4150b3)
   This
   b. using nmap -T4 -sV -A 10.211.11.10. The  ports and sevices contained in the picture were discovered
   ![image](https://github.com/user-attachments/assets/d3ac2eed-29f8-43d8-ba49-2d1734671a64)
   The scan confirmed that this is the Domain controller.



## Nework Enumeration via SMB

From the nma scan, SMB was found to be running on the domain controller and the other hosts
1. Snb enumeration for the DC: using a tool called smbclient
      a. Smbclient on the DC: the command smbclient -L \\\\10.211.11.10\\ we can notice that the smb lsted shares without using anypassword.  there are three non-standard shares that catch  attention: AnonShare, SharedFiles and UserBackups.
   ![image](https://github.com/user-attachments/assets/a6d3a504-952d-46e0-80c5-0d7371cf6ac2)

   b. Smbclient on the other wiindows machine: smbclient -L \\\\10.211.11.20\\ . This returned session setup failed: NT_STATUS_ACCESS_DENIED

   ![image](https://github.com/user-attachments/assets/70573a30-bcbd-4f00-88ac-6ccd95477465)
Alternatively, another tool called smbmap.py could be used to enumerate these shares 
   a. using the command smbmap -H 10.211.11.10 on the domain controller, smbmap listed the same share as what was gotten y smbclient eaarlir but this time, it shoowed  the permissions aailale on each sare, and the AnonShare, SharedFiles and UserBackups returned read and write access.

![image](https://github.com/user-attachments/assets/6c736ed7-2355-421e-85d3-2729200b266e)


3. Accessing SMB shares: Trying to access the shares with read and write permissions 
   a. Aaccessing Anonshare: using smbclient \\\\10.211.11.10\\Anonshare, the share has nothing inside
   ![image](https://github.com/user-attachments/assets/49b92d8a-528d-4e45-84a0-7dc3622a4a3b)
   b. Accessing ShareFiles: using smbclient \\\\10.211.11.10\\SharedFiles. This returned a file called " Mouse and Malware.txt)
   ![image](https://github.com/user-attachments/assets/b24766c4-a109-4d2c-94e1-fcf002180056)
   c. Accessing UserBackus: smbclient \\\\10.211.11.10\\UserBackups.  Two files were found here.

   ![image](https://github.com/user-attachments/assets/092f6c0c-8974-4fee-8e85-ba1f73566b2b)



