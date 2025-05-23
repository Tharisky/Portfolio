# Active Directory Enumeration Lab

This lab, completed on [TryHackMe](https://tryhackme.com/room/adbasicenumeration), demonstrates Active Directory (AD) enumeration techniques critical for penetration testing Windows enterprise networks. The objective was to gather comprehensive information about the target domain—users, groups, computers, and policies—without initial credentials, simulating an internal penetration test with VPN access.

![Network Setup](https://github.com/user-attachments/assets/39ecce70-a851-4d1c-b8ef-a61381c75bbd)
![Network Communication](https://github.com/user-attachments/assets/32e3e37b-e3ef-4a1c-bea4-36a244bba89b)

## Initial Network Verification
To confirm connectivity to the target network, I executed:

```bash
route -n
```

![Routing Check](https://github.com/user-attachments/assets/79c6293a-a682-490c-a912-5438061f109b)

## Network Mapping
### 1. Host Discovery
To identify active hosts in the AD environment, I used:

```bash
fping -agq 10.211.11.20/24
```

This returned four active hosts.

![Host Discovery](https://github.com/user-attachments/assets/79e25dd6-aa59-4c82-9d1c-f7d452803583)

### 2. Nmap Scanning
I performed detailed Nmap scans to enumerate services and determine host roles:

- **Domain Controller (10.211.11.10)**:
  ```bash
  nmap -T4 -sV -A 10.211.11.10
  ```

  ![Domain Controller Scan](https://github.com/user-attachments/assets/d3ac2eed-29f8-43d8-ba49-2d1734671a64)

- **Other Host (10.211.11.20)**:
  ```bash
  nmap -T4 -sV -A 10.211.11.20
  ```

  ![Host Scan](https://github.com/user-attachments/assets/949a1fe9-f8d6-4b9d-b8a4-722ccf4150b3)

The scans confirmed `10.211.11.10` as the Domain Controller (DC).

## SMB Enumeration
Nmap revealed SMB services on the DC and other hosts. I proceeded with SMB enumeration to identify accessible shares.

### 1. SMB Enumeration on the Domain Controller
Using `smbclient` to list shares on the DC:

```bash
smbclient -L \\\\10.211.11.10\\
```

This identified three non-standard shares—`AnonShare`, `SharedFiles`, and `UserBackups`—accessible without credentials.

![SMB Shares](https://github.com/user-attachments/assets/a6d3a504-952d-46e0-80c5-0d7371cf6ac2)

### 2. SMB Enumeration on Other Host
On the host at `10.211.11.20`:

```bash
smbclient -L \\\\10.211.11.20\\
```

This returned an access denied error (`NT_STATUS_ACCESS_DENIED`).

![SMB Access Denied](https://github.com/user-attachments/assets/70573a30-bcbd-4f00-88ac-6ccd95477465)

### 3. SMB Enumeration with smbmap
To verify share permissions, I used:

```bash
smbmap -H 10.211.11.10
```

This confirmed read and write access to `AnonShare`, `SharedFiles`, and `UserBackups`.

![SMB Permissions](https://github.com/user-attachments/assets/6c736ed7-2355-421e-85d3-2729200b266e)

### 4. Accessing SMB Shares
I accessed the shares to inspect their contents:

- **AnonShare**:
  ```bash
  smbclient \\\\10.211.11.10\\AnonShare
  ```
  The share was empty.

  ![AnonShare](https://github.com/user-attachments/assets/49b92d8a-528d-4e45-84a0-7dc3622a4a3b)

- **SharedFiles**:
  ```bash
  smbclient \\\\10.211.11.10\\SharedFiles
  ```
  Contained a file named `Mouse and Malware.txt`.

  ![SharedFiles](https://github.com/user-attachments/assets/b24766c4-a109-4d2c-94e1-fcf002180056)

- **UserBackups**:
  ```bash
  smbclient \\\\10.211.11.10\\UserBackups
  ```
  Contained two files.

  ![UserBackups](https://github.com/user-attachments/assets/092f6c0c-8974-4fee-8e85-ba1f73566b2b)

## Domain Enumeration via LDAP
LDAP enumeration was performed to gather AD resource details.

### 1. Testing Anonymous LDAP Bind
Using `ldapsearch` to check anonymous binding:

```bash
ldapsearch -x -H ldap://10.211.11.10 -s base
```

![LDAP Base](https://github.com/user-attachments/assets/a21cf785-6418-4f89-a2ac-2ad4848de85d)

To enumerate user objects:

```bash
ldapsearch -x -H ldap://10.211.11.10 -b "dc=tryhackme,dc=loc" "(objectClass=person)"
```

![LDAP Users](https://github.com/user-attachments/assets/46c0bbe4-d48a-49be-a4f3-cd6fa7ae4b72)

### 2. Enum4linux-ng
For comprehensive enumeration, I used:

```bash
enum4linux-ng -A 10.211.11.10
```

![Enum4linux-ng](https://github.com/user-attachments/assets/d228cf31-f477-4fa2-8b72-3b5fc354d63f)

### 3. Username Enumeration with Kerbrute
To validate usernames, I compiled a list from previous enumerations and used `kerbrute`:

```bash
./kerbrute userenum --dc 10.211.11.10 -d tryhackme.loc user.txt
```

This confirmed 23 valid accounts out of 27.

![Kerbrute](https://github.com/user-attachments/assets/889f4a2b-3ef3-4995-81f3-6b22da86c177)

### 4. Compiled User Information
The enumeration results were consolidated into the following table:

| Username          | Account Status            | Bad Pwd Count | Last Bad Pwd Time       | Last Logon Time         | Last Logon Timestamp    | Logon Count | Password Last Set       |
|-------------------|---------------------------|---------------|-------------------------|-------------------------|-------------------------|-------------|-------------------------|
| Guest             | Disabled, No Pwd          | 5             | 2025-05-22 13:58:00     | Never                   | Never                   | 0           | Never                   |
| sshd              | Enabled, No Pwd           | 5             | 2025-05-22 13:58:03     | Never                   | Never                   | 0           | 2025-04-30 08:26:36     |
| gerald.burgess    | Enabled                   | 5             | 2025-05-22 13:28:08     | 2025-04-07 22:32:04     | 2025-04-30 13:02:22     | 4           | 2025-04-30 13:17:21     |
| nigel.parsons     | Enabled                   | 5             | 2025-05-22 13:28:09     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| guy.smith         | Enabled                   | 5             | 2025-05-22 13:28:09     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| jeremy.booth      | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| barbara.jones     | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| marion.kay        | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| kathryn.williams  | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| danny.baker       | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| gary.clarke       | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| daniel.turner     | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:22     |
| debra.yates       | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| jeffrey.thompson  | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| martin.riley      | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| danielle.lee      | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| douglas.roberts   | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 13:17:23     |
| dawn.bolton       | Disabled                  | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | Never                   |
| danielle.ali      | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 15:06:44     |
| michelle.palmer   | Disabled                  | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | Never                   |
| katie.thomas      | Disabled, No Pwd          | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-05-10 15:14:56     |
| jennifer.harding  | Enabled                   | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-04-30 15:06:44     |
| strate905         | Enabled, No Pwd           | 5             | 2025-05-22 13:28:10     | 2025-04-30 13:16:29     | 2025-04-30 13:22:10     | 5           | 2025-04-30 10:21:05     |
| krbtgtsvc         | Enabled, No Pwd           | 5             | 2025-05-22 13:28:10     | Never                   | Never                   | 0           | 2025-05-01 13:16:53     |
| asrepuser1        | Enabled, No Pre-Auth      | 5             | 2025-05-22 13:28:10     | 2025-05-22 13:15:26     | 2025-05-22 12:45:23     | 4           | 2025-05-02 03:29:08     |
| rduke             | Enabled, No Pwd           | 0             | 2025-05-22 13:28:10     | 2025-05-22 13:28:10     | 2025-05-13 07:50:45     | 1           | 2025-05-13 07:46:00     |
| user              | Enabled, No Pwd           | 0             | Never                   | Never                   | Never                   | 0           | 2025-05-15 14:57:17     |

#### Table Column Explanations
- **Username**: The `sAMAccountName` used for domain logins.
- **Account Status**: Derived from `userAccountControl`:
  - `512`: Enabled (normal account).
  - `514`: Disabled (normal account).
  - `66048`: Enabled, no password required.
  - `66050`: Disabled, no password required.
  - `4260352`: Enabled, no Kerberos pre-authentication (vulnerable to AS-REP roasting).
- **Bad Pwd Count**: Number of failed login attempts (`badPwdCount`).
- **Last Bad Pwd Time**: Last failed login attempt (`badPasswordTime`), converted to UTC. If `0`, listed as "Never."
- **Last Logon Time**: Last successful logon (`lastLogon`), converted to UTC. If `0`, listed as "Never."
- **Last Logon Timestamp**: Approximate last logon (`lastLogonTimestamp`), replicated across DCs, converted to UTC. If `0`, listed as "Never."
- **Logon Count**: Number of successful logons (`logonCount`).
- **Password Last Set**: Time of last password change (`pwdLastSet`), converted to UTC. If `0`, listed as "Never."

## Password Spraying
Password spraying was performed to test common passwords against the validated user list, exploiting weak password policies.

### 1. Password Policy Enumeration
To understand the password policy, I used:

- **rpcclient**:
  ```bash
  rpcclient -U "" 10.211.11.10 -N
  getdompwinfo
  ```

  ![rpcclient Policy](https://github.com/user-attachments/assets/e07f79d7-6b76-4de5-840e-0b239a421f23)

- **CrackMapExec**:
  ```bash
  crackmapexec smb 10.211.11.10 --pass-pol
  ```

  ![CrackMapExec Policy](https://github.com/user-attachments/assets/f4146084-e720-4cdb-b806-25e2477a3632)

The policy required passwords to meet three of four conditions: uppercase letters, lowercase letters, digits, and special characters.

### 2. Password Spraying Attack
Using OSINT, the lab environment  created and provided a password list based on common patterns (`Password!`, `Password1`, `Password1!`, `P@ssword`, `Pa55word1`). The attack was executed with:

```bash
crackmapexec smb 10.211.11.20 -u valid.txt -p user_pass.txt
```

This identified a valid credential.

![Password Spray](https://github.com/user-attachments/assets/b5653d14-d7b3-4911-84ee-47bd63517ea1)
![Valid Credential](https://github.com/user-attachments/assets/9e33a491-5b7e-4921-a83c-53b301d920b6)

## Conclusion
This lab showcased essential AD enumeration techniques, including network mapping, SMB and LDAP enumeration, username validation, and password spraying. The process revealed vulnerabilities such as misconfigured SMB shares and weak password policies, enabling the identification of a valid credential. These skills demonstrate proficiency in penetration testing and network security analysis.

