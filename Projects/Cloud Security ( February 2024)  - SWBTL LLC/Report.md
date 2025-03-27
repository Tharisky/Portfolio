# Introduction   - Task A
SWBTL LLC, originating as a local document and delivery service in 1977, has grown into a nationwide logistics provider with over 2,000 employees. Currently in the process of transitioning to Microsoft Azure, the company faces security challenges post the unexpected departure of a migration consultant.

#### Current Security Environment Overview
SWBTL LLC operates in four leased data centers, facing logistical constraints due to escalating fees, service interruptions, and cybersecurity concerns. The company processes sensitive data, necessitating compliance with FISMA, PCI DSS, and upcoming NIST SP 800-53 assessments. The transition to Microsoft Azure aims to address scalability, legacy authentication, and compliance needs, amd the sudden departure of the migration consultant has led to unauthorized access, potential data exposure, unverified backups, and outdated vulnerability scanning boundaries, raising concerns about the overall security posture.

#### Prioritized Business Requirements
a. Regulatory Compliance: SWBTL LLC must maintain compliance with FISMA, PCI DSS, and other applicable regulations to support federal contracts.

b. Cloud Operations: Ensure the ability to provision, configure, and operate Azure virtual servers to meet ongoing business needs.

c. Data Encryption: Implement industry-standard encryption for data-at-rest and data-in-transit, meeting regulatory requirements.

d. Departmental Resource Isolation: Establish separate Azure Resource Groups for each migrating department (Accounting, Marketing, and IT) to ensure resource isolation.

e. Key Vault Implementation: Each department should have its own Azure Key Vault, following the principle of least privilege.

f. Access Policies: Configure Azure Key Vault access policies to allow Key Vault Contributor access only for departmental users.

g. Backup and Recovery: The IT department is tasked with performing and verifying backups, with a 1-day RPO and 36-hour RTO. Maintain instant recovery snapshots for 3 days and daily backup points for 45 days.

h. Backup Policy: Create a new backup policy named SWBTL to ensure proper configurations while using a single Recovery Vault for all virtual machines.

i. Resource Tagging: Implement tags throughout the Azure environment to identify resources belonging to each department.

#### Mitigation Actions
To address unauthorized access and data exposure issues, 

a. conduct a thorough security audit. 
b. Implement Azure Key Vaults, Resource Groups, and access policies as per the specified requirements.  
c. Establish and enforce backup policies to meet RPO and RTO objectives, ensuring data integrity and availability.

SWBTL LLC's security environment is at a critical juncture, necessitating immediate attention to address unauthorized access, compliance concerns and ensure a smooth transition to Microsoft Azure. The proposed mitigation actions aim to enhance security, compliance, and operational efficiency. A detailed presentation to senior leadership,which is essential to communicate findings and gain support for the necessary security enhancements, will be done



# Task B
Azure offers a wide range of cloud solutions, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Azure. Implementing an Infrastructure as a Service (IaaS) model allows SWBTL LLC to have more control over their virtual machines, operating systems, and applications, providing a balance between flexibility and management responsibilities. The IaaS also operates on a shared responsibility model, meaning that while Microsoft is responsible for the security of the cloud infrastructure, SWBTL LLC is responsible for securing its data and applications. Azure IaaS allows for easy scalability, ensuring that the organization can adapt to changing workloads without compromising security. The  applicable regulatory compliance directives for the company  include the Federal Information Security Modernization Act (FISMA) for data protection, Payment Card Industry Data Security Standard (PCI DSS). Utilizing Azure's compliance offerings will ensure alignment with certifications like ISO 27001 and SOC 2 to meet industry standards. Microsoft(2024).

As reported by Allstar software system, the security benefits for the IaaS model includes:

a. Enhanced data security through Azure's robust built-in features like Azure Active Directory for identity management and Azure Security Center for threat detection.

b. Automated compliance reporting and monitoring tools to ensure continuous adherence to regulatory requirements.

c. Scalability and flexibility of IaaS  model allow for efficient resource allocation and dynamic scaling based on workload demands.
##### Challenges of transitioning to this model as recorded by CompTIA includes:

a. Data migration challenges may arise during the transition, necessitating thorough planning and validation to avoid potential data breaches.

b. New security vulnerabilities may arise

c. Ongoing training for staff to adapt to the new cloud environment and security protocols.

d. integration complexities during the migration process, requiring careful consideration to minimize disruptions to business operations


