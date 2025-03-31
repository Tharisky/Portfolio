# Overview

![image](https://github.com/user-attachments/assets/cc6282c4-5bfb-4f62-86ea-e00bec94290b)
This lab environment contains a web application vulnerable to SQL injection, and insecure file upload


# POC
Using the command below, the server was scanned for running services, and two running ports were discovered ( 22, and 80)

    nmap -T4 -sV 192.168.125.150

The website was accessed, and the picture below sghowcases the website
![image](https://github.com/user-attachments/assets/3b01ee4d-5d42-4f25-839d-f9d5a15f0da9)



The link to the "test" page accepts inputs from the user ( more like a filter) `http://192.168.125.150/cat.php?id=1`
![image](https://github.com/user-attachments/assets/be99cfbc-9da9-435a-bc17-24c4f00f1d27)


## SQL injection detection

I tested the "id" parameter contained in the page's link with a simple payload ( a single '), and the page returned an SQL-based error, which proves that the page is vulnerable to injection\

![image](https://github.com/user-attachments/assets/f93ebd8b-d8c3-4907-9270-205f0b3d9a1f)

It was also tested using burpsuite, and the picture below shows the result
![image](https://github.com/user-attachments/assets/bbb39fbc-c8ef-45f1-9be2-f6427d74f022)

## SQL Injection Exploitation
For the exploitation of this vulnerability, SQLMAP was used 
The HTTP request of the vulnerable page was copied, saved as a text file,  and used as a parameter in the sqlmap command

        sqlmap -r testpage.txt --level=2 --risk=2 --tables
    

![image](https://github.com/user-attachments/assets/0ba6050d-2960-47d4-b133-93b74363e58d)
___ 

The tool also detected that the parameter "id" in the request is vulnerable to 
1. Boolean-based blind
2. error-based
3. Time-based blind
4. Union query
![image](https://github.com/user-attachments/assets/3a58a255-b05c-4c56-b5bf-24242888cc64)

_____

Eventually, the tool returend some useful tables from the websites's databae
1. categories
2. pictures
3. users
![image](https://github.com/user-attachments/assets/ff562893-c1f7-4a01-93c4-3d03658c8acf)
