# Overview
This lab environment, which is available at,  contains a web application vulnerable to SQL injection and insecure file upload

![image](https://github.com/user-attachments/assets/cc6282c4-5bfb-4f62-86ea-e00bec94290b)


# POC
Using the command below, the server was scanned for running services, and two running ports were discovered ( 22, and 80)

    nmap -T4 -sV 192.168.125.150

The website was accessed, and the picture below showcases the website
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
The HTTP request of the vulnerable page was copied, saved as a text file `(testpage.txt)`,  and used as a parameter in the sqlmap command

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

Eventually, the tool returned some useful tables from the websites's databae
1. categories
2. pictures
3. users
![image](https://github.com/user-attachments/assets/ff562893-c1f7-4a01-93c4-3d03658c8acf)

____
The entire database was then dumped using the command below, 

        sqlmap -r testpage.txt --level=2 -T users --dump-all


and the user table entries were obtained.
The table contained the admin username and password(this was saved in md5)

![Screenshot from 2025-03-31 14-27-36](https://github.com/user-attachments/assets/f213e059-74eb-4e2c-bcbc-37599cd53533)

____

The discovered credentials were used to access the admin page
![image](https://github.com/user-attachments/assets/1e08b720-ab83-4176-bd43-0b79dbc39350)


____


## Insecure file upload exploitation

After getting access to the admin page, a `New Picture` functionality was found on the website, and its work is to allow the admin to upload a new image. This is where the website was tested for an insecure file upload vulnerability, and a PHP script was uploaded instead of a picture

![image](https://github.com/user-attachments/assets/f0a9229d-ec93-4347-a7b0-6f0d5a6c8bfc)



A reverse shell script was modified to house the IP address of the vulnerable website and was uploaded onto the website while an NC listener was active on the attacker's machine

        Picture showing the php reverse shell script
![image](https://github.com/user-attachments/assets/90ca856b-e1cc-4898-aa26-b821b2e086cc)


The php was uploaded, and the website rejected it with the warning "NO PHP."
     
        Picture showing the upload process on the website, this was rejected
![Screenshot from 2025-03-31 14-45-16](https://github.com/user-attachments/assets/878bc6f7-2cd5-434d-ad52-54203f8eac8e)


The upload request was then intercepted on Burpsuite, the file's name was modified to end with "php1", and the request was sent. The website accepted this file thinking it was an img file

        picture showing the upload process that was accepted
![image](https://github.com/user-attachments/assets/aacb8d19-1ef0-4e88-a72b-2e361fda949d)


![Screenshot from 2025-03-31 14-49-29](https://github.com/user-attachments/assets/97287cf0-5c8e-4a7c-8450-a7fadfe3a8f1)



## Getting a shell

Using gobuster, i was able to figure out the location of the uploaded reverse shell

        

![Screenshot from 2025-03-31 15-26-36](https://github.com/user-attachments/assets/f1010513-6a51-4541-969b-862a8644a45a)

