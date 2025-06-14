Kindly Note that the test carried out in this lab environment  was a gray box test, meaning that some information was provided, and oin situations where these information were not provided, alternates methods wwould be used
e.g credentials of the compromised webserver

# PART A - Enumeration to Pivoting

## Enumeration
This is the act of getting information from a target, and in this environment, an active recon was done
1. The webserver was accessed using the credentials (compromisd or provided) via ssh from the external network
   ssh ah01crt@192.168.10.247

![image](https://github.com/user-attachments/assets/61aa8f9f-6424-4b18-a29f-2568cd4f5c11)

2. The network interfaces of the compromised webserver was  enumerated and it provided an additional network interface that connects to the internal network
![image](https://github.com/user-attachments/assets/508cc111-95d0-4a37-bf0b-2654a58ba743)

3. The newly found interface was then enumerated:
     a. using the command arp - a, the IP addresss 10.10.10.2, 10.10.10.21 were discovered
   ![image](https://github.com/user-attachments/assets/ba65af0f-7578-4bc4-a9cc-0ea183d5ea1e)
      b. using the command fping  -agq 10.10.10.0/24, only 10.10.10.2 was newly discovered; the tool did not discover 10.10.10.21
   ![image](https://github.com/user-attachments/assets/3eb64036-30d6-4237-8253-a34bc0016d24)
      c. 
4. The hosts were then enumerated individually
     a. 10.10.10.22 host: using nmap -sT 10.10.10.2 -Pn, the result returned a couple of ports (53 -domain, 135 - SMB, 636- ldapssl, and oothers) which giives an indication tat 
   ![image](https://github.com/user-attachments/assets/3277b9f2-50d1-433a-8527-04233a4ce241)

   b. 10.10.10.21 host: using nmap -sT 10.10.10.21 -Pn. This returned port 135 -msrpc, 3389 -ms-wbt-server, this confirms that this is a windows machine and it is running a remote desktop

   ![image](https://github.com/user-attachments/assets/a55df725-3306-4c50-9df1-0a2b8721f1ce)

## Pivoting

Pivoting is the act of moving through different sections of  netwworks. in this environment, pivoting worked 


![image](https://github.com/user-attachments/assets/571a35c4-fe87-4075-bbe5-c80ec69c8944)





![image](https://github.com/user-attachments/assets/b455f8c4-8379-4db3-9f56-9f7258aa96f2)

