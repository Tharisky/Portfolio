TASK A
1. Description of the client’s goal,function, processes and practices.
In the given scenario, the client’s goal includes: 
a.Improving the quality of Care: The primary goal of the client to improve patient care within the rural community by implementing a modernized medical and patient records system. Mallender, J (2022)
b.Ensuring Data Security according to HIPAA compliance requirement : With the modernization, there's a focus on securing sensitive patient medical and financial data according to HIPAA compliance requirements.

The client’s function includes:
a.Medical Services: Western View Hospital provides a range of medical services to the community, including emergency care, routine check-ups, and specialized treatments.
b.Patient Record Management: Western View Hospital efficiently manages  patient records, medical history, and other healthcare-related data.

The client’s processes includes:
a.Patient Admission and Discharge: Implementing streamlined processes for patient admission and discharge to enhance the overall patient experience.
b.Medical Record Keeping: Ensuring accurate and secure recording of patient information, treatment plans, and medical history.

The client’s practices includes:
a.HIPAA Compliance:The client practices adherence to the regulations set forth by HIPAA to protect patient privacy and ensure the secure handling of healthcare data.
b.Continuous Improvement: The client Engages in practices that promote ongoing improvement in healthcare services, including adopting modern technologies for better patient care.




2.The Structure of the Penetration testing Plan 
The scope of the penetration testing engagement plan includes:
a.Penetration testing against security controls within the client’s information environment
b.Network-level, technical penetration testing against hosts in the internal networks
c.Network-level, technical penetration testing against internet-facing hosts
d.Social engineering phone phishing against CLIENT employees

The test type includes:
a.Internal network testing
b.External network testing
c.Social engineering

The approach
a.Collaboration with the client's IT staff

The techniques contained in the penetration testing engagement plan  can be grouped into three :
a.Reconnaissance: Here, Port scanning, vulnerability scanning, and other reconnaissance activities would be carried out
b.Exploitation: in this phase.  EternalBlue would be used  for potential root-level access to critical systems, While attacks would be launched  from Pruhart Tech’s network using Burp Suite and Nmap 4.2.
c.Social Engineering: Feign technical operations to request domain password under the pretext of technical support.








3. Potential misalignment between the penetration testing engagement plan and the company’s goals, objectives, functions, processes, and practices.

a.Risk to Critical Systems: The plan mentions the use of EternalBlue to gain root-level access to critical systems, including the McAfee security server. The use of such exploits should be approached with caution, as it may pose a risk to the stability of critical systems during the testing process. It's crucial to ensure that the testing activities do not disrupt essential hospital functions which could either be the management of patient record, or the provision of medical service
b.Data Privacy: Given the sensitivity of patient data, the engagement plan failed to  explicitly state measures to protect any data accessed during testing for the plan to be in alignment with the client’s HIPAA practice..




TASK B - Evaluation of the penetration testing plan.
1.Best practices and frameworks
The best practices for a penetration testing engagement  plan  designed to meet Western View Hospital’s requirement includes:
a.Defining Scope and objectives of the penetration testing plan: Defining the scope of the test may include  defining  the  systems, networks, and applications to be tested while defining the objectives may include establishing specific objectives based on the hospital's requirements, such as assessing the security of patient records, medical devices, and other critical systems. Breachlock, (2023)
b.Ensuring Compliance with regulations: Ensuring that the penetration testing plan aligns with relevant healthcare regulations and standards, such as the Health Insurance Portability and Accountability Act (HIPAA) for protecting patient information. 
c.Following a penetration testing methodology: The outcomes of a penetration test can significantly differ depending on the methodology that was chosen. Various testing methodologies and standards are available, including Penetration Testing Execution Standard (PTES), and Open-Source Security Testing Methodology Manual (OSSTMM). (Marcum. 2022)
d.Continuous Testing: Implementing regular and ongoing penetration testing to adapt to evolving threats and changes in the hospital's IT environment.
e.Collaboration with IT and security teams:  The penetration testing team and the hospital's internal IT should collaborate, share findings and work together on remediation efforts
f.Retest and Validation:  After remediation, it is important to conduct a retest to verify  that the identified vulnerabilities have been successfully addressed. This step is crucial to validate the effectiveness of the remediation actions taken and ensure that no new issues have arisen during the proces. Breachlock, (2023)
g.Communication and Documentation: Effective communication plays a crucial role, especially in penetration testing, hence, clear communication protocols should be set up among the client’s team, and the penetration testing team to facilitate a seamless process. Maintaining detailed documentation of the testing process, including methodologies, tools used, and findings. Breachlock, (2023)

