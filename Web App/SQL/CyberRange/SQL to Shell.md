# Overview

![image](https://github.com/user-attachments/assets/cc6282c4-5bfb-4f62-86ea-e00bec94290b)
This lab environment contains a web application vulnerable to SQL injection, and insecure file upload


# POC
Using the command below, the server was scanned for running services, and two running ports were discovered ( 22, and 80)

    nmap -T4 -sV 192.168.125.150

The website was accessed and the picture below sghowcases the website
![image](https://github.com/user-attachments/assets/3b01ee4d-5d42-4f25-839d-f9d5a15f0da9)



The link to the "test" page accepts inputs from the user ( more like a filter) `http://192.168.125.150/cat.php?id=1`
![image](https://github.com/user-attachments/assets/be99cfbc-9da9-435a-bc17-24c4f00f1d27)


## SQL injection detection

I tested the page with a simple payload ( a single '), and the page returned an SQL based error, which proves that the page is vulnerable to injection\

![image](https://github.com/user-attachments/assets/f93ebd8b-d8c3-4907-9270-205f0b3d9a1f)

It was also tested using burpsuite and the picture below shows the result
![image](https://github.com/user-attachments/assets/bbb39fbc-c8ef-45f1-9be2-f6427d74f022)

## SQL Injection Exploitation
For the exploitation of this vulnerability, SQLMAP was used 
The HTTP request of the vunerable page was copied and used as an a parameter
