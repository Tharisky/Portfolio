This lab is available on https://tryhackme.com/room/adbasicenumeration


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

