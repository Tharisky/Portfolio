# PAss the hash Attack 

This report documents a simulated attack on a compromised Windows machine within a network. The objective was to gain initial access, escalate privileges, and perform lateral movement to other machines in the domain. The attack leverages tools like Mimikatz for credential dumping and pass-the-hash techniques, followed by pivoting to other systems using tools such as PSExec. This report is intended for educational purposes within a controlled environment, such as a penetration testing lab.

## Pre-Attack Checklist

Before initiating the attack, the following steps were completed to ensure successful execution:

1. **Gain Initial Access**
   - Access to the target machine was obtained using compromised credentials via Remote Desktop Protocol (RDP).
   - Command used: `proxychains xfreerdp3 /u:usr /p:pass /cert:ignore /v:10.10.10.21`
   - **Screenshot**: Initial RDP connection
     ![RDP Connection](https://github.com/user-attachments/assets/28391551-3944-45d8-9a83-3128890f0bbc)

2. **Disable Antivirus**
   - The antivirus software on the target machine was disabled to prevent interference with the attack tools.
   - **Screenshot**: Antivirus disabled
     ![Antivirus Disabled](https://github.com/user-attachments/assets/93840b64-f72b-471f-8c15-1ec36bc041d2)

3. **Bypass Execution Policy**
   - PowerShell was launched with administrative privileges, and the execution policy was bypassed to allow running unsigned scripts.
   - Command used: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass`
   - **Screenshot**: PowerShell execution policy bypass
     ![Execution Policy Bypass](https://github.com/user-attachments/assets/267c3893-a389-402a-bd41-40814a7c12c6)

## Attack Progression

### Downloading Mimikatz
- Mimikatz, a post-exploitation tool, was downloaded to the compromised machine to extract credentials and perform privilege escalation.
- The tool was obtained from a trusted source and executed in a controlled environment to avoid detection.

### Pass-the-Hash Attack with Mimikatz

The following steps outline the use of Mimikatz to perform a pass-the-hash attack, allowing privilege escalation on the compromised machine:

1. **Enable Debug Privileges**
   - Mimikatz was executed, and debug privileges were enabled to access system memory.
   - Command used: `privilege::debug`
   - **Screenshot**: Enabling debug privileges
     ![Debug Privileges](https://github.com/user-attachments/assets/85e7d259-1189-42dc-b029-ca9498ce7b20)

2. **Dump Credentials**
   - Credentials stored in the machine’s memory were extracted using Mimikatz.
   - Command used: `sekurlsa::logonpasswords`
   - **Screenshot**: Credential dump
     ![Credential Dump](https://github.com/user-attachments/assets/24397aa8-a1a3-4f8a-9fbf-90d2f402f6d8)

3. **Execute Pass-the-Hash**
   - A specific account (`app-svc`) and its NTLM hash were selected from the dumped credentials to perform a pass-the-hash attack.
   - Command used: `sekurlsa::pth /domain:cyberware.firm /user:app-svc /ntlm:9b241c87d54a761a08a8cae4252f4dca /run:powershell.exe`
   - This command spawned a new PowerShell session with the privileges of the `app-svc` account.
   - Note: Commands like `whoami` or `systeminfo` in this session still reflect the original machine and credentials, as the attack has not yet pivoted to other systems.
   - **Screenshot**: Pass-the-hash attack
     ![Pass-the-Hash](https://github.com/user-attachments/assets/323a58ff-acaf-48b5-9d94-5d79361ef3b8)

### Lateral Movement to Other Machines

After obtaining a privileged PowerShell session, lateral movement was performed to other machines in the network where the `app-svc` account had administrative privileges.

1. **Bypass Execution Policy in New Session**
   - The new PowerShell session was configured to bypass execution restrictions.
   - Command used: `powershell -ep bypass`

2. **Identify Machines with Local Admin Access**
   - A PowerShell script, `Find-WMILocalAdminAccess`, was used to scan the domain and identify machines where the `app-svc` account held local administrative privileges.
   - The script was initialized with: `. ./Find-WMILocalAdminAccess.ps1`
   - The scan was executed with: `Find-WMILocalAdminAccess -Verbose`
   - **Screenshot**: Machines with local admin access
     ![Local Admin Access](https://github.com/user-attachments/assets/cdced52a-5958-426a-8913-ae7e2ec1fded)

3. **Perform Lateral Movement with PSExec**
   - PSExec was used to pivot to machines where the `app-svc` account had local admin privileges.
   - **Screenshot**: System information before lateral movement
     ![Pre-Lateral Movement](https://github.com/user-attachments/assets/d487fe84-fc32-4e98-823f-38a0cc9edcb2)
   - Lateral movement was successfully performed to the following machines:
     - **Machine 1**: IP `10.10.10.2`
       - **Screenshot**: Lateral movement to 10.10.10.2
         ![Lateral Movement 10.10.10.2](https://github.com/user-attachments/assets/bb00b619-a017-403d-97f5-68b3e52a99b0)
     - **Machine 2**: IP `10.10.10.3`
       - **Screenshot**: Lateral movement to 10.10.10.3
         ![Lateral Movement 10.10.10.3] <img width="998" height="683" alt="image" src="https://github.com/user-attachments/assets/a6e91ec4-92fb-4cc5-aaad-6cf0f44f9d27" />


## Conclusion

This simulated attack demonstrates a complete workflow for compromising a Windows machine, escalating privileges using Mimikatz, and performing lateral movement within a network. Key techniques included credential dumping, pass-the-hash attacks, and the use of PSExec for pivoting. The attack highlights the importance of securing credentials, enforcing strong execution policies, and monitoring for unauthorized lateral movement.

**Recommendations**:
- Implement multi-factor authentication (MFA) to protect credentials.
- Regularly update and patch systems to mitigate vulnerabilities.
- Monitor PowerShell execution and network traffic for suspicious activity.
- Restrict administrative privileges to minimize the impact of compromised accounts.

This report is part of a controlled penetration testing exercise and should not be replicated in unauthorized environments.


