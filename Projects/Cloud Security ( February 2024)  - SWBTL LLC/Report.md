

## Project: Azure Migration and Security Enhancement for SWBTL LLC

### Overview (Task A)

SWBTL LLC, originally a local document and delivery service founded in 1977, has evolved into a nationwide logistics provider with over 2,000 employees. The company is currently transitioning to Microsoft Azure to address scalability, compliance, and security challenges, following the unexpected departure of a migration consultant. This project focuses on assessing the current security environment, defining business requirements, implementing secure configurations, and mitigating risks to ensure a successful Azure migration. My contributions highlight expertise in cloud security, regulatory compliance, role-based access control (RBAC), backup policies, and threat mitigation strategies.

#### Current Security Environment

SWBTL LLC operates across four leased data centers, facing challenges such as rising fees, service interruptions, and cybersecurity risks. The company handles sensitive data, requiring compliance with **FISMA**, **PCI DSS**, and upcoming **NIST SP 800-53** assessments. The transition to Microsoft Azure aims to address:  
- Scalability and legacy authentication issues.  
- Compliance with regulatory standards.  

However, the sudden departure of the migration consultant has introduced vulnerabilities:  
- Unauthorized access to systems.  
- Potential data exposure.  
- Unverified backups.  
- Outdated vulnerability scanning boundaries.  

These issues have compromised SWBTL LLC’s overall security posture, necessitating immediate action.

#### Prioritized Business Requirements

To address these challenges, SWBTL LLC has outlined the following requirements:  
- **Regulatory Compliance**: Maintain compliance with FISMA, PCI DSS, and other applicable regulations to support federal contracts.  
- **Cloud Operations**: Enable provisioning, configuration, and operation of Azure virtual servers to meet business needs.  
- **Data Encryption**: Implement industry-standard encryption for data-at-rest and data-in-transit to meet regulatory requirements.  
- **Departmental Resource Isolation**: Create separate Azure Resource Groups for Accounting, Marketing, and IT departments to ensure resource isolation.  
- **Key Vault Implementation**: Assign each department its own Azure Key Vault, adhering to the principle of least privilege (POLP).  
- **Access Policies**: Configure Azure Key Vault access policies to grant Key Vault Contributor access only to departmental users.  
- **Backup and Recovery**: Task the IT department with performing and verifying backups, targeting a 1-day Recovery Point Objective (RPO) and 36-hour Recovery Time Objective (RTO). Maintain instant recovery snapshots for 3 days and daily backup points for 45 days.  
- **Backup Policy**: Create a new backup policy named SWBTL, using a single Recovery Vault for all virtual machines.  
- **Resource Tagging**: Implement tags across the Azure environment to identify departmental resources.

#### Mitigation Actions

To address unauthorized access and data exposure, the following actions are proposed:  
- Conduct a thorough security audit to identify and remediate vulnerabilities.  
- Implement Azure Key Vaults, Resource Groups, and access policies per the specified requirements.  
- Establish and enforce backup policies to meet RPO and RTO objectives, ensuring data integrity and availability.  

A detailed presentation to senior leadership will be prepared to communicate findings and secure support for these security enhancements.

---

### Task B: Azure IaaS Model for SWBTL LLC

#### Azure IaaS Overview

Microsoft Azure offers cloud solutions including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). For SWBTL LLC, adopting an **IaaS model** provides control over virtual machines, operating systems, and applications, balancing flexibility with management responsibilities. Azure operates on a **shared responsibility model**, where Microsoft secures the cloud infrastructure, and SWBTL LLC is responsible for securing its data and applications.

#### Benefits of Azure IaaS

- **Enhanced Data Security**: Leverages Azure’s built-in features like Azure Active Directory for identity management and Azure Security Center for threat detection.  
- **Automated Compliance**: Provides reporting and monitoring tools to ensure adherence to FISMA, PCI DSS, ISO 27001, and SOC 2 standards.  
- **Scalability and Flexibility**: Allows dynamic scaling and efficient resource allocation based on workload demands.

#### Challenges of Transitioning to IaaS

- **Data Migration Risks**: Potential data breaches during migration require thorough planning and validation.  
- **New Security Vulnerabilities**: The cloud environment may introduce new risks that need proactive management.  
- **Staff Training**: Ongoing training is required to adapt to the new cloud environment and security protocols.  
- **Integration Complexities**: Migration may cause disruptions, necessitating careful planning to minimize impact on operations.

---

### Task C: Implementing Role-Based Access Control (RBAC) with the Principle of Least Privilege (POLP)

#### Task C1: Recommendations for RBAC

