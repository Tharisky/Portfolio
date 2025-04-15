

# Project: Comprehensive Analysis of an "ALAT" Phishing Campaign

#### Project Overview
In June 2024, I conducted an in-depth investigation into a phishing campaign impersonating ALAT, a digital banking platform by Wema Bank. The campaign was initiated through a suspicious SMS sent to one of my students, prompting users to verify their accounts via a malicious link. This project documents the entire investigation process—from identifying the phishing attempt to uncovering the attacker's infrastructure, workflow, and vulnerabilities. The analysis highlights my expertise in cybersecurity investigation, phishing detection, social engineering analysis, and threat intelligence gathering.

An X post was created to raise the awareness: https://x.com/thariskyjohn/status/1805315517902627005

#### Objective
- Validate the legitimacy of an SMS claiming to be from ALAT.
- Dissect the phishing infrastructure to understand its design, functionality, and impact.
- Document the findings to raise awareness about social engineering tactics and provide actionable insights for preventing similar attacks.

#### Tools and Techniques Utilized
- **VirusTotal**: For initial URL scanning and reputation analysis.
- **Web Enumeration**: To explore the domain, subdomains, and associated directories.
- **Source Code Analysis**: To extract hardcoded credentials and understand page functionality.
- **Browser Developer Tools**: To inspect network activity and page behavior.
- **Social Engineering Analysis**: To evaluate the psychological manipulation tactics used by the attacker.
- **Network Traffic Analysis**: To monitor how the phishing site interacted with the backend.

#### Investigation Process

