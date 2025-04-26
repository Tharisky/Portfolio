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

Then, the service was checked to 

To make this configuration or changes, the command 
`
