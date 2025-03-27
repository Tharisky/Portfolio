# Company Overview and Requirements


SWBTL LLC began as a local document and delivery service in 1977. The small business initially provided 24-7 on-demand local shipping services via van, flatbed, and box truck. Over time, the company has grown due to innovative strategies and successful acquisitions. SWBTL LLC now supports nationwide services and employs over 2,000 professionals. 
The organization leverages information technology to enable growth by supporting operations with internally developed and vendor-provided software. All servers and applications have been hosted in four leased data centers in the United States. SWBTL LLC does not own the data centers, and these leased data centers are beginning to constrain logistics activities due to increasing fees, service interruptions, and cybersecurity concerns. Additionally, the company maintains contracts with the U.S. government and processes card transactions daily, so it must comply with regulations such as the Federal Information Security Modernization Act (FISMA) and the Payment Card Industry Data Security Standard (PCI DSS).  
These factors, along with growing cybersecurity concerns related to regulatory compliance and an upcoming NIST SP 800-53 assessment, have rapidly forced SWBTL LLC to embrace the Microsoft Azure cloud environment. This provider was selected to support legacy authentication requirements, easily integrate with the existing Active Directory structure, and ensure compatibility for internally developed software as the cloud transition takes place over the next several years. The organization requires a service model that will allow the deployment and control of multiple operating systems, virtual machines, and custom applications that can be supported by compute, storage, and network resources on demand. The initial roles migrating to the cloud environment include the marketing, accounting, and IT resource groups. 
 The consultant responsible for the migrations became disgruntled and unexpectedly departed for another position. Since the departure, users have reported being able to view data and assets belonging to other teams throughout the company. IT administrators have been unable to verify file and system backups as required since the beginning of the cloud transition. Also, vulnerability scanning boundaries have not been validated in more than two years and may not encompass the Azure instance. 
Senior leadership is concerned that the cloud instance may not comply with regulatory requirements, leaving systems vulnerable to exploitation by advanced persistent threats or malicious actors. The chief information officer has created a list of prioritized business requirements and seeks to minimize risk and avoid cyberattacks that have plagued supply chain and logistics operations in recent months. All findings and mitigation actions should be presented to leadership upon completion.  
 

# Business Requirements 

1. Maintain compliance with applicable regulations and standards to support the success of federal contracts.
2. The company should maintain the ability to provision, configure, and operate cloud virtual servers as needed.
3. The cloud instance should support the encryption of data-at-rest and data-in-transit in accordance with industry standards and regulatory requirements.
4. Each migrating department (Accounting, Marketing, and IT) should have its own Azure Resource Group. Each group should only contain resources associated with the respective department.
5. Each migrating department should have its own Azure Key Vault to help embrace the principle of least privilege.
6. Access policies for all Microsoft Azure Key Vaults should be configured to allow Key Vault Contributor access for departmental users only. For example, the three user instances for accounting should be the only users assigned to this role for the Accounting Key Vault.
7. The IT department is responsible for performing and verifying backups.
8. All cloud servers have a recovery point objective (RPO) of 1 day. Standard backups should be conducted daily at 7p.m. Eastern Time (ET) on all servers to meet the company’s recovery time objective (RTO) of 36 hours.
9. Instant recovery snapshots should be maintained for 3 days, and the daily backup points must be maintained for 45 days.
10. All virtual machines may be backed up using a single Recovery Vault, but a new backup policy named SWBTL should be created to ensure proper configurations.
11. Tags can be used throughout the environment to identify resources belonging to each department. 
