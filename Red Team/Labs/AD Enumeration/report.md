![image](https://github.com/user-attachments/assets/32e3e37b-e3ef-4a1c-bea4-36a244bba89b)This lab is available on https://tryhackme.com/room/adbasicenumeration


Checing  that the attacker machine can communicate with the target network using the command route -n
![image](https://github.com/user-attachments/assets/79c6293a-a682-490c-a912-5438061f109b)


## Mapping out the network 
1. Host discovery: this was done to chec out the availble macines in the activev directory enviironmnt usin the command fping  -agq 10.211.11.20/24. Four hosts were returned 
   ![image](https://github.com/user-attachments/assets/79e25dd6-aa59-4c82-9d1c-f7d452803583)
2. Nmap scan: This was done on each of the hosts fond in the environment to enumerate their services and undrstadn their role in the environment
     a. using nmap -T4 -sV -A 10.211.11.20. The  ports and sevices contained in the picture were discovered, 
   ![image](https://github.com/user-attachments/assets/949a1fe9-f8d6-4b9d-b8a4-722ccf4150b3)
   This
   b. using nmap -T4 -sV -A 10.211.11.10. The  ports and sevices contained in the picture were discovered
   ![image](https://github.com/user-attachments/assets/d3ac2eed-29f8-43d8-ba49-2d1734671a64)
   The scan confirmed that this is the Domain controller.



## Nework Enumeration via SMB

From the nma scan, SMB was found to be running on the domain controller and the other hosts
1. Snb enumeration for the DC: using a tool called smbclient
      a. Smbclient on the DC: the command smbclient -L \\\\10.211.11.10\\ we can notice that the smb lsted shares without using anypassword.  there are three non-standard shares that catch  attention: AnonShare, SharedFiles and UserBackups.
   ![image](https://github.com/user-attachments/assets/a6d3a504-952d-46e0-80c5-0d7371cf6ac2)

   b. Smbclient on the other wiindows machine: smbclient -L \\\\10.211.11.20\\ . This returned session setup failed: NT_STATUS_ACCESS_DENIED

   ![image](https://github.com/user-attachments/assets/70573a30-bcbd-4f00-88ac-6ccd95477465)
Alternatively, another tool called smbmap.py could be used to enumerate these shares 
   a. using the command smbmap -H 10.211.11.10 on the domain controller, smbmap listed the same share as what was gotten y smbclient eaarlir but this time, it shoowed  the permissions aailale on each sare, and the AnonShare, SharedFiles and UserBackups returned read and write access.

![image](https://github.com/user-attachments/assets/6c736ed7-2355-421e-85d3-2729200b266e)


3. Accessing SMB shares: Trying to access the shares with read and write permissions 
   a. Aaccessing Anonshare: using smbclient \\\\10.211.11.10\\Anonshare, the share has nothing inside
   ![image](https://github.com/user-attachments/assets/49b92d8a-528d-4e45-84a0-7dc3622a4a3b)
   b. Accessing ShareFiles: using smbclient \\\\10.211.11.10\\SharedFiles. This returned a file called " Mouse and Malware.txt)
   ![image](https://github.com/user-attachments/assets/b24766c4-a109-4d2c-94e1-fcf002180056)
   c. Accessing UserBackus: smbclient \\\\10.211.11.10\\UserBackups.  Two files were found here.

   ![image](https://github.com/user-attachments/assets/092f6c0c-8974-4fee-8e85-ba1f73566b2b)


4. LDAP Enumeration (Anonymous Bind): Lightweight Directory Access Protocol (LDAP) is a widely used protocol for accessing and managing directory services, such as Microsoft Active Directory. LDAP helps locate and organise resources within a network, including users, groups, devices, and organisational information, by providing a central directory that applications and users can query.

   using a tool called ldapsearch We can test if anonymous LDAP bind is enabled on the DOman COntroller.
  a.  ldapsearch -x -H ldap://10.211.11.10 -s base
   I got the followwing 
   ![image](https://github.com/user-attachments/assets/a21cf785-6418-4f89-a2ac-2ad4848de85d)

   b. ldapsearch -x -H ldap://10.211.11.10 -b "dc=tryhackme,dc=loc" "(objectClass=person)"
![image](https://github.com/user-attachments/assets/46c0bbe4-d48a-49be-a4f3-cd6fa7ae4b72)

Using another tool called 
![image](https://github.com/user-attachments/assets/d228cf31-f477-4fa2-8b72-3b5fc354d63f)


The result of all these tools includes alot of info, and the user info were exracted and compiled into the table below


| Username          | Account Status      | Bad Pwd Count | Last Bad Pwd Time       | Last Logon Time         | Last Logon Timestamp    | Logon Count | Password Last Set       |
|-------------------|---------------------|---------------|-------------------------|-------------------------|-------------------------|-------------|-------------------------|
| Guest             | Disabled, No Pwd    | 5             | 2025-05-22 13:58:00     | Never                   | Never                   | 0           | Never                   |
| sshd              | Enabled, No Pwd     | 5             | 2025-05-22 13:58:03     | Never                   | Never                   | 0           | 2025-04-30 08:26:36     |
| gerald.burgess    | Enabled             | 5             | 2025-05-22 13:28:08     | 2025-04-07 22:32:04     | 2025-04-30 13:02:22     | 4           | 2025-04-30 13:17:21     |
| nigel.parsons     | Enabled             | 5             | 2025-05-22 13:28:09     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| guy.smith         | Enabled             | 5             | 2025-05-22 13:28:09     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| jeremy.booth      | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| barbara.jones     | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| marion.kay        | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| kathryn.williams  | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| danny.baker       | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| gary.clarke       | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| daniel.turner     | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| debra.yates       | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| jeffrey.thompson  | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| martin.riley      | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| danielle.lee      | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| douglas.roberts   | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| dawn.bolton       | Disabled            | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | Never                   |
| danielle.ali      | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 15:06:44     |
| michelle.palmer   | Disabled            | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | Never                   |
| katie.thomas      | Disabled, No Pwd    | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-05-10 15:14:56     |
| jennifer.harding  | Enabled             | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 15:06:44     |
| strate905         | Enabled, No Pwd     | 5             | 2025-05-22 13:28:10     | 2025-04-30 13:16:29     | 2025-04-30 13:22:10     | 5           | 2025-04-30 10:21:05     |
| krbtgtsvc         | Enabled, No Pwd     | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-05-01 13:16:53     |
| asrepuser1        | Enabled, No Pre-Auth| 5             | 2025-05-22 13:28:10     | 2025-05-22 13:15:26     | 2025-05-22 12:45:23     | 4           | 2025-05-02 03:29:08     |
| rduke             | Enabled, No Pwd     | 0             | 2025-05-22 13:28:10     | 2025-05-22 13:28:10     | 2025-05-13 07:50:45     | 1           | 2025-05-13 07:46:00     |
| user              | Enabled, No Pwd     | 0             | Never                   | Never                   | Never                   | 0           | 2025-05-15 14:57:17     |



---

### **Explanation of Table Columns**

- **Username**: The `sAMAccountName` attribute, used for logging into the domain.
- **Account Status**:
  - Derived from `userAccountControl`:
    - `512`: Enabled (normal account).
    - `514`: Disabled (normal account).
    - `66048`: Enabled, no password required.
    - `66050`: Disabled, no password required.
    - `4260352`: Enabled, no Kerberos pre-authentication (vulnerable to AS-REP roasting).
- **Bad Pwd Count**: Number of failed login attempts (`badPwdCount`).
- **Last Bad Pwd Time**: Last failed login attempt (`badPasswordTime`), converted from FILETIME to UTC (YYYY-MM-DD HH:MM:SS). If `0`, listed as "Never."
- **Last Logon Time**: Last successful logon (`lastLogon`), converted to UTC. If `0`, listed as "Never."
- **Last Logon Timestamp**: Approximate last logon (`lastLogonTimestamp`), replicated across domain controllers, converted to UTC. If `0`, listed as "Never."
- **Logon Count**: Number of successful logons (`logonCount`).
- **Password Last Set**: Time of last password change (`pwdLastSet`), converted to UTC. If `0`, listed as "Never."

---

