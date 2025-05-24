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
A page "app" was discovered 
![image](https://github.com/user-attachments/assets/a283822e-302f-4479-99b1-376969e462c6)