# Task C1 
The principle of least privilege (POLP) is a concept in computer security that limits users' access rights to only what is strictly required to do their jobs -  Alexander S. Gillis(2022). The following are recommendations for role-based access controls that can be configured in alignment with the principle of least privilege based on the business requirements in the given scenario: 

a. User Roles and Permissions: Defining  distinct user roles based on job responsibilities and assigning minimal permissions required for each role  ensures that users only have the necessary access to perform their tasks. For example, a regular employee in the Accounting, Marketing, or IT department might have read-only access, while an administrator has full control. 

b. Resource grouping: Grouping resources based on ownership by teams helps streamline access control. Instead of assigning permissions to individual resources, permissions will be assigned  at the resource group level. This action aligns with the  fourth business requirement of the company, which states that  “ Each migrating department (Accounting, Marketing, and IT) should have its own Azure Resource Group. Each group should only contain resources associated with the respective department.”

c. Key vault Access Policies:  Configuring access policies in Azure Key Vault involves defining permissions and roles to control who can access and manage the secrets, keys, and certificates stored within the Key Vault. This action aligns with the sixth business requirement of the company, which states that “Each migrating department should have its own Azure Key Vault to help embrace the principle of least privilege.”




# Task C2
1. User role and permissions: Access to the  IT, Accounting, and Marketing resource groups  was configured to allow their corresponding workers to have the reader permission only, hereby limiting who can access and make changes in the resource group.
      
      Figure 1 shows the Accounting user as a reader

