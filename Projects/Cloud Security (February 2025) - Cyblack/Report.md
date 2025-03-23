__A CLOUD SECURITY REPORT ON  YELLOWSTONE CONDUCTED BY  CYBLACK (JANUARY-2023 INTERNSHIP) TEAM 5
TEAM LIST__


# EXECUTIVE SUMMARY

The objective of the cloud computing task was to ensure a secure and efficient cloud environment for users. This was achieved by implementing a comprehensive security strategy that included Azure IAM, MFA, RBAC, the deployment of a Virtual Machine and monitoring its behaviour and events, Data Loss Prevention policy, security indicator tagging and the integration of  on-premises active directory domain service environment with an azure active directory tenant

Azure IAM - Identity and access management (IAM) ensures that at Yellowstone, the right people and job roles (identities) can access the tools they need to do their jobs. 

MFA - Multi-factor Authentication (MFA) is an authentication method that requires the user to provide two or more verification factors to gain access to a resource such as an application,their azure account, or a VPN.

RBAC - Role-based access control (RBAC) is a method of restricting network access based on the roles of individual users within an enterprise - 

Users were set up on Azure IAM based on their roles, which included System Admin, Intern, Cyber Security Engineer, Software Engineer, and Database Admin.MFA was configured, enabled and enforced to provide an additional layer of security. RBAC was also set up to ensure proper authorization and access control.

A virtual machine was created and log reader permissions were assigned to provide a secure and efficient platform for storing and managing sensitive data. Additionally, Microsoft purview was used to configure a data loss prevention policy and permission to ensure the protection of critical data.

Security indicators were tagged and created to provide real-time monitoring and proactive response to potential security threats.

Finally, The integration of the on-premises Active Directory Domain Service environment with an Azure Active Directory tenant was a successful cloud computing task that achieved the goal of streamlining user authentication and authorization processes. The integration process involved linking the on-premises environment with the Azure tenant to provide a single sign-on experience for users, reducing the complexity of managing multiple identities and passwords. The use of Azure AD enabled the organization to leverage cloud-based security features and improve the overall security posture. The solution also provided the ability to manage users, applications, and services from a single platform, making it easier to maintain and administer the environment.

In conclusion, this cloud computing task provides a robust and secure environment for users and ensures compliance with industry-standard security protocols.

#  CHAPTER 1: THE IDENTITY AND ACCESS MANAGEMENT - AZURE ACTIVE DIRECTORY



### PART A - STEPS IN ENABLING AND ENFORCING MFA


Multi-factor Authentication (MFA) is an authentication method that requires the user to provide two or more verification factors to gain access to a resource such as an application, online account, or a VPN. MFA is a core component of a strong identity and access management (IAM) policy. Rather than just asking for a username and password, MFA requires one or more additional verification factors, which decreases the likelihood of a successful cyber attack.


1. Sign in to the  Azure portal, open Azure AD,  and select Security

