This is a vulnerable lab available @ https://tryhackme.com/room/chocolatefactory



POC

1. Nmap scan: The pentest started with a nmap scan using 
nmap -T4 -sV -A 10.10.12.204  
![image](https://github.com/user-attachments/assets/d6c9ab51-46d6-495e-981e-8544c5f4d30c)

This have back the services running on the server,


a. Port 21: This allowed anonymous login, and the port was accessed using 
ftp  10.10.12.204

After a succesful login, the file was downloaded 
![image](https://github.com/user-attachments/assets/ef7fc003-7fd9-4f0f-9684-7ec8988b2df4)



picture showing the download 
![gum_room](https://github.com/user-attachments/assets/39218184-a257-44b5-9826-ecdcd8ec7f1d)

b.  80 

The homepage
![image](https://github.com/user-attachments/assets/88eac3bd-6883-4760-a27f-67bc0fafd0b0)




























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

  
