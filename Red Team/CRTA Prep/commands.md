Enumeration from a compromised machine into an internal network
1. Arp:
     arp -a
2. Fping:   
      fping -agq 10.10.10.0/24
     
4. nmap
     nmap -sn 10.10.10.1-225 --- Discover host in a subnet or IP range
     nmap -sT 10.10.10.2 ----- Individual Host



Enumeration of a compromised internal machhine from its powershell terminal


1..10000 | % { $p = $_; if ([System.Net.Sockets.TcpClient]::new().ConnectAsync("127.0.0.1", $p).Wait(1000)) { Write-Host "-----"; Write-Host "Port $p is open, likely $(switch($p){21{'FTP'};53{'DNS'};80{'HTTP'};88{'Kerberos'};135{'RPC'};139{'NetBIOS'};389{'LDAP'};443{'HTTPS'};445{'SMB'};636{'LDAPS'};1433{'MSSQL'};3268{'AD Global Catalog'};3269{'AD Global Catalog Secure'};3389{'RDP'};5985{'WinRM'};5986{'WinRM HTTPS'};8080{'Alt HTTP'};8443{'Alt HTTPS'};default{'Unknown'}})" } } 2>$null
