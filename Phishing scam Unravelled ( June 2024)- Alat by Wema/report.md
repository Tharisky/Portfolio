# Project: Investigation of an "ALAT" Phishing Campaign

#### Overview
During a collaborative session with a student, I identified and investigated a sophisticated phishing campaign impersonating ALAT, a legitimate digital banking platform by Wema Bank. The campaign began with a suspicious SMS that prompted users to verify their accounts via a malicious link. This project documents the analysis of the phishing infrastructure, the techniques used by the attackers, and the vulnerabilities exploited, showcasing my skills in cybersecurity investigation, social engineering awareness, and threat analysis.

#### Objective
- Investigate the legitimacy of a suspicious SMS claiming to be from ALAT.
- Analyze the phishing infrastructure to understand its mechanics and impact.
- Document findings to raise awareness about social engineering attacks and improve defensive strategies.

#### Tools and Techniques Used
- **VirusTotal**: For initial URL analysis.
- **Web Enumeration**: To explore the phishing domain and subdomains.
- **Source Code Analysis**: To identify hardcoded credentials and understand the phishing workflow.
- **Browser Developer Tools**: To inspect page behavior and network activity.
- **Social Engineering Analysis**: To map the attacker's manipulation tactics.

#### Investigation Process

1. **Initial Discovery**  
   A student purportedly received an SMS from ALAT stating: *"A new email was added to your profile. If this wasn't you, log-in to remove it. [Malicious Link]."*
   - The SMS appeared legitimate at first glance, using ALAT branding and a shortened URL (`tinyurl.com`).
   - I advised the student to analyze the URL using VirusTotal, which flagged it as potentially malicious.

2. **Phishing Page Analysis**  
   Clicking the link led to a user verification page mimicking ALAT's branding (see screenshot below). The page prompted users to select their bank (Wema Bank) and enter their account number for "verification."  
   - **Red Flags**:
     - The domain (`alat.webngserver.online`) was not affiliated with ALAT's official website (`alat.ng`).
     - The page included a hardcoded helpdesk email (`helpdesk@alat.ng`) and phone number (`0700 2255 2528`), likely to build trust.
     - A cheerful "WE ARE HERE!" message with waving hands and an "Online" badge further mimicked legitimate customer service interfaces.

   *Screenshot of the phishing page:*  
   ![Phishing Page](link-to-screenshot-1.jpg)  
   *Screenshot of the SMS:*  
   ![SMS](link-to-screenshot-2.jpg)

3. **Domain and Subdomain Enumeration**  
   I explored the domain (`webngserver.online`) and its subdomains to understand the infrastructure.  
   - The root domain contained only folders, an unusual setup for a legitimate service and a major red flag.
   - The `alat` subdomain hosted the phishing pages, including:
     - A user verification page.
     - A login page requesting email and password.
     - Additional pages to collect sensitive data like PIN, NIN (National Identification Number), and OTP (One-Time Password).

4. **Database and Control Center Exposure**  
   Through enumeration, I discovered an unprotected database (DB) and control center with over 1,200 entries, including test and real victim data (email addresses, passwords, PINs, and OTPs).  
   - **Critical Findings**:
     - The DB lacked any authentication or authorization mechanisms, a severe security oversight by the attacker.
     - The control center allowed the attacker to dynamically redirect victims to different pages (e.g., PIN, NIN, or OTP input) after login.
     - An email functionality enabled the attacker to send further phishing emails, impersonating other brands like Kuda Bank.
     - The developer’s personal details (name, email, phone number) were exposed in the DB, likely due to sloppy coding practices.

   *Screenshot of the control center dashboard:*  
   ![Control Center](link-to-screenshot-4.jpg)

5. **Phishing Workflow**  
   The attack followed a multi-step process to harvest sensitive information:
   - **Step 1**: Victim clicks the SMS link and submits their account number.
   - **Step 2**: Victim is redirected to a login page to enter their email and password.
   - **Step 3**: The page stalls, waiting for the attacker to decide the next action via the control center.
   - **Step 4**: Depending on the attacker’s input, the victim is prompted to enter their PIN, NIN, or OTP.
   - **Step 5**: All data is logged in the DB, and the OTP can be used for unauthorized transactions.

   *Screenshot of the PIN entry page:*  
   ![PIN Page](link-to-screenshot-7.jpg)

6. **Additional Features of the Phishing Site**  
   - The site logged victim activities, likely for further exploitation.
   - The attacker could send follow-up phishing emails, impersonating other financial institutions to widen the campaign’s reach.

#### Key Findings
- The phishing campaign successfully mimicked ALAT’s branding to deceive users, leveraging social engineering tactics like urgency ("log-in to remove it") and trust-building elements (helpdesk contact, cheerful graphics).
- The infrastructure was poorly secured, exposing the attacker’s details and victim data due to a lack of authentication on the control center.
- Over 1,200 victims’ sensitive information was compromised, highlighting the scale and impact of the attack.
- The use of OTP harvesting posed a direct risk of financial fraud, as OTPs could be used for immediate unauthorized transactions.

#### Lessons Learned
- **Social Engineering Awareness**: Phishing attacks often exploit trust and urgency. Educating users to verify URLs and avoid clicking unsolicited links is critical.
- **Importance of Secure Development**: Even malicious actors can make security mistakes. Proper authentication and authorization mechanisms are essential, even for illicit systems.
- **Proactive Threat Hunting**: Enumerating subdomains and analyzing source code can reveal critical insights into phishing operations, aiding in takedown efforts.
- **Collaboration and Reporting**: Working with students and sharing findings responsibly can amplify the impact of cybersecurity education and awareness.

#### Impact
- Raised awareness about phishing risks among my network by sharing the findings.
- Demonstrated the importance of verifying domain legitimacy before interacting with online services.
- Highlighted the need for financial institutions to educate customers about recognizing and reporting phishing attempts.

#### Future Steps
- Report the phishing domain to relevant authorities and ALAT’s security team for takedown.
- Develop a guide for users on identifying and avoiding phishing attacks, incorporating this case study.
- Expand this investigation into a broader analysis of phishing trends targeting financial institutions.

---

### Notes for Your GitHub Portfolio
- **Screenshots**: Replace the placeholder links (`link-to-screenshot-X.jpg`) with actual links to the images in your GitHub repository. You can upload the images to a folder (e.g., `images/`) in your repo and link them using relative paths like `![Phishing Page](images/phishing-page.jpg)`.
- **Formatting**: Use Markdown to format this entry in your GitHub README or a dedicated project page. GitHub supports Markdown, so headings, bullet points, and image embedding will render nicely.
- **Professional Tone**: The rewritten content avoids casual language (e.g., "shitty jobs") and focuses on technical details and lessons learned, which aligns with a professional portfolio.
- **Skills Highlighted**: This entry showcases your expertise in phishing analysis, social engineering, web enumeration, and threat investigation, making it a strong addition to your portfolio.

Let me know if you’d like to adjust the tone further or add more technical details!