![Picture1](https://github.com/user-attachments/assets/1fadc567-862f-4e39-a819-b4e44eabac68)


2. Navigate to identity protection 

![Picture2](https://github.com/user-attachments/assets/e4daa393-e290-4ea0-b944-5625ab2f2f4e)




3. Select the  MFA registration policy, select the users, enforce the policy, and save

![Picture3](https://github.com/user-attachments/assets/68e6c88a-72a3-411d-9f29-a77a24e404e8)



### PART B - STEPS TO CONFIGURE MFA 


1)Sign  in to the Azure portal using your administrator account, go to the Azure active directory blade, select the security blade 

![Picture4](https://github.com/user-attachments/assets/5a14d2b3-6a81-462b-b6c1-7d1057375ba7)

2)Select the MFA 
![Picture5](https://github.com/user-attachments/assets/154fdc0f-9749-4085-bfe4-4041ff02e485)



3)Click on the "Configure" button in the "Multi-Factor Authentication" section, Then, select Additional cloud-based MFA settings.
![Picture6](https://github.com/user-attachments/assets/d0563957-4bdd-484e-a7aa-dc8aa18e77d7)


4)Configure the user service setting and save


![Picture7](https://github.com/user-attachments/assets/99e6cf9d-b7b7-4f6a-9120-4febf1a328ba)





### PART C - STEPS TO SETUP RBAC 

Role-based access control (RBAC) restricts network access based on a person's role within an organization and has become one of the main methods for advanced access control. The roles in RBAC refer to the levels of access that employees have to the network. The primary advantage of ABAC is that it establishes access based on attributes. This allows for higher levels of access security, beyond provisioning access based on roles

1. Sign in to the Azure portal, navigate to Azure AD, then, Select Roles and Administration



![Picture8](https://github.com/user-attachments/assets/de121db3-35b2-4a41-96f5-ace94b956672)

2.Click the preferred role(e.g global administrator), then, select “Add assignments”
![Picture9](https://github.com/user-attachments/assets/b00850c3-c36a-4b16-bd08-ea5af9d91023)

3. Select the preferred member(s)

![Picture10](https://github.com/user-attachments/assets/51e84d81-d754-452a-a6c4-7b31549643a8)

4. Select next and in the settings blade, select assignment type to active, write the justification , and Assign.


### PART D - CHALLENGES, FINDINGS AND RESULT OF THE IAM TASK

1)Only users with admin privilege can create new users.
2)After users were created, they were unable to access the active directory or make any configuration. They were only able to  access the AD after they were assigned roles.
3)After enforcing MFA, Users, on next login, are requested to add additional information to keep their account safe. They have the chance to skip this for 15 days or set it up immediately.

![Picture11](https://github.com/user-attachments/assets/32c86e08-a9a0-48bf-b7e6-854be091d4c0)







4)If the user decides to add other information, he/she will be asked to chose an authentication method and provide the necessary information needed.
![Picture12](https://github.com/user-attachments/assets/1e8a4dc1-ff31-4a25-90cf-ddf2a1701236)




# CHAPTER 2 : AUDIT MONITORING AND LOGGING ON CLOUD.


### PART A - CREATION OF  A VIRTUAL MACHINE

A virtual machine (VM) is an instance of a computer that has been virtualized and can carry out practically all of the same tasks as a computer, including running programs and operating systems.
The steps listed below can be used to deploy a virtual machine on the Azure cloud

1. Sign in to the   Azure portal and Click on the "Create a resource" button. 


2. Select "Windows Server 2019 Data-center" (or any other desired operating system) from the list of virtual machines.




3. Fill in the required information in the "Basics" tab, such as virtual machine name, username, password, and subscription.


4. Select a resource group or create a new one.



5. Choose a storage account or create a new one, then, Select a virtual network or create a new one. In the "Disks" tab, choose the desired disk type (OS disk or data disk).


6. In the "Networking" tab, you can configure the network settings, such as assigning a public IP address or configuring a network security group.


7. In the "Management" tab, you can enable boot diagnostics, backup, and monitoring options.






8. Review the settings and click on the "Create" button to deploy the virtual machine.





### PART B - ASSIGNING LOG READER PERMISSION


The actions listed below must be carried out to assign the Log Reader permission to the user in an Azure Virtual Machine (VM):

1. Sign in to the Azure portal with an account that has the Contributor or Owner role for the virtual machine and Select the newly created virtual machine.


2. Select Access Control (IAM) from the left-side menu.




3. Select Add role assignment




4. Select Log Reader from the Role drop-down.







5. Select the user, group, or service principal you want to assign the role to from the Assign access drop down.






6. Select review and assign.














### PART C - BEHAVIOUR AND EVENTS FROM THE VIRTUAL MACHINE


1. The Machine becomes deallocated whenever it is not running and no connection can be made to it.



2. The machine becomes allocated when it is running and connections can be made to it via RDP, SSH, or Bastion.



3. Sentinel Log queries were   used to monitor login  events on the resource

4. Sentinel Log queries were   used to monitor sign-in locations   on the resource



5. Only users with  access can view, run, or perform actions on the virtual machine.

# CHAPTER 3: DATA LOSS PREVENTION AND  MICROSOFT COMPLIANCE.



### PART A - CONFIGURING DLP

Data loss prevention (DLP) is a set of tools and processes used to ensure that sensitive data is not lost, misused, or accessed by unauthorized users. 
The following are the steps needed to configure DLP:

1. Sign in to the Microsoft compliance portal and select the “Data loss privacy” option. 


2. Select Create Policy


3. Select a category(e.g privacy), a template(U.K data protection)  and click on next.



4. Name the policy and choose the locations.



5. Define the policy setting, and policy mode and create the policy.


### PART B - CREATING PERMISSIONS 


 Microsoft purview gives the admin the ability to manage and give permissions to users, for compliance solutions and features like DLP, insider risks management, e.t.c
In Microsoft purview permissions, role groups are being assigned to users.
Below are the steps to create permissions In Microsoft purview.
 
1.Sign in to the Microsoft compliance portal and select the “permission” option. 

2.Select “roles”  under Microsoft purview solutions





3.Select a role group( Security administrator), Then edit it, select choose user in the new blade and select the user, review and save.



## PART C - CHALLENGES, FINDINGS AND RESULT OF THE DLP AND PERMISSION TASK.


1)After signing in, the “Data loss prevention policy ” option was not found on Microsoft compliance portal and we were unable to configure the policy


2)We had to activate and assign some trial license (Azure Active Directory Premium P2 and Enterprise Mobility + Security E5) on azure AD


3)It was found out that the permissions assigned to user on the compliance portal is different from the permission that was assigned to users on Azure AD
4)It was also discovered that only user accounts can sign in to the compliance portal.
5)Users that were not assigned license(on the azure portal) were unable to access DLP
6)

# CHAPTER 4 : SECURITY INCIDENT AND EVENT MANAGEMENT.


### PART A - CREATING INDICATORS 


Security information and event management is a solution that helps organizations detect, analyze, and respond to security threats before they harm business operations.
The steps involved in creating indicators related to security investigations:

