# Vulnerability Overview
A Windows privilege escalation vulnerability where a service’s ImagePath in the registry is unquoted and contains spaces 
`(e.g., C:\Program Files\MyService\MyService.exe)`. Windows misinterprets the path, trying intermediate paths first (e.g., C:\Program.exe), allowing an attacker to place a malicious file there if they have the  "write access" to any directory in the path.