The **Principle of Least Privilege (POLP)** limits users’ access rights to only what is necessary for their roles. The following RBAC configurations align with POLP and SWBTL LLC’s business requirements:  
- **User Roles and Permissions**: Define distinct roles based on job responsibilities, assigning minimal permissions. For example, regular employees in Accounting, Marketing, or IT should have read-only access, while administrators have full control.  
- **Resource Grouping**: Assign permissions at the Resource Group level to streamline access control, aligning with the requirement for separate Resource Groups for each department (Accounting, Marketing, IT).  
- **Key Vault Access Policies**: Configure Azure Key Vault access policies to define permissions, ensuring only departmental users have Key Vault Contributor access, per the business requirement for POLP.

#### Task C2: Implementation of RBAC Configurations

- **User Roles and Permissions**: Configured read-only access for Accounting, Marketing, and IT users within their respective Resource Groups to limit modifications.  
  - **Accounting User as Reader**:  
    ![Accounting User Reader](https://github.com/user-attachments/assets/f4ff68cd-1075-49a5-9cec-81d3bbd395e5)  
  - **IT User as Reader**:  
    ![IT User Reader](https://github.com/user-attachments/assets/1005f55b-9423-4fe9-9bbb-288b681be7ac)  
  - **Marketing User as Reader**:  
    ![Marketing User Reader](https://github.com/user-attachments/assets/c95a04e7-e5e3-4690-80c9-586d961540ee)

- **Resource Grouping**: Reorganized resources into their correct Resource Groups. For example, the Accounting Key Vault was moved from the Marketing Resource Group to the Accounting Resource Group.  
  - **Accounting Resource Group Post-Reorganization**:  
    ![Accounting Resources](https://github.com/user-attachments/assets/8ffdb39e-b283-4340-8428-d3b83f3e8441)  
  - **IT Resource Group Post-Reorganization**:  
    ![IT Resources](https://github.com/user-attachments/assets/df5b14c6-d448-4678-a3ca-abaa36549e7d)  
  - **Marketing Resource Group Post-Reorganization**:  
    ![Marketing Resources](https://github.com/user-attachments/assets/87e7c96d-8ca6-4652-8136-a49437b547e3)

- **Key Vault Access Policies**: Configured access policies to grant Key Vault Contributor access only to departmental users, aligning with POLP.  
  - **Accounting User as Key Vault Contributor**:  
    ![Accounting Key Vault Access](https://github.com/user-attachments/assets/a28ffe50-cadb-43f3-b433-8b8cf81f1716)  
  - **Marketing User as Key Vault Contributor**:  
    ![Marketing Key Vault Access](https://github.com/user-attachments/assets/67d8fdcc-fc52-466b-b420-e40655a09bac)  
  - **IT User as Key Vault Contributor**:  
    ![IT Key Vault Access](https://github.com/user-attachments/assets/1502639c-011b-4341-a698-736cb488f8f5)

---

### Task D: Azure Key Vault Best Practices and Data Encryption

#### Task D1: Implemented Best Practices for Azure Key Vaults

The following best practices were applied to the Key Vaults within the Resource Groups:  
- **Enabling Purge Protection**: Prevents permanent deletion of Key Vaults, ensuring data integrity and compliance with regulatory requirements.  
  - **Marketing Key Vault with Purge Protection**:  
    ![Marketing Key Vault Protection](https://github.com/user-attachments/assets/45b492c4-c906-4053-97b5-0f8d4d08a4b5)  
  - **Finance Key Vault with Purge Protection**:  
    ![Finance Key Vault Protection](https://github.com/user-attachments/assets/27ea817f-4ead-4087-8070-188c6dc53629)  
  - **Accounting Key Vault with Purge Protection**:  
    ![Accounting Key Vault Protection](https://github.com/user-attachments/assets/4747f955-e3f0-4629-a06b-2a5298bb443e)

- **Use of Access Policies**: Configured access policies to restrict Key Vault access to authorized departmental users only, aligning with POLP.  
  - **Accounting Staff as Key Vault Contributor**:  
    ![Accounting Key Vault Contributor](https://github.com/user-attachments/assets/181552a0-183b-4742-a508-3431603c4e69)  
  - **Marketing Staff as Key Vault Contributor**:  
    ![Marketing Key Vault Contributor](https://github.com/user-attachments/assets/12a542e0-dcaf-4216-8f88-1708b565893a)

#### Task D2: Recommendations for Data Encryption Using Key Vaults

Key Vaults are secure repositories for managing cryptographic keys, secrets, and certificates. The following recommendations ensure encryption for data-at-rest and data-in-transit:  
- **Generate Encryption Keys**: Use Key Vaults to generate strong, compliant encryption keys for data-at-rest encryption.  
- **Store SSL/TLS Certificates**: Use Key Vaults to store SSL/TLS certificates for securing data-in-transit over protocols like HTTP, SMTP, and FTP.  
- **Key Management**: Leverage Key Vault features for secure key storage, access control, key rotation, and auditing.  
- **Application Integration**: Integrate applications with Key Vaults to retrieve encryption keys for data encryption/decryption, ensuring only authorized access.

---

### Task E: Backup Configurations for Azure VMs

#### Task E1: Configured Backup Settings

The following backup settings were configured to align with SWBTL LLC’s requirements:  
- **Resources Assigned to IT Resource Group**: All backup resources were attributed to the IT Resource Group, per the requirement that the IT department is responsible for backups.  
  - **Backup Resources in IT Resource Group**:  
    ![Backup Resources](https://github.com/user-attachments/assets/bd36f1f4-ade3-4b45-99f2-e69282a2189c)

- **SWBTL Backup Policy**: Created a new policy named SWBTL with the following configurations:  
  - Instant recovery snapshots maintained for 3 days.  
  - Standard backups conducted daily at 7 PM.  
  - Daily backup points retained for 45 days.  
  - **SWBTL Backup Policy Configuration**:  
    ![SWBTL Backup Policy](https://github.com/user-attachments/assets/55e2aff1-ea53-4a35-8690-f387ef6d4845)

#### Task E2: Alignment with Business Requirements

- **Instant Recovery Snapshots for 3 Days**: Ensures quick restoration from recent snapshots, meeting the 1-day RPO by providing point-in-time recovery.  
- **Standard Backups at 7 PM Daily**: Protects against data loss from accidental deletion, corruption, or attacks, ensuring recent data recovery.  
- **Daily Backup Points for 45 Days**: Provides a historical view of data changes, extending the recovery window and aligning with the 36-hour RTO.  

These configurations meet the business requirements for backup and recovery, ensuring data integrity and availability.

---

### Task F: Shared Responsibility Model and Risk Mitigation in Azure IaaS

#### Task F: Division of Security Responsibilities

In the Azure IaaS shared responsibility model:  
**Azure (Cloud Service Provider)**:  
- **Physical Host**: Secures physical hosts, including hardware security and isolation.  
- **Physical Network**: Manages network infrastructure security, including segmentation and monitoring.  
- **Physical Data Center**: Ensures data center security with environmental controls, power, cooling, and surveillance.  

**SWBTL LLC (Customer)**:  
- **Information and Data**: Implements encryption for data-at-rest and data-in-transit per regulatory requirements.  
- **Devices (Mobile and PC)**: Secures end-user devices with encryption, antivirus, and security policies.  
- **Accounts and Identity**: Manages user access and permissions via Azure Active Directory.  
- **Identity and Directory Infrastructure**: Configures directory synchronization and domain services.  
- **Operating System Security**: Handles OS security, including patching and hardening.  
- **Application Security**: Secures applications with code-level security and vulnerability management.  
- **Network Control**: Configures virtual networks, firewalls, segmentation, and traffic monitoring.

#### Task F1: Identified Security Risks

- **Data Security Risk**: Despite Azure’s infrastructure security, inadequate data protection (e.g., lack of encryption) could lead to breaches, causing reputational damage, financial losses, and regulatory fines.  
- **Identity and Access Management (IAM) Risk**: Weak IAM practices may result in unauthorized access, leading to data breaches, operational disruptions, and penalties.  
- **Network Security Risk**: Misconfigurations or inadequate measures may expose resources to cyber threats like unauthorized access or malware.  
- **Backup and Disaster Recovery Risk**: Poor backup and recovery planning may result in data loss or downtime, impacting operations and compliance.

#### Task F2: Risk Mitigation Strategies

- **Continuous Security Monitoring and Threat Detection**: Deploy tools like IDS, SIEM, and log analysis for real-time threat detection and response.  
- **Regular Security Assessments and Compliance Audits**: Conduct assessments to identify gaps and ensure compliance with FISMA, PCI DSS, and other standards.  
- **Comprehensive Data Loss Prevention (DLP) Policy**: Establish a DLP policy to classify and protect sensitive data, mitigating breach risks and ensuring compliance.

---

### Task G: Emerging Threats and Mitigation

- **Insider Threats**: Malicious or negligent employees may misuse access privileges. **Mitigation**: Conduct background checks, provide security awareness training, and enforce strict access controls.  
- **Denial of Service (DoS) Attacks**: Overwhelm cloud services, causing downtime and financial losses. **Mitigation**: Deploy rate limiting, traffic filtering, and network segmentation to reduce impact.  
- **Data Breaches**: Unauthorized access to sensitive data like customer records or financial information. **Mitigation**: Implement encryption, access controls, and monitoring to protect data.

---

### Key Takeaways

- **Azure Migration**: Transitioning to Azure IaaS addresses SWBTL LLC’s scalability and compliance needs but introduces new security responsibilities.  
- **Regulatory Compliance**: Configurations ensure adherence to FISMA, PCI DSS, and NIST SP 800-53 through encryption, access controls, and backups.  
- **Principle of Least Privilege**: RBAC and Key Vault access policies limit user permissions, reducing the risk of unauthorized access.  
- **Backup and Recovery**: The SWBTL backup policy meets RPO and RTO objectives, ensuring data availability and integrity.  
- **Risk Management**: Proactive monitoring, audits, and DLP policies mitigate risks in the shared responsibility model.

---



