1. Sign in to the azure portal and navigate to Microsoft sentinel service and choose a workspace(Team-workspace) and select Threat intelligence.


2. Select the “add new” and choose the indicator type(domain name).


3. Fill in the form fields and click apply.



### PART B - OUTCOME AND BENEFIT OF TAGGING THREAT INDICATORS.

1. Tagging threat indicators is an easy way to group them together to make them easier to find.
2. Tagging threat indicators can help security teams prioritize their efforts, allowing them to focus on the most critical threats first. This can save time and resources, and improve overall efficiency.
3. Tagging threat indicators provides a way for security teams to make sense of the vast amounts of data they collect, and respond to threats more quickly and effectively.




















# CHAPTER 5: IMPLEMENT DIRECTORY SYNCHRONIZATION STUDENT LAB MANUAL.

### PART A - Deploying an Azure VM hosting an active directory domain controller

1)Open your  browser and navigate to the https://github.com/Azure/azure-quickstart-templates/tree/master/modules/active-directory-new-domain/0.9

2)On Github,  click Deploy to Azure. This will automatically redirect the browser to the Create an Azure VM with a new AD Forest blade in the Azure portal.



3)On the create an azure VM, edit the parameters with your details


4)The following details were filled In and the virtual machine was created














### PART B - CREATE AND CONFIGURE AN ACTIVE DIRECTORY TENANT




1.Sign in to azure portal, navigate to the Azure AD, then, click manage tenant


2. On the configuration tab of the create a directory, the following details were used and the machine was created.

 
3.Locate the  Directory + subscription icon and switch to the newly created tenant(Yellowstone)




4. Navigate to the Azure AD, and in the manage section, click custom domain names ,then, add custom domain name(yellowstone.com)




5. Back to the Azure AD and create a user with the global admin role.









### PART C - SYNCHRONIZE ACTIVE DIRECTORY FOREST WITH AN AZURE ACTIVE DIRECTORY TENANT

1. Sign in to the Azure portal and switch, from the newly created tenant, back to the former tenant. 
2. Locate the VM that was created for this task (Yellowstone-VM) and connect it using RDP.


3. Once the VM is up, and the server manager is running, click local server and set the IE enhanced security configuration to off





4. Back to the server managers, navigate to tool,s and select AD administrative center



5. In the AC AD, click Yellowstone(local), in the Tasks pane, under the domain name Yellowstone (local) click New, and, in the cascading menu, click Organizational Unit.
6. In the Create Organizational Unit window, in the Name text box, type ToSync and click OK. Double-click the newly created ToSync organizational unit such that its content appears in the details pane of the Active Directory Administrative Center console. In the Tasks pane, within the ToSync section, click New, and, in the cascading menu, click User.
7. In the Create User window, create a new user account(Yellowstonuser)  and click OK






8. Start the internet explorer and download another browser(Edge)
9. On Microsoft Edge, navigate to the Azure portal and sign in with the Global admin user account that was created earlier ( Forest-Admin)
10. Locate the Azure AD, navigate to Azure Ad Connect, and download.
11. Launch the AD connect and agree with the terms
12. On the Express Settings page of the Microsoft Azure Active Directory Connect wizard, click the Customize option.
13. On the Install required components page, leave all optional configuration options deselected and click Install
14. On the User sign-in page, ensure that only the Password Hash Synchronization is enabled and click Next.
15. On the Connect to Azure AD page, authenticate by using the credentials of the yellowstoneadmin user account that was create earlier and click Next.
16. On the Connect Your Directories page, click the Add Directory button to the right of the yellowstone.com forest entry.
17. In the AD forest account window, ensure that the option to Create a new AD account is selected, specify the following credential - YELLOWSTONE\Forest-Admin -  and click OK
18. Back on the Connect your directories page, ensure that the Yellowstone.com entry appears as a configured directory, and click Next
19. On the Domain and OU filtering page, click the option Sync selected domains and OUs, The domain name yellowstone.com will be checked, expand the yellowstone.com to view the ToSync. Clear all checkboxes, click only the checkbox next to the ToSync OU, and click Next.
20. On the Uniquely identifying your users' page, accept the default settings, and click Next.
21. On the Filter users and devices page, accept the default settings, and click Next.
22. On the Optional features page, accept the default settings, and click Next.
23. On the Ready to Configure page, ensure that the Start the synchronization process when configuration completes checkbox is selected and click Install.



























# CHAPTER 6: CONCLUSION
In conclusion, cloud computing has revolutionized the way businesses and individuals store and access data. With its many advantages, including increased accessibility, scalability, cost-effectiveness, and security, it has become an increasingly popular option for organizations and individuals alike. However, the cloud also presents some challenges, such as data privacy concerns, vendor lock-in, and the potential for downtime. Despite these challenges, the future of cloud computing remains bright as technology continues to evolve and provide new opportunities for innovation. Companies and individuals who embrace cloud computing and take advantage of its benefits are poised for success in the years to come.