The frameworks for a penetration testing engagement plan designed to meet Western View Hospital’s requirements may include:

a.HIPAA: Given that Western View Hospital deals with sensitive patient data, adherence to the Health Insurance Portability and Accountability Act (HIPAA) is crucial. A penetration testing plan should include considerations for testing against the HIPAA Security Rule requirements to ensure the protection of patient information.Chipeta, C(2023)
b.ISO/IEC 27001: The ISO/IEC 27001 standard provides a framework for information security management systems (ISMS). Adhering to this standard can help in developing a penetration testing plan that aligns with best practices for information security and ensures a holistic approach to securing the hospital's IT infrastructure.
c.NIST : This guide  was published by the National Institute of Standards and Technology (NIST), and it  provides detailed information on the technical aspects of security testing and assessment. It can serve as a valuable resource for the penetration testing team to ensure a systematic and thorough approach.Chipeta, C(2023)


2.Comparing  the penetration testing engagement plan to the best practices and frameworks identified in part B1.

a.Scope and objectives of the penetration testing : The Testing plan defined the scope of the test, and is in accordance with the best practices by specifying what to test. The testing plan records the following as the scope:
Network-level, technical penetration testing against hosts in the internal networks
Network-level, technical penetration testing against internet-facing hosts
Social engineering phone phishing against CLIENT employees
b.Testing Methodology: The testing method contained in the testing plan is the  Pruhart Tech's information security penetration testing methods, and it will be used in place of the standard and known methodologies  like  Penetration Testing Execution Standard (PTES), and Open-Source Security Testing Methodology Manual (OSSTMM)
c.Collaboration with IT and security teams: The penetration testing engagement plan includes conducting the test in coordination with the Western view hospital  information technology (IT) staff members to ensure safe, orderly, and complete testing within the approved scope. 
d.Frameworks: The penetration testing engagement plan referred only to HIPAA while other notable frameworks like ISO 27001,  and NIST are missing. 
e.Continuous testing: The Penetration testing engagement plan does not specify any form of continuity , which does not align with best practices.
f.Retest and Validation: The Penetration testing engagement does not include retesting and validating the the remediation.
g.Communication and Documentation: The mode of communication between the penetration testing team and the client’s IT team was not communicated in the Penetration testing plan. 








TASK C

1.Recommendations
a.The mode of communication between the client’s IT team, and Pruhart Tech’s  ISA should be included in the plan. Communication channels such as chat platforms, dedicated email groups, and project management tools should be considered. (Marcum. 2022)
b.The penetration testing plan should not be a one time process, it should be a continuous process, and as such, the mode of continuity should be specified in the testing plan (either bi annual, every quarter or after any major system upgrade or changes)

2.Solutions to problem 
a.Standard and recognized penetration testing methodology like  Penetration Testing Execution Standard (PTES) should be adopted in the penetration testing engagement plan.(Vumetric, n.d)
b.Conduct risk assessment: Before including any exploit in the engagement plan, the ISA team should conduct a comprehensive risk assessment for each exploit present in . Assess the potential impact on critical systems and categorize exploits based on their level of risk. Only include exploits with a low to moderate risk level in the final plan.


Mallender, J (2022).  What are Health System Goals? A Simple Guide
https://www.economicsbydesign.com/what-are-health-system-goals/
Chipeta, C(2023). Top 8 Healthcare Cybersecurity Regulations and Frameworks
https://www.upguard.com/blog/cybersecurity-regulations-and-frameworks-healthcare
7 best practices for penetration test planning (September 27, 2022). Marcum. 
https://www.marcumllp.com/insights/7-best-practices-for-penetration-test-planning
The 11-Step Pen Test Plan(July 19, 2023). Breachlock. 
https://www.breachlock.com/resources/blog/the-11-step-pen-test-plan/#:~:text=A%20meticulously%20crafted%20pen%20test,in%20safeguarding%20against%20security%20breaches.
Top 5 Penetration Testing Methodologies And Standards. Vumetric
https://www.vumetric.com/blog/top-penetration-testing-methodologies/#:~:text=5.-,PTES,as%20the%20threat%20modeling%20phases.




