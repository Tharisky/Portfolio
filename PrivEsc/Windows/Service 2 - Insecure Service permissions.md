# Vulnerability Overview 

Insecure Service permission is a Windows privilege escalation vulnerability in which a service’s permissions allow a low-privileged user to modify its configuration (e.g., binary path) via the Service Control Manager (SCM).

Since Windows services often run with SYSTEM privileges, an attacker can manipulate a service if its configuration allows a low-privileged user to modify its executable path or settings, and get a next level access

# POC

The test is a white box test, as prior information was given as regards login credentials and affected service (daclsvc)

The machine was logged into, and an inital access was gotten by running a reverse shell to connect to the attacker machine


![image](https://github.com/user-attachments/assets/6705201c-abfd-4448-ba41-52b7822884fa)


The service was querried to see if it has system privileges using the following command 

`sc qc daclsvc`

the command returned the pictuire below, showcasing  (SERVICE_START_NAME): Local system - which means that the service is running with system privilege
![image](https://github.com/user-attachments/assets/15578eb3-d703-4a3b-8338-0e9aa873261d)


to get the access righht of the user account "user", the following command was used 
`C:\PrivEsc\accesschk.exe /accepteula -uwcqv user daclsvc`

Pictyure showing that user account "user" has read/write access on some  permissions like the 'service_change_config" on the target service
![image](https://github.com/user-attachments/assets/7f66ca50-bb75-4957-ad89-f05ad46e6320)


The 'service_change_config" permision access that the user has means, the user can go ahead to make changes to the service's configuration, such as changing the binary path, display name, start type, or account under which the service runs.




The Binary path option        BINARY_PATH_NAME   : "C:\Program Files\DACL service\daclservice.exe" was then focused on, as any changes made here will affect the service binary. it means any time the service is meant to run, it will call on the newly specified binary
The newly modified binary can either be
  1. A binary that gives reverse shell
  2. A binary that adds the current user to the admin group



To exploit this vulnerability, the binary path was changed to a path containing a malicious file with reverse shell capabilities using the following command

`sc config daclsvc binpath= "\"C:\users\user\esc.exe""`
The picture showing success after the command has been ran
![image](https://github.com/user-attachments/assets/a709d56f-61e2-4b89-b67a-7c39ba2b3b6a)

Then, a listner was started on another terminl on the attacker machine, to listen to connections that the now compromised binary path will initiate on start

the command below was then use to start the service, and an elevated shell was gotten
`net start daclsvc`


![image](https://github.com/user-attachments/assets/c58ea347-7bd3-450e-8bf6-e30a70964771)




sc config daclsvc binpath= "C:\Users\user\malicious.exe"