1. **Initial Discovery and SMS Analysis**  
   On June 24, 2024, a student reported receiving an SMS that appeared to be from ALAT, a legitimate digital banking service. The message read: *"New email was added to your profile. If this wasn't you, log in to remove it: https://tinyurl.com/mtsy44fj."*  
   - The SMS used ALAT branding and a shortened URL (`tinyurl.com`), a common tactic to obscure the destination domain.
   - I instructed the student to analyze the URL using VirusTotal, a tool for checking URL reputations. The scan flagged the link as potentially malicious, prompting a deeper investigation.

   *Screenshot of the SMS:*
   
   ![image](https://github.com/user-attachments/assets/58edd92c-59b6-4ce0-b5ac-137af8cb8f34)

3. **Phishing Page Examination**  
   Following the link redirected to a user verification page that mimicked ALAT’s official branding (see screenshot below). The page featured:
   - A dropdown menu to select "Wema Bank" and a field to enter an account number for "verification."
   - A helpdesk email (`helpdesk@alat.ng`) and phone number (`0700 2255 2528`), likely copied from the legitimate ALAT website to build trust.
   - A cheerful "WE ARE HERE!" message with waving hands and an "Online" badge, designed to mimic customer support interfaces and reduce suspicion.

   *Screenshot of the phishing verification page:*
   ![image](https://github.com/user-attachments/assets/41cc59b3-b8f7-4167-b325-4f975bcf283e)

   
   - **Red Flags Identified**:
     - The domain (`alat.webngserver.online`) was not affiliated with ALAT’s official domain (`alat.ng`), a clear sign of impersonation.
     - The page design, while polished, contained subtle inconsistencies in branding and layout compared to the legitimate ALAT website.

5. **Domain and Subdomain Enumeration**  
   To understand the phishing infrastructure, I analyzed the root domain (`webngserver.online`) and its subdomains.  
   - The root domain hosted a directory listing with folders like `cgi-bin`, dated between 2024-06-07 and 2024-06-11, which is highly unusual for a legitimate banking service. This lack of a proper landing page was a significant red flag.  
   - The `alat` subdomain (`alat.webngserver.online`) hosted the phishing pages, including:
     - A user verification page (as seen above).
     - A login page requesting email and password.
     - Additional pages to collect sensitive data such as PIN, NIN (National Identification Number), and OTP (One-Time Password).

   *Screenshot of the root domain directory listing:*
   ![image](https://github.com/user-attachments/assets/d3cc5c3f-9d97-4a36-84e7-2debbf6e2d9e)


7. **Enumeration and Discovery of Backend Infrastructure**  
   Through further enumeration of the `alat` subdomain, I uncovered critical components of the phishing operation:
   - A page designed to display a "hacked" message, likely used to scare victims into compliance.
![image](https://github.com/user-attachments/assets/6f2fb222-967a-4410-9261-bdb282bca8a4)

     
   - A database (DB) and control center that logged victim data and controlled the phishing workflow.
     ![image](https://github.com/user-attachments/assets/b71d5901-d0e0-4134-95c2-7258e7764e48)

   - The DB contained over 1,200 entries, including both test and real accounts, with sensitive information such as email addresses, passwords, PINs, and OTPs.


8. **Analysis of the Control Center and Database**  
   The control center and DB were shockingly unsecured, lacking any form of authentication or authorization—a major oversight by the attacker.  
   - **Control Center Features**:
     - Displayed metrics such as "2083 Users," "477219 Awarded Bonus," "2900 Purchased," and "₦600000 Total Income," likely fabricated to give the appearance of a legitimate operation.
       ![image](https://github.com/user-attachments/assets/bcbb3f26-5809-46a8-b769-11512cfe2401)


     - Allowed the attacker to dynamically redirect victims to different pages (e.g., PIN, NIN, or OTP input) after they submitted their login credentials.
     - Included an email functionality to send further phishing emails, impersonating other brands like Kuda Bank.

            The Picture below shows the  Mail sent using the website's email functionality
      ![image](https://github.com/user-attachments/assets/3a0900ae-f62d-4380-befb-2332f87b41e4)


            The picture below shows that the mail was ,received and it appeared to come from KUDA
   
    ![image](https://github.com/user-attachments/assets/3acedc8e-875a-453a-983c-65505a18a498)

       
   - **Database Exposure**:
     - Contained over 1,200 victim entries, exposing their email addresses, passwords, PINs, and OTPs.
     - Included the developer’s personal details, such as their full name, email (`gbemilekeji@gmail.com`), phone number (`09056381534`), and other profile information, likely due to sloppy coding practices.

   *Screenshot of the control center dashboard:*  
   ![Control Center Dashboard](images/control-center-dashboard.jpg)

   *Screenshot of the developer’s exposed details:*  
![image](https://github.com/user-attachments/assets/f4e52f49-073e-4fd2-b4be-65eab74d4c2a)

10. **Phishing Workflow Dissection**  
   The phishing campaign followed a multi-step process to harvest sensitive information from victims:
   - **Step 1: Account Number Submission**  
     The victim clicks the SMS link and lands on the user verification page, where they select their bank (Wema Bank) and enter their account number.
   - **Step 2: Login Page**  
     After submission, the victim is redirected to a login page requesting their email and password. I avoided submitting my own credentials and instead found hardcoded credentials in the page’s source code, which I used to proceed (though these credentials were inconsistent and sometimes failed).  
     *Screenshot of the login page:*  
     ![Login Page](images/login-page.jpg)
   - **Step 3: Dynamic Redirection**  
     Upon submitting the login details, the page stalls, waiting for the attacker to decide the next action via the control center. The attacker could choose to redirect the victim to one of several pages:
       - **PIN Page**: Requests the victim’s bank PIN.  
         *Screenshot of the PIN page:*  
         ![PIN Page](images/pin-page.jpg)
       - **NIN Page**: Requests the victim’s National Identification Number.
       - **OTP Page**: Requests the victim’s One-Time Password.
   - **Step 4: Data Logging**  
     All submitted data (email, password, PIN, NIN, OTP) is logged in the unsecured database.
     ![image](https://github.com/user-attachments/assets/40dce962-c5a8-4dec-ac04-fea6d2f75a1b)

   - **Step 5: Potential Exploitation**  
     The OTP, in particular, could be used immediately to perform unauthorized transactions on the victim’s account.

11. **Additional Features of the Phishing Infrastructure**  
   - **Victim Activity Logging**: The site included a page to log the victim’s activities, likely for further exploitation or analysis by the attacker.
   - **Email Functionality**: The control center allowed the attacker to send follow-up phishing emails, impersonating other financial institutions like Kuda Bank, to widen the campaign’s reach. For example, an email might instruct the victim to perform additional actions, further compromising their security.

#### Key Findings
- **Sophisticated Social Engineering**: The phishing campaign leveraged psychological manipulation tactics, such as urgency ("log-in to remove it") and trust-building elements (helpdesk email, phone number, cheerful graphics), to deceive users into submitting sensitive information.
- **Poor Security Practices by the Attacker**: The lack of authentication on the control center and database exposed both victim data and the attacker’s personal details, highlighting the importance of secure development practices—even for malicious actors.
- **Scale of the Attack**: Over 1,200 victim entries were logged, indicating a significant impact. The inclusion of OTP harvesting posed an immediate risk of financial fraud, as OTPs could be used for unauthorized transactions.
- **Dynamic Redirection Mechanism**: The control center’s ability to dynamically redirect victims to different pages demonstrated a level of sophistication in the phishing workflow, allowing the attacker to adapt their approach based on the victim’s actions.

#### Lessons Learned
- **Social Engineering Awareness**: Phishing attacks often exploit human trust and urgency. Users must be educated to verify URLs and avoid interacting with unsolicited links, especially those received via SMS (a tactic known as "smishing").
- **Secure Development Practices**: Even malicious systems require proper security measures. The attacker’s failure to implement authentication or authorization mechanisms led to the exposure of their own details and victim data.
- **Proactive Threat Hunting**: Techniques like web enumeration and source code analysis are powerful tools for uncovering phishing infrastructure and understanding attacker behavior.
- **Collaboration and Education**: Sharing findings with students and the broader community can amplify the impact of cybersecurity education and help prevent future attacks.

#### Impact
- Raised awareness about phishing risks by sharing the investigation findings with my network on X.
- Highlighted the importance of domain verification before interacting with online services, especially those requesting sensitive information.
- Demonstrated the need for financial institutions to educate customers on recognizing and reporting phishing attempts, particularly those using smishing tactics.

#### Future Steps
- **Report the Incident**: Submit a detailed report to ALAT’s security team and relevant authorities (e.g., domain registrars, CERTs) to facilitate the takedown of the phishing domain.
- **Develop Educational Resources**: Create a guide for users on identifying and avoiding phishing attacks, using this case study as a practical example.
- **Expand Research**: Conduct a broader analysis of phishing campaigns targeting financial institutions in the region to identify trends and common tactics.
- **Enhance Detection Mechanisms**: Explore the use of machine learning models (as referenced in related research) to improve early detection of phishing kits, especially those using novel evasion techniques.

#### References and Additional Context
- Research on phishing detection (e.g., *Automatically Determining Phishing Campaigns Using the USCAP Methodology*, 2010) emphasizes the importance of clustering phishing attacks by provenance to profile attackers and improve detection mechanisms.
- Social engineering and phishing are closely related, as noted in resources like Check Point Software’s article on *Social Engineering vs Phishing* (2023). This case study exemplifies how attackers use deceptive messaging platforms (e.g., SMS) to manipulate users into performing actions that compromise their security.

---

### Notes for Your GitHub Portfolio
- **Screenshots**: Replace the placeholder image links (e.g., `images/sms-screenshot.jpg`) with actual links to the screenshots in your GitHub repository. You can upload the images to a folder named `images/` in your repo and reference them using relative paths (e.g., `![SMS Screenshot](images/sms-screenshot.jpg)`).
- **Markdown Formatting**: This content is written in Markdown, which GitHub supports natively. Use it in your repository’s README or a dedicated project page to ensure proper rendering of headings, bullet points, and images.
- **Professional Presentation**: The rewritten content adopts a formal tone, avoids casual language (e.g., "shitty jobs"), and focuses on technical details, making it suitable for a professional audience.
- **Skills Highlighted**: This project showcases your expertise in:
  - Phishing detection and analysis.
  - Social engineering and smishing awareness.
  - Web enumeration and source code analysis.
  - Threat intelligence and investigation.
  - Communication of technical findings to a broader audience.

Let me know if you’d like to further refine this or add more technical details, such as specific enumeration commands or code snippets from your analysis!

