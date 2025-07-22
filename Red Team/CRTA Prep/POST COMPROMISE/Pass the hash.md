This attack was carried out on a compromised windows machine in the network.
Checklist before carryinng out the attack

1. Get access to the target ( Here, i used xfreerdp3 with a compromised credential) via the command `proxychains xfreerdp3 /u:usr /p:pass /cert:ignore /v:10.10.10.21`

screenshot below 
<img width="998" height="287" alt="image" src="https://github.com/user-attachments/assets/28391551-3944-45d8-9a83-3128890f0bbc" />

2. Disable the antivirus
   sdsd
   <img width="962" height="738" alt="image" src="https://github.com/user-attachments/assets/93840b64-f72b-471f-8c15-1ec36bc041d2" />

3. Run PowerShell as admin, and run an execution policy bypass command 
<img width="998" height="287" alt="image" src="https://github.com/user-attachments/assets/267c3893-a389-402a-bd41-40814a7c12c6" />

   
The attack progression

## Downloading Mimikatz onto the target 


## Utilizing Mimikatz to pass the hash
1. Execute mimikatz.exe and run " privilege::debug "
<img width="1007" height="252" alt="image" src="https://github.com/user-attachments/assets/85e7d259-1189-42dc-b029-ca9498ce7b20" />

2. Dumb the credentials in the compromised machine's memory using the command " sekurlsa::logon " 
<img width="1021" height="490" alt="image" src="https://github.com/user-attachments/assets/24397aa8-a1a3-4f8a-9fbf-90d2f402f6d8" />

3.  From the dumped credentials, choose a particular account and its hash to run the pass the hash attack. `sekurlsa::pth /domain:cyberware.firm /user:app-svc /ntlm:9b241c87d54a761a08a8cae4252f4dca /run:powershell.exe`
<img width="1032" height="458" alt="image" src="https://github.com/user-attachments/assets/323a58ff-acaf-48b5-9d94-5d79361ef3b8" />
This should spin up a new PowerShell running on the "Compromised machine" but with the privileges of the account used during the pass the hash attack.
running "whoami" or "systeminfo" would still show the information of the inital credentiials (instead of the account whose hash was passed) used to compromise the machine, and the details of the machine ( since we are yet to pivot to other machines in the network


### Pivoting to other machines using the newly spuned powershell 
1. After the pass the hash attack has been completed  new powersheel is gotten, run ' powershell -ep bypass)
2. A tool called "Find-wmillocaladminaccess" was used to scan all the machines in the domain,and return the machines where the account whose credentials were passed, holds local admin privielege. This was done because pivoting to other machines would work if the accont being used for the pioting has local admin access on the machine. the script was first initiallized using " . ./Find-WMILocalAdminAccess " and the the command "Find-WMILocalAdminAccess -Verbose" was used.
<img width="989" height="605" alt="image" src="https://github.com/user-attachments/assets/cdced52a-5958-426a-8913-ae7e2ec1fded" />
This returned couple of machines where the accout has local admin access. Other accounts could be checked out to see if they also have the needed privilegess.

3.Once it has been confirmed that credentials has enough privileges, a tool called PPSexec can now be used to perform lateral movement to other machines
Here is the machine's IP, the user and system info just before the lateral movement. 
<img width="998" height="683" alt="image" src="https://github.com/user-attachments/assets/d487fe84-fc32-4e98-823f-38a0cc9edcb2" />


Screenshot showing lateral movement to the 10.10.10.2 machine,  the machine's IP, the app-svc user and the system info
<img width="998" height="683" alt="image" src="https://github.com/user-attachments/assets/bb00b619-a017-403d-97f5-68b3e52a99b0" />

Screenshot showing lateral movement to the 10.10.10.3 machine,  the machine's IP, the app-svc user and the system info
![Uploading image.png…]()

