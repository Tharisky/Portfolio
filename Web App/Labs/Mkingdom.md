This lab is available at https://tryhackme.com/room/mkingdom

Mkin


## Enumeration
1. Service Discovery
using the nmap -T4 -sV -A 10.10.45.14 >> scan.txt, it was discovered that http is running on port 85
![image](https://github.com/user-attachments/assets/23e0edc2-675d-48b8-942b-8ceea1375b36)

The homepage was accessed and it contained no link, just a static pae with no info
The homeoage picture
![image](https://github.com/user-attachments/assets/5d33b405-1661-4c76-a586-4fb6b4fb319c)

2. Directory Enumeration: 
Using FFUF
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u http://10.10.45.14:85/FUZZ -fc 403

A page "app" was discovered 
![image](https://github.com/user-attachments/assets/a283822e-302f-4479-99b1-376969e462c6)


The app page when accessed 
![image](https://github.com/user-attachments/assets/5c9b7986-0359-45cd-b575-f20ac83d21f9)
