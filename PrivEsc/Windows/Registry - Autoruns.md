# Vulnerability Overview


# POC
This exploitation was done as a white box test, where we had credentials to a valid user account, and from there , try to see how  we can exploit the windows machine.

### Initial Access
The machine 
![Screenshot from 2025-03-19 08-32-37](https://github.com/user-attachments/assets/874bcd58-703c-443d-915c-5c0a721b41ae)

then using the following command, i was able to get the (Autoruns)
    
    reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
![image](https://github.com/user-attachments/assets/779f48f7-971d-4c6a-8532-1b265bea0115)

or
                                    
    wmic startup get caption, command
![image](https://github.com/user-attachments/assets/30030100-2834-4461-acb2-98a0282ca71c)

Next, tried getting the access on this autoruns using the following command 

    C:\PrivEsc\accesschk.exe /accepteula -wvu "C:\Program Files\Autorun Program\program.exe"


![image](https://github.com/user-attachments/assets/59a4dc95-0765-4517-a87c-03cb5a35e4ca)

    
    
### Exploitation
