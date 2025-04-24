## Cloud Security Report: Yellowstone (Conducted by Cyblack Team 5, January 2023)

### Overview

This report details a cloud security engagement conducted by Cyblack’s Team 5 during a January 2023 internship for Yellowstone. The objective was to establish a secure and efficient cloud environment by implementing Azure Identity and Access Management (IAM), Multi-Factor Authentication (MFA), Role-Based Access Control (RBAC), a virtual machine (VM) with monitoring, Data Loss Prevention (DLP) policies, security indicator tagging, and integration of on-premises Active Directory with Azure Active Directory (Azure AD). This project showcases my skills in cloud security, identity management, data protection, and directory synchronization.

**Team Members**  
- Tharisky (Team Lead)  
- Other team members (names withheld)

---

### Executive Summary

The cloud computing task aimed to create a secure and efficient environment for Yellowstone users through a comprehensive security strategy:  
- **Azure IAM**: Ensured that the right identities (users and roles) could access necessary tools for their jobs.  
- **MFA**: Added an extra layer of security by requiring multiple verification factors for access.  
- **RBAC**: Restricted access based on user roles, enhancing authorization control.  
- **Virtual Machine (VM) Deployment**: Created a VM with log reader permissions for secure data management and monitoring.  
- **Data Loss Prevention (DLP)**: Configured DLP policies using Microsoft Purview to protect sensitive data.  
- **Security Indicator Tagging**: Enabled real-time monitoring and proactive threat response.  
- **Directory Synchronization**: Integrated on-premises Active Directory with Azure AD for streamlined authentication and enhanced security.  

Users were set up with roles (e.g., System Admin, Intern, Cyber Security Engineer) in Azure IAM, MFA was enforced, and RBAC was configured. A VM was deployed with monitoring capabilities, DLP policies were established, and threat indicators were tagged for efficient threat management. The on-premises Active Directory was successfully synchronized with Azure AD, providing single sign-on (SSO) and centralized management. This implementation ensures compliance with industry-standard security protocols and strengthens Yellowstone’s security posture.

---

### Chapter 1: Identity and Access Management (IAM) with Azure Active Directory

#### Part A: Enabling and Enforcing MFA

