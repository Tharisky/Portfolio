# Task A

The security assessment report for Fielder Medical Center identifies several critical gaps in the company's security framework:

1. Lack of Security Controls and Policies: The absence of comprehensive security controls and policies, including those related to access control, account management, least privilege, and security attributes.

2. Outdated Systems Design: The systems design is outdated, necessitating immediate attention to bridge the gaps between the existing systems security plan (SSP) and current compliance requirements.

3. Need for Updated Security and Privacy Plans: The security and privacy plans require updating to align with organizational needs and compliance requirements. This involves:

a). Developing an information security program plan that adheres to compliance standards and addresses organizational needs.

b). Updating the system inventory/asset list to reflect the organization's current systems.

c). Conducting a risk assessment after updating the SSP to incorporate new controls within the network and information systems.
____

4. Absence of Multifactor Authentication (MFA): There is a lack of multifactor authentication, highlighting the need to implement MFA for identifying and authenticating organizational users accessing the network and information systems.



# Task B 1
For  the five identified controls within the SAR, the following are the associated risks:

1. Least Privilege:  Risk Rating: High

Least privilege is crucial for limiting access to sensitive data and systems. Without proper implementation,there's a high risk of unauthorized access, data breaches, and system compromises, which could have severe consequences for the organization's security and compliance.  (Alexander S. Gillis)

2. Plans of Action and Milestones (POA&M) : Risk Rating: Moderate

If POA&M is not adequately developed or followed, there's a moderate risk of delays in addressing security vulnerabilities or compliance gaps. However, if properly utilized, POA&M can help prioritize and track remediation efforts, reducing the overall risk to the organization.

3. Continuous Monitoring : Risk Rating: High

Continuous monitoring is essential for detecting and responding to security incidents in real-time. Without continuous monitoring, there's a high risk of undetected security breaches, prolonged exposure to threats, and delayed incident response. This could result in significant damage to the organization's assets and reputation.

4. Risk Assessment: Risk Rating: High

Risk assessment is fundamental for identifying, evaluating, and prioritizing risks to the organization's assets. Without regular risk assessments, there's a high risk of overlooking potential threats and vulnerabilities, leaving the organization exposed to security breaches and compliance violations. Therefore, the lack of risk assessment poses a high risk to the organization's overall security posture.




5. Risk Response: Risk Rating: High

Risk response involves implementing measures to mitigate, transfer, or accept identified risks. Without effective risk response strategies, there's a high risk of leaving vulnerabilities unaddressed, increasing the likelihood of security incidents and regulatory non-compliance. Therefore, the absence of proper risk response mechanisms poses a high risk to the organization's ability to manage and mitigate risks effectively.


# Task B2
1. Least privilege: Fielder Medical Center's decision to remediate the risk associated with the "Least Privilege" control rather than accepting it aligns with compliance regulations and industry guidelines, which emphasize the critical importance of implementing least privilege to protect sensitive data and systems. Compliance regulations, such as FISMA, emphasize the importance of implementing the least privilege to control access to sensitive information and systems. By limiting access to only authorized individuals who require access for their job duties, organizations can reduce the risk of unauthorized access and data breaches. Failure to comply with these regulations can result in severe penalties, including fines and legal consequences.

2. Plans of Action and Milestones: Fielder Medical Center's decision to remediate the risk associated with the "Plans of Action and Milestones (POA&M)" control instead of accepting it is to the end that the company will be able to effectively prioritize and track remediation efforts, reducing overall risk to the organization. This aligns with compliance regulations and industry best practices, such as NIST Special Publication 800-53, which  provides guidelines for developing and implementing POA&M to track remediation efforts for security vulnerabilities and compliance gaps. By following NIST guidelines, organizations can effectively prioritize and track remediation efforts, reducing overall risk to the organization


3. Continuous Monitoring: Fielder Medical Center's decision to remediate the risk associated with continuous monitoring instead of accepting it is stems from the fact that continuous monitoring will offers insight into vulnerabilities within FMC IT environment, and It will provide clarity regarding how these vulnerabilities correlate with business risk and identifies which ones are most susceptible to exploitation by attackers. Harrison (2024). Also, PCI DSS  mandates continuous monitoring to detect security incidents and vulnerabilities promptly. Failure to comply with these regulations could result in severe penalties and fines.

4. Risk Assessment: Fielder Medical Center's decision to remediate the risk associated with the lack of an updated risk assessment instead of accepting it is well-founded, as Continuous risk assessment is considered essential for maintaining an organization's security posture and adapting to evolving threats and vulnerabilities. This decision is also supported by the emphasis of the NIST Special Publication 800-30  on the importance of regular risk assessments as a foundational element of an organization's risk management framework. 

5. Risk response: Fielder Medical Center's decision to remediate the risk associated with the absence of proper risk response mechanisms is crucial for ensuring effective risk management, compliance, and overall security. More so, this decision is to the end that FMC will be compliant with the PCI DSS policy, which requires organizations to develop and maintain a formalized risk management program, which includes implementing risk response measures to address identified vulnerabilities and threats to cardholder data security





# Task C
To remediate the risks associated with least privilege, POA&M, continuous monitoring, risk assessment, and risk response across all connected systems in the FMC network, the following actions, assets, and changes are needed:

1. Least Privilege: The assets include workstations, end-point protection systems, and network infrastructure. The Actions and changes needed to remediate the risk associated with lack of least:

a)Implement proper antivirus (AV) protection on all workstations, ensuring licensed and active solutions are in place.

