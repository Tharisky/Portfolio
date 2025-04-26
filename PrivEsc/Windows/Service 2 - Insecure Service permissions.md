# Vulnerability Overview 

Insecure Service permission is a Windows privilege escalation vulnerability in which a service’s permissions allow a low-privileged user to modify its configuration (e.g., binary path) via the Service Control Manager (SCM).

Since Windows services often run with SYSTEM privileges, an attacker can manipulate a service if its configuration allows a low-privileged user to modify its executable path or settings, and get a next level access

# POC