![Picture1](https://github.com/user-attachments/assets/f4ff68cd-1075-49a5-9cec-81d3bbd395e5)

    Figure 2 showing the IT user as a reader


![Picture2](https://github.com/user-attachments/assets/1005f55b-9423-4fe9-9bbb-288b681be7ac)




    Figure 3. showing the Marketing user as a reader
 ![Picture4](https://github.com/user-attachments/assets/c95a04e7-e5e3-4690-80c9-586d961540ee)


2. Resources belonging to other resource groups are moved from the IT resource group to other groups. The key vault belonging to the Accounting group was in the Marketing group, and it was moved to the Accounting resource group.

     Figure 4 shows the resources present in the Accounting resource group after the resource grouping

![Picture5](https://github.com/user-attachments/assets/8ffdb39e-b283-4340-8428-d3b83f3e8441)


     Figure 5 shows the resources present in the IT resource group after the resource grouping
 ![Picture6](https://github.com/user-attachments/assets/df5b14c6-d448-4678-a3ca-abaa36549e7d)


     Figure 6 shows the resources present in the Marketing resource group after the resource grouping

 ![Picture8](https://github.com/user-attachments/assets/87e7c96d-8ca6-4652-8136-a49437b547e3)




3. Access policies for all Microsoft Azure Key Vaults were configured to allow Key Vault Contributor access for departmental users only.

     Figure 7 shows the Accounting user as the only user with key vault contributor access

![Picture9](https://github.com/user-attachments/assets/a28ffe50-cadb-43f3-b433-8b8cf81f1716)


     Figure 8 shows the Marketing user as the only user with key vault contributor access

![Picture10](https://github.com/user-attachments/assets/67d8fdcc-fc52-466b-b420-e40655a09bac)

     Figure 9 shows the IT user as the only user with the key vault contributor access

![Picture11](https://github.com/user-attachments/assets/1502639c-011b-4341-a698-736cb488f8f5)



# Task D1
The two best practices for Azure Key Vaults applicable to the resource groups that are implemented include: 

a. Enabling Purge Protection: Turning on purge protection prevents permanent deletion of key vaults, even by authorized users. This helps maintain data integrity and compliance with regulatory requirements. Patricio, A. (2020).


    Figure 10.  Marketing key vault protection 

  ![Picture12](https://github.com/user-attachments/assets/45b492c4-c906-4053-97b5-0f8d4d08a4b5)

    Figure 11. Finance key vault protection
 
![Picture13](https://github.com/user-attachments/assets/27ea817f-4ead-4087-8070-188c6dc53629)


    Figure 12. Accounting key vault protection is on 

![Picture14](https://github.com/user-attachments/assets/4747f955-e3f0-4629-a06b-2a5298bb443e)

b. The Use of  Access Policies: Assigning access policies to restrict access to only necessary users and applications aligns with the principle of least privilege to limit access to only what is needed, and it also aligns with the business requirement. The Access policies for all Microsoft Azure Key Vaults contained in the lab  were configured to allow Key Vault Contributor access for departmental users only


    Figure 13 shows the Accounting staff as the Key Vault contributor
![Picture15](https://github.com/user-attachments/assets/181552a0-183b-4742-a508-3431603c4e69)




    Figure 14  shows the Marketing staff as the Key Vault contributor
![Picture20](https://github.com/user-attachments/assets/12a542e0-dcaf-4216-8f88-1708b565893a)





# Task D2
Key vaults are secure repositories for storing and managing cryptographic keys, secrets, and certificates. Below are recommendations on how key vaults can be effectively utilized for encrypting both data at rest and data on transit:

a. Generate Encryption Keys: The key vault can be used  to generate encryption keys specifically for encrypting data at rest. These keys should be strong and compliant with relevant security standards.

b. The key vault can  be used to Store SSL/TLS certificates used for securing communication channels. SSL/TLS certificates are essential for encrypting data transmitted over HTTP, SMTP, FTP, or other protocols

c. Key Management: The key vault can be used to securely store the generated encryption keys, as key vaults provide features for secure key management, including access controls, key rotation, and auditing.

d. Integration with Applications: Applications can be integrated with the key vault to retrieve encryption keys when encrypting or decrypting data. Ensure that only authorized applications and users have access to the keys stored in the key vault.

# Task E1
The  two settings for file backups that are configured  in alignment with the given scenario include:
1. The resources needed for the backup were attributed to the IT resource group based on the seventh business requirement which states that “The IT department is responsible for performing and verifying backups.” 

            Figure 15  shows the Resources needed for the backup in the IT resource group
 ![Picture18](https://github.com/user-attachments/assets/bd36f1f4-ade3-4b45-99f2-e69282a2189c)

3. A new Policy, SWBTL, was created, instant recovery snapshots were configured to be maintained for 3 days, standard backups were configured to be conducted by 7 pm daily, and the daily backup points were configured to be  maintained for 45 days.
    
          Figure 16

![Picture22](https://github.com/user-attachments/assets/55e2aff1-ea53-4a35-8690-f387ef6d4845)

# Task E2
a. Maintaining instant recovery snapshots for 3 days: Since instant recovery snapshots provide a point-in-time backup of the data, allowing for quick restoration in case of data loss or corruption, this configuration ensures that instant recovery snapshots are available for the most recent three days. 

b.Standard Backups conducted by 7 PM daily: Regular backups provide protection against data loss due to accidental deletion, corruption, or malicious activities. By performing backups daily, the business ensures that data can be restored to a recent state if needed.

c. Daily Backup Points maintained for 45 days: This configuration ensures that backup points are retained for a longer period, specifically 45 days. This allows for a historical view of data changes over time and provides an extended window for recovery.

All of these configurations are in alignment with the eighth, ninth and tenth business requirement.


 #Task F
In an Infrastructure as a Service (IaaS) model, the division of security responsibilities typically follows a shared responsibility model between the company (customer) and the cloud service provider (Azure). Based on the description provided by Corestack, here's how the responsibilities are usually divided:

#### Cloud Service Provider (Azure)

a.Physical Host: Azure is responsible for securing the physical hosts in its data centers, including physical access controls, hardware security, and isolation between customer environments.

b.Physical Network: Azure is  Responsible for securing the physical network infrastructure within its data centers, including network segmentation, traffic isolation, and network monitoring

c.Physical Data Center: Azure is responsible for securing the physical data center facilities, including environmental controls, power supply, cooling systems, and physical security measures such as surveillance and access controls.

#### Customer (SWBTL)

a. Information and Data: The company is responsible for securing the data it stores and processes in Azure VMs. This includes implementing encryption for data-at-rest and data-in-transit as per regulatory requirements.

b. Devices (Mobile and PC):  The company is  responsible for securing end-user devices such as mobile phones and PCs, including implementing device encryption, antivirus software and enforcing device security policies.

c. Accounts and Identity: The company manages user access to its Azure resources, including defining roles, permissions, and access controls using Azure Active Directory.

d. Identity and Directory Infrastructure: The company is responsible for configuring and managing the directory infrastructure within the cloud environment, including directory synchronization, domain configuration, and directory services management.

e. Operating System Security: The company is responsible for securing the operating systems running on its Azure VMs, including patch management, antivirus software installation, and configuration hardening.

f. Application Security: The company is responsible for securing the applications deployed on Azure VMs, including code-level security, vulnerability management, and access controls.

g. Network Control: The company is responsible for configuring and managing network controls within the cloud environment, including virtual network configuration, firewall rules, network segmentation, and traffic monitoring.



# Task F1

a. Data Security Risk:  Despite Azure's responsibility for physical and infrastructure security, the company faces a risk concerning data security in the cloud. While Azure handles infrastructure security, the company must ensure data protection through encryption and access controls. If data isn't adequately secured, it could lead to breaches or loss. This risk could severely impact the company, causing reputation damage, financial losses, and regulatory fines.

b. Identity and Access Management (IAM) Risk: Another risk involves IAM in the cloud. Azure offers identity management, but the company is responsible for user access and permissions. Weak IAM practices might result in unauthorized access or data compromise. This risk could disrupt operations, leading to data breaches or system compromise, resulting in operational disruptions and regulatory penalties.

c. Network Security: Despite Azure's network security controls, the company faces risks related to misconfigurations and inadequate security measures, potentially exposing its cloud resources to cyber threats such as unauthorized access and malware attacks. Strong network segmentation and regular monitoring are essential to mitigate these risks.

d. Backup and Disaster Recovery Risk: The company also takes on risks related to backup and disaster recovery for Azure VMs. While Azure provides redundancy, the company must manage backup policies and recovery planning. Inadequate planning may lead to data loss or prolonged downtime. This risk could impact the company significantly, causing data loss, downtime, and non-compliance issues.


# Task F2
a. Continuous Security Monitoring and Threat Detection: The company should deploy robust security monitoring tools and establish continuous practices to detect and respond to threats in real-time, including IDS, SIEM solutions, and log analysis tools. This ensures prompt detection and response to security incidents, minimizing potential breaches or unauthorized activities.

b. Regular Security Assessments and Compliance Audits: The company should conduct regular security assessments and compliance audits to evaluate the effectiveness of cloud security controls and ensure regulatory compliance.  These proactive assessments and auditing identify security gaps and vulnerabilities, enabling timely remediation and alignment with industry standards and regulatory requirements.

c. Develop and Enforce a Comprehensive Data Loss Prevention (DLP) Policy: The company should create a DLP policy outlining guidelines and procedures for identifying, classifying, and protecting sensitive data within the cloud environment. By establishing a robust DLP policy, the company ensures proactive measures are in place to mitigate the risk of data breaches and compliance violations, aligning with industry best practices for data protection in the cloud environment



# TASK G
a. Insider Threats:  Insider threats involve individuals within the organization who misuse their access privileges to compromise the security of the cloud solution. Insider threats can include malicious employees, negligent behavior, or compromised accounts. This threat can be controlled by conducting  thorough background checks and employee vetting processes to identify potential insider threats during the hiring process. Providing regular security awareness training and education to employees to raise awareness of security risks and best practices for safeguarding sensitive information will also help mitigate this threat.

b. Denial of Service (DoS) Attacks:   DoS attacks aim to disrupt the availability of cloud services by overwhelming the network infrastructure or consuming excessive system resources, rendering the cloud solution inaccessible to legitimate users. These attacks can impact business operations, cause downtime, and result in financial losses. Deploying DoS mitigation technologies, such as rate limiting, traffic filtering, and network segmentation,  mitigates the impact of DoS attacks.

c. Data breach: Data breaches pose a significant threat to the company's cloud solution, potentially resulting in unauthorized access to sensitive information, such as customer data, financial records, or intellectual property.








# References
Alexander S. Gillis(2022)
https://www.techtarget.com/searchsecurity/definition/principle-of-least-privilege-POLP

All Star Software Systems. Benefits of using Microsoft Azure for Infrastructure as a Service. 
https://www.allstarss.com/blog/benefits-of-using-microsoft-azure-for-infrastructure-as-a-service/

Azure. Types of cloud computing - Definition | Microsoft Azure.
https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/types-of-cloud-computing

CompTIA. What is IaaS - Advantages and Disadvantages.
https://www.comptia.org/content/articles/what-is-iaas#:~:text=Lack%20of%20Support%3A%20Live%20help,control%20and%20ability%20to%20customize

Corestack. Azure shared responsibility model:Real world examples and best practices. 
https://www.corestack.io/azure-security-tools/azure-shared-responsibility-model/#:~:text=The%20shared%20responsibility%20model%20is,the%20security%20in%20the%20cloud.

IAAS: SECURITY AND THREATS
https://www.also.com/ec/cms5/en_6000/6000/company/blog/article/channel-insights/iaas-security-and-threats.jsp

Microsoft. (2024). System and Organization Controls (SOC) 2 Type 2. https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2

Patricio .A. (April 21, 2020.) https://techgenix.com/purge-protection-soft-delete/