b)Enhance end-point protection measures to safeguard against malware and other threats.

c)Implement multifactor authentication (MFA) across the network to strengthen access controls.

d)Establish secure authentication processes for doctors accessing FMC's network and uploading personally identifiable information (PII) to protect against unauthorized access.

e)The firewall has reached the end of its life, and it should be replaced.
____

2.POA&M (Plans of Action and Milestones): The Actions for Remediation include:

a)Develop and maintain a comprehensive POA&M to document security weaknesses and compliance gaps identified during audits and assessments.

b)Prioritize remediation efforts based on risk assessments and compliance requirements.

c)Assign responsibilities and timelines for implementing remediation actions.

d)Regularly review and update the POA&M to track progress and ensure timely resolution of identified issues.
____

3. Continuous Monitoring: The assets needed for the remediation include Network monitoring tools, e.g, IDS, and security information and event management (SIEM) systems. The Actions for the remediation includes:
   
a)Implement continuous monitoring solutions to detect and respond to security incidents in real time.

b)Monitor network traffic, system logs, and user activities for signs of unauthorized access or malicious behavior.

c)Establish incident response procedures to address security incidents promptly.

d)Train staff responsible for monitoring and incident response procedures.
____

4. Risk Assessment: The Actions for the remediation include:

a)Conduct regular risk assessments to identify and prioritize security risks to the organization's assets and operations.

b)Implement controls and safeguards to address high-priority risks identified during risk assessments.

____
5. Risk Response: The Actions for the remediation include:
   
a) Develop risk response strategies to mitigate identified risks, including risk mitigation, risk transfer, risk avoidance, and risk acceptance.

b) Document risk assessment findings and develop risk treatment plans to address identified risks.

c) Monitor and review the effectiveness of risk response measures to ensure ongoing protection against identified risks.

By implementing these measures, FMC can effectively remediate the identified risks associated with least privilege, POA&M, continuous monitoring, risk assessment, and risk response, thereby strengthening its overall security posture and reducing the likelihood of security incidents and compliance breaches.

# Task D

__The three concerns identified in Section 3.2.4 of the SAR include:__
1. Use of a Firewall that has reached end of life: FMC needs to establish a secure and maintained network, particularly by implementing a new firewall. Firewalls are essential for protecting networks from unauthorized access and ensuring compliance with PCI DSS requirements.
2. Vendor-Supplied Defaults Regarding Passwords: The scenario mentions the need to remove vendor-supplied defaults regarding passwords and other security requirements. This suggests that default passwords may still be in use, which poses a significant security risk. PCI DSS mandates the removal of default passwords and the implementation of strong, unique passwords for all systems and devices.
3. Missing Anti-Virus (AV) Solution: The POS system at FMC's physical location lacks an anti-virus (AV) solution. Antivirus software is crucial for detecting and preventing malware infections, which can compromise payment card data. PCI DSS requires the implementation and regular updating of anti-virus software to protect against known threats.

__Based on the FRSECURE PCI DSS policy template,  below is a PCI DSS–compliant policy to address the three concerns identified in Section 3.2.4 of the SAR__
1. Firewall Configuration and Vendor Defaults Removal 

Role: IT Security Administrator

Responsibilities:

a) Regularly review and update firewall configurations to ensure security measures are in place.

b) Implement firewall rules to restrict unauthorized access to the POS system.

c) Document and maintain records of firewall configurations and changes.

d) Ensure that default passwords and other security settings provided by vendors are promptly changed to unique, strong credentials.

e) Conduct periodic vulnerability scans to identify and remediate any potential security gaps.


2. Anti-Virus (AV) Solution Implementation

Role: IT Security Administrator

Responsibilities:

a) Research, select, and deploy an industry-standard AV solution that is compatible with the POS system.

b) Configure the AV solution to perform regular scans of the POS system and promptly detect and remove any malware or viruses.

c) Ensure that the AV solution is regularly updated with the latest virus definitions and software patches.

d) Monitor the AV solution dashboard for alerts and take appropriate actions to mitigate identified threats.

____
3. Vendor-Supplied Defaults Regarding Passwords
Role: System Administrator
Responsibilities:

a) Identify and document all systems and devices utilizing vendor-supplied default passwords.

b) Promptly change default passwords to strong, unique credentials upon deployment or installation.

c) Regularly review and update password policies to ensure compliance with PCI DSS requirements.

d) Educate users on the importance of using strong passwords and enforce password complexity guidelines.

e) Monitor password usage and enforce password rotation policies where applicable.









# References
Alexander S. Gillis  .What is the principle of least privilege? | Definition from tech target.
https://www.techtarget.com/searchsecurity/definition/principle-of-least-privilege-POLP#:~:text=Time%2Dlimited%20privileges%20can%20also,data%20breaches%20and%20malicious%20actions.

Cybergeek. Plan of Action and Milestone(POA&M). 
https://security.cms.gov/learn/plan-action-and-milestones-poam

FRSecure. PCI policy template|FRSecure
https://frsecure.com/pci-policy-template/

Harrison, J. (2024). Why you need continuous network monitoring
https://www.intruder.io/blog/why-you-need-continuous-network-monitoring#:~:text=Continuous%20monitoring%20not%20only%20provides,to%20be%20targeted%20by%20attackers.

NIST Special Publication 800-53 Revision 5. (2024)
https://doi.org/10.6028/NIST.SP.800-53r5

NIST Special Publication 800-30 Revision 1. (2012)
https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf
