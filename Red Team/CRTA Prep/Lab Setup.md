


![image](https://github.com/user-attachments/assets/b3a5f8a7-9b04-4950-a58c-9f3b9e34eb96)


Below is a table summarizing the **Operating Systems and Machine Specifications** for each machine in the network environment.


# Operating Systems and Machine Specifications

| Machine             | IP Address       | Operating System           | Role                          | Minimum Specs                     |
|---------------------|------------------|----------------------------|-------------------------------|-----------------------------------|
| Domain Controller   | 10.10.10.2       | Windows Server 2019/2022   | AD DS, DNS Server             | 4 GB RAM, 2 CPU cores, 15 GB disk |
| App Server          | 10.10.10.3       | Windows Server 2019/2022   | Application hosting           | 4 GB RAM, 2 CPU cores, 15 GB disk |
| Employee Machine    | 10.10.10.4       | Windows 10/11 (Pro/Ent)    | End-user workstation          | 2 GB RAM, 1-2 CPU cores, 20 GB disk |
| Web Server          | 10.10.10.5 (Internal), 192.168.50.5 (External) | Metasploitable2, Windows Server 2019/2022,  Ubuntu Server 20.04/22.04, or any vulnerablle maachine with web serer capabilities | Web hosting (IIS/Apache) | 4 GB RAM, 2 CPU cores, 15 GB disk |
| Kali Machine        | 192.168.50.10    | Kali Linux (latest)        | Penetration testing           | 2 GB RAM, 1-2 CPU cores, 20-30 GB disk |



To set up this network environment in VirtualBox, you’ll need to configure a combination of **Internal Network** and **NAT** or **Host-Only** adapters to achieve the desired connectivity. The internal network (10.10.10.0/24) will include the Domain Controller, App Server, Employee Machine, and Web Server, while the Web Server will also connect to an external network (192.168.50.0/24) containing a Kali machine. Below is a step-by-step guide to configure the VirtualBox network adapters and set up the environment.

---

### **Overview of the Setup**
- **Internal Network (10.10.10.0/24)**:
  - Domain Controller: 10.10.10.2
  - App Server: 10.10.10.3
  - Employee Machine: 10.10.10.4
  - Web Server: 10.10.10.5
  - All VMs will use an **Internal Network** adapter to communicate within this subnet.
- **External Network (192.168.50.0/24)**:
  - Kali Machine: 192.168.50.10 (example IP)
  - Web Server: 192.168.50.5 (example IP for the external interface)
  - The Web Server will have a second network adapter (e.g., **Host-Only** or **Bridged**) to connect to this network.
  - The Kali Machine will also use a **Host-Only** or **Bridged** adapter to reside in the 192.168.50.0/24 network.
- **VirtualBox Network Modes**:
  - **Internal Network**: Isolates VMs to communicate only with each other on the same internal network name (e.g., "intnet").
  - **Host-Only**: Allows VMs to communicate with the host and other VMs on the same Host-Only network, ideal for the external network.
  - (Optional) **Bridged**: Could be used for the external network if you want the VMs to appear on your physical network, but Host-Only is simpler for isolation.

---

### **Prerequisites**
1. **VirtualBox Installed**: Ensure you have VirtualBox installed on your host MACHINE.
2. **VMs Prepared**:
   - Create five VMs: Domain Controller, App Server, Employee Machine, Web Server, and Kali Machine.
   - Install the appropriate operating systems (e.g., Windows Server for Domain Controller and App Server, Windows 10/11 for Employee Machine, Linux/Windows for Web Server, and Kali Linux for the Kali Machine).
3. **Host-Only Adapter Setup**:
   - In VirtualBox, go to **File > Host Network Manager**.
   - Create a Host-Only adapter (e.g., `vboxnet0`) if not already present.
   - Configure it with:
     - IPv4 Address: 192.168.50.1 (or another IP in the 192.168.50.0/24 range).
     - Subnet Mask: 255.255.255.0.
     - Enable DHCP (optional) or manually assign IPs to VMs.
   - Ensure the adapter is active.

---

### **Step-by-Step Configuration**

#### **Step 1: Configure the Internal Network (10.10.10.0/24)**
The Domain Controller, App Server, Employee Machine, and Web Server will use an **Internal Network** adapter to communicate on the 10.10.10.0/24 subnet.

1. **Domain Controller (10.10.10.2)**:
   - Open VirtualBox, select the Domain Controller VM, and go to **Settings > Network**.
   - **Adapter 1**:
     - Enable Adapter: Check the box.
     - Attached to: **Internal Network**.
     - Name: `intnet` (use the same name for all VMs in this network).
     - Advanced > Promiscuous Mode: **Allow All** (optional, for network monitoring).
   - Boot the VM and configure the network interface:
     - IP Address: 10.10.10.2
     - Subnet Mask: 255.255.255.0
     - Gateway: (Optional, set to 10.10.10.1 if a gateway is needed).
     - DNS: (Set to 10.10.10.2 if the Domain Controller is also the DNS server).
     - Example (Windows Server):
       ```powershell
       netsh interface ip set address name="Ethernet" static 10.10.10.2 255.255.255.0
       netsh interface ip set dns name="Ethernet" static 10.10.10.2
       ```

2. **App Server (10.10.10.3)**:
   - Configure **Adapter 1**:
     - Attached to: **Internal Network**.
     - Name: `intnet`.
     - Promiscuous Mode: **Allow All** (optional).
   - Boot the VM and set:
     - IP Address: 10.10.10.3
     - Subnet Mask: 255.255.255.0
     - Gateway: (Optional, 10.10.10.1 or leave blank).
     - DNS: 10.10.10.2 (point to Domain Controller).
     - Example (Windows):
       ```powershell
       netsh interface ip set address name="Ethernet" static 10.10.10.3 255.255.255.0
       netsh interface ip set dns name="Ethernet" static 10.10.10.2
       ```

3. **Employee Machine (10.10.10.4)**:
   - Configure **Adapter 1**:
     - Attached to: **Internal Network**.
     - Name: `intnet`.
     - Promiscuous Mode: **Allow All** (optional).
   - Boot the VM and set:
     - IP Address: 10.10.10.4
     - Subnet Mask: 255.255.255.0
     - Gateway: (Optional, 10.10.10.1 or leave blank).
     - DNS: 10.10.10.2.
     - Example (Windows):
       ```powershell
       netsh interface ip set address name="Ethernet" static 10.10.10.4 255.255.255.0
       netsh interface ip set dns name="Ethernet" static 10.10.10.2
       ```

4. **Web Server (10.10.10.5)**:
   - Configure **Adapter 1** (for internal network):
     - Attached to: **Internal Network**.
     - Name: `intnet`.
     - Promiscuous Mode: **Allow All** (optional).
   - Boot the VM and configure the first interface (e.g., `eth0` on Linux or `Ethernet` on Windows):
     - IP Address: 10.10.10.5
     - Subnet Mask: 255.255.255.0
     - Gateway: (Optional, 10.10.10.1 or leave blank).
     - DNS: 10.10.10.2.
     - Example (Linux):
       ```bash
       sudo ip addr add 10.10.10.5/24 dev eth0
       sudo ip link set eth0 up
       echo "nameserver 10.10.10.2" > /etc/resolv.conf
       ```
     - Example (Windows):
       ```powershell
       netsh interface ip set address name="Ethernet" static 10.10.10.5 255.255.255.0
       netsh interface ip set dns name="Ethernet" static 10.10.10.2
       ```

#### **Step 2: Configure the External Network (192.168.50.0/24) for Web Server and Kali Machine**
The Web Server needs a second adapter to connect to the 192.168.50.0/24 network, and the Kali Machine will reside entirely in this network.

1. **Web Server (Second Adapter, 192.168.50.5)**:
   - Go to **Settings > Network > Adapter 2**:
     - Enable Adapter: Check the box.
     - Attached to: **Host-Only Adapter**.
     - Name: Select the Host-Only adapter (e.g., `vboxnet0`).
     - Promiscuous Mode: **Allow All** (optional).
   - Boot the VM and configure the second interface (e.g., `eth1` on Linux or `Ethernet 2` on Windows):
     - IP Address: 192.168.50.5
     - Subnet Mask: 255.255.255.0
     - Gateway: (Optional, 192.168.50.1 if the Host-Only adapter is the gateway).
     - DNS: (Optional, use 192.168.50.1 or an external DNS like 8.8.8.8).
     - Example (Linux):
       ```bash
       sudo ip addr add 192.168.50.5/24 dev eth1
       sudo ip link set eth1 up
       ```
     - Example (Windows):
       ```powershell
       netsh interface ip set address name="Ethernet 2" static 192.168.50.5 255.255.255.0
       ```

2. **Kali Machine (192.168.50.10)**:
   - Go to **Settings > Network > Adapter 1**:
     - Enable Adapter: Check the box.
     - Attached to: **Host-Only Adapter**.
     - Name: Select the Host-Only adapter (e.g., `vboxnet0`).
     - Promiscuous Mode: **Allow All** (optional).
   - Boot the VM and configure the interface:
     - IP Address: 192.168.50.10
     - Subnet MASK: 255.255.255.0
     - Gateway: (Optional, 192.168.50.1).
     - DNS: (Optional, 192.168.50.1 or 8.8.8.8).
     - Example (Kali Linux):
       ```bash
       sudo ip addr add 192.168.50.10/24 dev eth0
       sudo ip link set eth0 up
       echo "nameserver 8.8.8.8" > /etc/resolv.conf
       ```

#### **Step 3: Verify Connectivity**
1. **Internal Network (10.10.10.0/24)**:
   - From each VM (Domain Controller, App Server, Employee Machine, Web Server), ping the others to confirm connectivity:
     ```bash
     ping 10.10.10.2
     ping 10.10.10.3
     ping 10.10.10.4
     ping 10.10.10.5
     ```
   - Ensure the Domain Controller’s DNS and AD services are accessible (if configured).

2. **External Network (192.168.50.0/24)**:
   - From the Web Server, ping the Kali Machine:
     ```bash
     ping 192.168.50.10
     ```
   - From the Kali Machine, ping the Web Server:
     ```bash
     ping 192.168.50.5
     ```

3. **Cross-Network Isolation**:
   - Confirm that the Domain Controller, App Server, and Employee Machine **cannot** ping the Kali Machine (192.168.50.10), as they are isolated to the internal network.
   - The Web Server should be the only machine able to communicate with both networks.

#### **Step 4: Additional Configuration (Optional)**
- **Routing on Web Server**: If the Web Server needs to route traffic between the internal (10.10.10.0/24) and external (192.168.50.0/24) networks, enable IP forwarding:
  - Linux:
    ```bash
    sudo sysctl -w net.ipv4.ip_forward=1
    ```
  - Windows: Modify registry or use PowerShell to enable routing (requires Routing and Remote Access service).
- **Firewall Rules**: Configure firewalls on each VM to allow only necessary traffic (e.g., HTTP/HTTPS for Web Server, DNS/AD for Domain Controller).
- **NAT for Internet Access**: If any VM needs internet access, add a **NAT** adapter as an additional adapter:
  - Go to **Settings > Network > Adapter 2** (or 3 for Web Server).
  - Set to **NAT**.
  - This allows internet access without affecting the internal or external network setup.

---

### **Network Diagram**
```
Internal Network (10.10.10.0/24)          External Network (192.168.50.0/24)
+-------------------------------+          +-------------------------------+
| Domain Controller 10.10.10.2  |          | Web Server       192.168.50.5 |
| App Server        10.10.10.3  |          | Kali Machine     192.168.50.10|
| Employee Machine  10.10.10.4  |          +-------------------------------+
| Web Server        10.10.10.5  |          (Host-Only Adapter: vboxnet0)
+-------------------------------+
 (Internal Network: intnet)
```

---

### **Troubleshooting Tips**
- **No Connectivity on Internal Network**: Ensure all VMs use the same Internal Network name (`intnet`) and have correct IP configurations.
- **No Connectivity on External Network**: Verify the Host-Only adapter is active in VirtualBox’s Host Network Manager and that IPs are in the 192.168.50.0/24 range.
- **IP Conflicts**: Ensure no two VMs or the host have the same IP in either network.
- **Promiscuous Mode**: If network monitoring tools (e.g., Wireshark) are used, ensure Promiscuous Mode is set to **Allow All**.
- **Firewall**: Disable firewalls temporarily on VMs to test connectivity, then re-enable with appropriate rules.

---

This configuration ensures the internal network is isolated, the Web Server bridges both networks, and the Kali Machine resides in the external network.
