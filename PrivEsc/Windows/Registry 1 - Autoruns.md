# Proof of Concept: Privilege Escalation via Insecure Autoruns

### Vulnerability Overview

**Insecure Autoruns** is a vulnerability in Windows systems where an autorun executable, configured to start automatically (e.g., via the Windows Registry), has weak permissions, allowing unprivileged users to modify or replace it. Since autorun programs may execute with elevated privileges (e.g., when an admin logs in), replacing the executable with a malicious file can lead to privilege escalation, granting attackers higher-level access to the system.

---

### Proof of Concept (PoC)

This PoC demonstrates how an unprivileged user can exploit the "Insecure Autoruns" vulnerability to escalate privileges on a Windows machine. The test was conducted as a white box assessment, with access to a valid user account. The process involves identifying an autorun program with weak permissions, replacing its binary with a malicious executable, and waiting for an admin login to trigger the malicious file and gain elevated privileges.

#### Initial Access
- Logged into the target Windows machine using credentials for a valid user account.  
- **Screenshot**: Initial Access to the Machine  
  ![Initial Access](https://github.com/user-attachments/assets/874bcd58-703c-443d-915c-5c0a721b41ae)

#### Step 1: Identify Autorun Programs
- Queried the Windows Registry to identify programs configured to run automatically at startup:  
  ```bash
  reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
  ```
  - **Result**: Identified an autorun program with the binary path `C:\Program Files\Autorun Program\program.exe`.  
  - **Screenshot**: Registry Query Result  
    ![Registry Query](https://github.com/user-attachments/assets/779f48f7-971d-4c6a-8532-1b265bea0115)

- Alternatively, used WMIC to list startup programs:  
  ```bash
  wmic startup get caption,command
  ```
  - **Result**: Confirmed the same autorun program and its binary path.  
  - **Screenshot**: WMIC Query Result  
    ![WMIC Query](https://github.com/user-attachments/assets/30030100-2834-4461-acb2-98a0282ca71c)

#### Step 2: Check Permissions on the Autorun Binary
- Used `accesschk.exe` from Sysinternals to analyze permissions on the autorun binary:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -wvu "C:\Program Files\Autorun Program\program.exe"
  ```
  - **Command Breakdown**:  
    - `/accepteula`: Auto-accepts the EULA.  
    - `-w`: Checks for write permissions.  
    - `-v`: Verbose output for detailed permissions.  
    - `-u`: Checks user-level access.  
    - `C:\PrivEsc\accesschk.exe`: Path to the tool.  
    - `"C:\Program Files\Autorun Program\program.exe"`: Target binary path.

- **Result**: The `Everyone` group has write access to the binary, confirming the vulnerability.  
  - **Screenshot**: Permission Results  
    ![Permission Results](https://github.com/user-attachments/assets/7244ad55-a8a3-43d1-93f6-fe3c2f315049)

#### Step 3: Exploit the Vulnerability
- Replaced the original autorun binary (`program.exe`) with a malicious file (`esc.exe`) designed to create a reverse shell:  
  ```bash
  copy C:\Users\user\esc.exe "C:\Program Files\Autorun Program\program.exe" /Y
  ```
  - `/Y`: Overwrites the file without prompting.  
  - **Screenshot**: File Replacement  
    ![File Replacement](https://github.com/user-attachments/assets/e8dd74ce-ee59-4188-b5db-84815e455904)

#### Step 4: Trigger the Malicious File
- Waited for an admin to log into the machine, which triggered the autorun program (`program.exe`) to execute the malicious `esc.exe`.  
- **Result**: The malicious file executed, establishing a reverse shell with elevated privileges (admin-level access).  
  - **Screenshot**: Reverse Shell with Admin Privileges  
    ![Reverse Shell](https://github.com/user-attachments/assets/320ae655-96d5-403c-b4ed-49a2161825fd)

---

### Summary of Findings

- The autorun program at `C:\Program Files\Autorun Program\program.exe`, configured in the Windows Registry, had insecure permissions, allowing the `Everyone` group to modify it.  
- By replacing the binary with a malicious file (`esc.exe`), an unprivileged user successfully escalated privileges to admin level upon an admin login, demonstrating the severity of the vulnerability.

---

### Conclusion

This PoC confirms that the "Insecure Autoruns" vulnerability allows an unprivileged user to escalate privileges to admin level by exploiting weak permissions on an autorun executable. When triggered by an admin login, the malicious replacement binary executes with elevated privileges, granting attackers full control over the system. Immediate remediation is recommended, such as restricting permissions on autorun binaries and reviewing startup configurations to ensure least privilege principles are enforced.

---











