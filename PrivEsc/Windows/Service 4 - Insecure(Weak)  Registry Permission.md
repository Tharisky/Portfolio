# Vulnerability Overview 

The Windows Registry stores configuration settings for services and applications, and Weak permissions on registry keys can allow an attacker to modify settings used by privileged processes.
Think about the Registry as the `/etc` directory on Linux, and the registry keys as `/etc/ssh`, and the registry values as `port 22` when you do the `nano /etc/ssh` command 

How It’s Exploited: Attackers alter registry values (e.g., service executable paths) to point to malicious code, escalating privileges when the modified service or application runs.


_In this write-up, I exploited this vulnerability in two ways_
1. Getting a shell as a system user
2. Upgrading the current low-level user into an admin user



# Detection
Using the command ` sc qc servicename `, you can check the service info and see if it is running with some privileges
If there's a `SYSTEM privilege (SERVICE_START_NAME)` in the result, it confirms it is running with a privilege, and it is going to be helpful if  there's an `Insecure Registry Permission Vulnerability` on it 
The vulnerability can be detected using 
1. Accesschk: This would check for the permissions on the registry key
    `C:\accesschk.exe /accepteula -uvwqk HKLM\System\CurrentControlSet\Services\<servicename>`
   If the result comes back with `BUILTIN\INTERACTIVE` or `BUILTIN\Users` or `Everyone` having a `RW` permission, then your current user can exploit this vulnerability. 
   
2. Get-Acl functionality on PowerShell
   Start by getting a PowerShell terminal `powershell -ep bypass` then run the next command `Get-Acl -Path hklm:\System\CurrentControlSet\services\servicename | fl` while looking for `BUILTIN\INTERACTIVE` or `BUILTIN\Users` or `Everyone`



# Exploitation
1. reg add HKLM\SYSTEM\CurrentControlSet\services\servicename /v ImagePath /t REG_EXPAND_SZ /d C:\users\user\esc.exe /f