**Multi-Factor Authentication (MFA)** requires users to provide two or more verification factors, reducing the likelihood of unauthorized access.  
**Steps**:  
1. Signed into the Azure portal, navigated to Azure AD, and selected **Security**.  
   ![Azure AD Security](https://github.com/user-attachments/assets/1fadc567-862f-4e39-a819-b4e44eabac68)  
2. Navigated to **Identity Protection**.  
   ![Identity Protection](https://github.com/user-attachments/assets/e4daa393-e290-4ea0-b944-5625ab2f2f4e)  
3. Selected the **MFA Registration Policy**, chose users, enforced the policy, and saved.  
   ![MFA Registration Policy](https://github.com/user-attachments/assets/68e6c88a-72a3-411d-9f29-a77a24e404e8)

#### Part B: Configuring MFA

**Steps**:  
1. Signed into the Azure portal, navigated to Azure AD, and selected the **Security** blade.  
   ![Azure AD Security Blade](https://github.com/user-attachments/assets/5a14d2b3-6a81-462b-b6c1-7d1057375ba7)  
2. Selected **MFA**.  
   ![MFA Option](https://github.com/user-attachments/assets/154fdc0f-9749-4085-bfe4-4041ff02e485)  
3. Clicked **Configure** in the MFA section, then selected **Additional cloud-based MFA settings**.  
   ![Configure MFA](https://github.com/user-attachments/assets/d0563957-4bdd-484e-a7aa-dc8aa18e77d7)  
4. Configured user service settings and saved.  
   ![User Service Settings](https://github.com/user-attachments/assets/99e6cf9d-b7b7-4f6a-9120-4febf1a328ba)

#### Part C: Setting Up RBAC

**Role-Based Access Control (RBAC)** restricts network access based on user roles, enhancing security through attribute-based access control.  
**Steps**:  
1. Signed into the Azure portal, navigated to Azure AD, and selected **Roles and Administration**.  
   ![Roles and Administration](https://github.com/user-attachments/assets/de121db3-35b2-4a41-96f5-ace94b956672)  
2. Selected a role (e.g., Global Administrator) and clicked **Add Assignments**.  
   ![Add Assignments](https://github.com/user-attachments/assets/b00850c3-c36a-4b16-bd08-ea5af9d91023)  
3. Selected preferred members and assigned the role with an active assignment type and justification.  
   ![Select Members](https://github.com/user-attachments/assets/51e84d81-d754-452a-a6c4-7b31549643a8)

#### Part D: Challenges, Findings, and Results of IAM Task

- Only users with admin privileges could create new users.  
- Newly created users couldn’t access or configure Azure AD until roles were assigned.  
- After enforcing MFA, users were prompted to add additional security information on their next login, with an option to skip for 15 days.  
  - **MFA Prompt for Additional Information**:  
    ![MFA Prompt](https://github.com/user-attachments/assets/32c86e08-a9a0-48bf-b7e6-854be091d4c0)  
  - **MFA Authentication Method Selection**:  
    ![MFA Authentication Method](https://github.com/user-attachments/assets/1e8a4dc1-ff31-4a25-90cf-ddf2a1701236)

---

### Chapter 2: Audit Monitoring and Logging on Cloud

#### Part A: Creating a Virtual Machine (VM)

**Objective**: Deploy a VM on Azure for secure data management.  
**Steps**:  
1. Signed into the Azure portal and clicked **Create a Resource**.  
2. Selected **Windows Server 2019 Datacenter** as the operating system.  
3. Configured the **Basics** tab with details like VM name, username, password, and subscription.  
4. Selected or created a Resource Group and storage account.  
5. Configured a virtual network in the **Networking** tab, including a public IP address and network security group.  
6. Enabled boot diagnostics, backup, and monitoring in the **Management** tab.  
7. Reviewed settings and deployed the VM.

#### Part B: Assigning Log Reader Permission

**Objective**: Grant log reader access to monitor VM activities.  
**Steps**:  
1. Signed into the Azure portal with a Contributor or Owner role.  
2. Selected the newly created VM and navigated to **Access Control (IAM)**.  
3. Added a role assignment, selecting **Log Reader** from the role dropdown.  
4. Assigned the role to a user, group, or service principal, then reviewed and assigned.

#### Part C: VM Behavior and Events

- The VM becomes **deallocated** when not running, preventing connections.  
- The VM becomes **allocated** when running, allowing connections via RDP, SSH, or Bastion.  
- Used **Sentinel Log Queries** to monitor login events and sign-in locations on the VM.  
- Only users with appropriate access could view, run, or perform actions on the VM.

---

### Chapter 3: Data Loss Prevention (DLP) and Microsoft Compliance

#### Part A: Configuring DLP

**Objective**: Protect sensitive data using DLP policies in Microsoft Purview.  
**Steps**:  
1. Signed into the Microsoft Compliance Portal and selected **Data Loss Prevention**.  
2. Created a new policy, selecting the **Privacy** category and **U.K. Data Protection** template.  
3. Named the policy, chose locations, defined settings, set the policy mode, and created the policy.

#### Part B: Creating Permissions in Microsoft Purview

**Objective**: Assign permissions for compliance features like DLP.  
**Steps**:  
1. Signed into the Microsoft Compliance Portal and selected **Permissions**.  
2. Under Microsoft Purview Solutions, selected **Roles**.  
3. Edited a role group (e.g., Security Administrator), added a user, reviewed, and saved.

#### Part C: Challenges, Findings, and Results of DLP Task

- The **Data Loss Prevention** option was initially unavailable in the Microsoft Compliance Portal.  
- Activated trial licenses (Azure Active Directory Premium P2 and Enterprise Mobility + Security E5) to enable DLP functionality.  
- Permissions assigned in the Compliance Portal differed from those in Azure AD.  
- Only user accounts could sign into the Compliance Portal.  
- Users without assigned licenses couldn’t access DLP features.

---

### Chapter 4: Security Incident and Event Management (SIEM)

#### Part A: Creating Indicators

**Objective**: Create security indicators for threat detection using Microsoft Sentinel.  
**Steps**:  
1. Signed into the Azure portal, navigated to Microsoft Sentinel, and selected a workspace (Team-workspace).  
2. Under **Threat Intelligence**, selected **Add New** and chose the indicator type (Domain Name).  
3. Filled in the form fields and applied the indicator.

#### Part B: Outcome and Benefits of Tagging Threat Indicators

- Tagging simplifies grouping and retrieval of threat indicators.  
- Prioritizes critical threats, saving time and improving efficiency for security teams.  
- Enhances the ability to analyze large datasets and respond to threats quickly.

---

### Chapter 5: Directory Synchronization

#### Part A: Deploying an Azure VM Hosting an Active Directory Domain Controller

**Steps**:  
1. Navigated to the GitHub repository: [Azure Quickstart Templates](https://github.com/Azure/azure-quickstart-templates/tree/master/modules/active-directory-new-domain/0.9).  
2. Clicked **Deploy to Azure**, redirecting to the **Create an Azure VM with a new AD Forest** blade in the Azure portal.  
3. Edited parameters with Yellowstone-specific details and deployed the VM.

#### Part B: Creating and Configuring an Azure AD Tenant

**Steps**:  
1. Signed into the Azure portal, navigated to Azure AD, and clicked **Manage Tenant**.  
2. Created a new tenant named **Yellowstone** using the configuration tab.  
3. Switched to the new tenant via the **Directory + Subscription** icon.  
4. Added a custom domain name (`yellowstone.com`) under Azure AD’s **Custom Domain Names**.  
5. Created a user with the **Global Admin** role in the new tenant.

#### Part C: Synchronizing Active Directory with Azure AD Tenant

**Steps**:  
1. Signed into the Azure portal and switched back to the original tenant.  
2. Connected to the VM (Yellowstone-VM) via RDP.  
3. Disabled **IE Enhanced Security Configuration** in Server Manager under **Local Server**.  
4. In Server Manager, navigated to **Tools** > **AD Administrative Center**.  
5. Created an Organizational Unit (OU) named **ToSync** under Yellowstone(local), then added a new user (**Yellowstoneuser**) in the OU.  
6. Installed Microsoft Edge on the VM, signed into the Azure portal with the **Forest-Admin** account, and downloaded Azure AD Connect.  
7. Launched Azure AD Connect, selected **Customize** on the Express Settings page, and installed required components.  
8. Configured **Password Hash Synchronization** as the user sign-in method.  
9. Authenticated with the **yellowstoneadmin** account and connected the **yellowstone.com** forest using the **Forest-Admin** credentials.  
10. Filtered synchronization to include only the **ToSync** OU, completed configuration, and started the synchronization process.

---

### Chapter 6: Conclusion

This cloud security engagement successfully established a robust and secure environment for Yellowstone. Key implementations included Azure IAM, MFA, RBAC, VM deployment with monitoring, DLP policies, security indicator tagging, and directory synchronization. These measures ensure compliance with industry standards, streamline user authentication, and enhance Yellowstone’s security posture. While challenges like data privacy, vendor lock-in, and potential downtime exist, the benefits of scalability, cost-effectiveness, and security position Yellowstone for future success in the evolving cloud landscape.

---


