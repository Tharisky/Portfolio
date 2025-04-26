# Vulnerability Overview
A Windows privilege escalation vulnerability where a service’s ImagePath in the registry is unquoted and contains spaces 
`(e.g., C:\Program Files\MyService\MyService.exe)`. Windows misinterprets the path, trying intermediate paths first (e.g., C:\Program.exe), allowing an attacker to place a malicious file there if they have the  "write access" to any directory in the path.



# POC
This attack is a white box, as credentials and information about the vulnerable service was provided. 

The attack started by getting a reverse shell on the attacker machine using a reverse shell file called esc.exe
![image](https://github.com/user-attachments/assets/fe04b6c1-5d47-4c47-8962-36829a605259)


The quering the vulnerable service using the command
`sc qc unquotedsvc`

The result shows that the Binary_path_name was written without no quote, and this confirms the vulnerability..
![image](https://github.com/user-attachments/assets/93d30514-dfec-430c-b61e-725667e976d3)


To exploit this vulnerability, the directories in the path C:\Program Files\Unquoted Path Service\Common Files\unquotedpathservice.exe was examined to see on which one the user account 'user' has access to read and write, using the following commands 
C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:"
C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\"
C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\Unquoted Path Service"

The third command `C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\Unquoted Path Service\"` gave RW BUILTINuser whihc means all authenticated users can read and write into the directory
Picture below showcasing this
![image](https://github.com/user-attachments/assets/c682213c-53f1-464b-845f-5379b6fe8fd8)


Then using the command below, a malicious exe file named "common.exe' was saved in the "Unqouted Path Service" because following the trend of the path, "common" comes immediately after "unqouted path service " directory 
copy C:\users\user\esc.exe "C:\Program Files\Unquoted Path Service\Common.exe"
pICTURE BELow shows that the copying of files was completed
![image](https://github.com/user-attachments/assets/1828b0f0-c8d2-4a76-ae70-41dfb65ecd6d)


then the service was started using the following command, and a reverse shell with a system privilege was gotten
net start unquotedsvc

picture showing the final reverse shell
![image](https://github.com/user-attachments/assets/3bad4c77-63c4-4a8c-a12b-1a7e35562ff5)


