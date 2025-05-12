
## Proof of Concept: Exploiting SQL Injection and Insecure File Upload Vulnerabilities

### Overview

This PoC targets a lab environment web application vulnerable to **SQL Injection** and **Insecure File Upload**. The application, hosted at `192.168.125.150`, allows attackers to extract sensitive data via SQL injection and gain remote access by uploading a malicious file due to improper file validation.  
- **Screenshot**: Lab Environment Overview  
  ![Lab Overview](https://github.com/user-attachments/assets/cc6282c4-5bfb-4f62-86ea-e00bec94290b)

---

### Proof of Concept (PoC)

This PoC demonstrates the exploitation of two vulnerabilities in the web application: an SQL injection vulnerability in a user input parameter and an insecure file upload vulnerability in the admin panel. The process involves scanning the target, identifying vulnerabilities, extracting credentials via SQL injection, accessing the admin panel, and uploading a malicious file to gain a reverse shell.

#### Step 1: Initial Reconnaissance
- Scanned the target server for open ports and running services:  
  ```bash
  nmap -T4 -sV 192.168.125.150
  ```
  - **Result**: Discovered two open ports:  
    - Port 22 (SSH)  
    - Port 80 (HTTP)  
- Accessed the website at `http://192.168.125.150`.  
  - **Screenshot**: Website Homepage  
    ![Website Homepage](https://github.com/user-attachments/assets/3b01ee4d-5d42-4f25-839d-f9d5a15f0da9)

#### Step 2: Identify SQL Injection Vulnerability
- Navigated to the "test" page, which accepts a user input parameter: `http://192.168.125.150/cat.php?id=1`.  
  - **Screenshot**: Test Page with Input Parameter  
    ![Test Page](https://github.com/user-attachments/assets/be99cfbc-9da9-435a-bc17-24c4f00f1d27)
- Tested the `id` parameter for SQL injection by appending a single quote (`'`).  
  - **Result**: The page returned an SQL-based error, confirming the vulnerability.  
    - **Screenshot**: SQL Error Response  
      ![SQL Error](https://github.com/user-attachments/assets/f93ebd8b-d8c3-4907-9270-205f0b3d9a1f)
- Validated the vulnerability using Burp Suite by sending the request and observing the same error.  
  - **Screenshot**: Burp Suite Confirmation  
    ![Burp Suite SQL Error](https://github.com/user-attachments/assets/bbb39fbc-c8ef-45f1-9be2-f6427d74f022)

#### Step 3: Exploit SQL Injection with SQLMap
- Captured the HTTP request for the vulnerable page and saved it as `testpage.txt`.  
- Used SQLMap to enumerate the database:  
  ```bash
  sqlmap -r testpage.txt --level=2 --risk=2 --tables
  ```
  - **Result**: SQLMap confirmed the `id` parameter is vulnerable to multiple SQL injection types:  
    1. Boolean-based blind  
    2. Error-based  
    3. Time-based blind  
    4. Union query  
    - **Screenshot**: SQLMap Vulnerability Confirmation  
      ![SQLMap Vulnerability Types](https://github.com/user-attachments/assets/3a58a255-b05c-4c56-b5bf-24242888cc64)
  - Identified database tables: `categories`, `pictures`, and `users`.  
    - **Screenshot**: Discovered Tables  
      ![Discovered Tables](https://github.com/user-attachments/assets/icientes2-893-c1f7-4a01-93c4-3d03658c8acf)
- Dumped the `users` table to extract credentials:  
  ```bash
  sqlmap -r testpage.txt --level=2 -T users --dump-all
  ```
  - **Result**: Extracted admin credentials (username and MD5-hashed password).  
    - **Screenshot**: Dumped User Table  
      ![Dumped Credentials](https://github.com/user-attachments/assets/f213e059-74eb-4e2c-bcbc-37599cd53533)

#### Step 4: Access the Admin Panel
- Used the extracted admin credentials to log into the admin panel.  
  - **Screenshot**: Admin Panel Access  
    ![Admin Panel](https://github.com/user-attachments/assets/1e08b720-ab83-4176-bd43-0b79dbc39350)

#### Step 5: Identify Insecure File Upload Vulnerability
- Discovered a `New Picture` functionality in the admin panel for uploading images.  
  - **Screenshot**: New Picture Upload Feature  
    ![Upload Feature](https://github.com/user-attachments/assets/f0a9229d-ec93-4347-a7b0-6f0d5a6c8bfc)
- Tested for insecure file upload by uploading a PHP reverse shell script (instead of an image).  
  - Modified the script to include the attacker's IP address for the reverse shell connection.  
    - **Screenshot**: PHP Reverse Shell Script  
      ![PHP Reverse Shell Script](https://github.com/user-attachments/assets/90ca856b-e1cc-4898-aa26-b821b2e086cc)
- Initial upload attempt was rejected with a "NO PHP" warning.  
  - **Screenshot**: Initial Upload Rejection  
    ![Upload Rejected](https://github.com/user-attachments/assets/878bc6f7-2cd5-434d-ad52-54203f8eac8e)

#### Step 6: Bypass File Upload Restrictions
- Intercepted the upload request using Burp Suite and modified the file extension from `.php` to `.php1` to bypass the restriction.  
- Forwarded the modified request, and the file was accepted as if it were an image.  
  - **Screenshots**: Successful Upload After Modification  
    ![Upload Accepted](https://github.com/user-attachments/assets/aacb8d19-1ef0-4e88-a72b-2e361fda949d)  
    ![Upload Confirmation](https://github.com/user-attachments/assets/97287cf0-5c8e-4a7c-8450-a7fadfe3a8f1)

#### Step 7: Locate and Execute the Reverse Shell
- Used Gobuster to enumerate directories and locate the uploaded reverse shell file.  
  - **Screenshot**: Gobuster Directory Enumeration  
    ![Gobuster Results](https://github.com/user-attachments/assets/f1010513-6a51-4541-969b-862a8644a45a)
- Set up a Netcat listener on the attacker machine to capture the reverse shell (command not shown but implied).  
- Accessed the uploaded file, triggering the reverse shell and granting remote access to the server.

---

### Summary of Findings

- **SQL Injection**: The `id` parameter in `http://192.168.125.150/cat.php?id=1` is vulnerable to SQL injection, allowing extraction of the `users` table, which contained admin credentials (username and MD5-hashed password).  
- **Insecure File Upload**: The admin panel's `New Picture` functionality fails to properly validate uploaded files, allowing a PHP reverse shell to be uploaded by modifying the file extension to `.php1`.  
- Successfully gained remote access to the server by executing the uploaded reverse shell.

---

### Conclusion

This PoC confirms that the web application is vulnerable to SQL injection and insecure file upload, enabling an attacker to extract sensitive credentials and gain unauthorized remote access to the server. Immediate remediation is recommended, such as sanitizing user inputs to prevent SQL injection and implementing strict file upload validation to restrict executable file types.

