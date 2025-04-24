# Proof of Concept: Username Enumeration and Credential Brute-Forcing Using Burp Suite

### Overview

Username enumeration occurs when an attacker can observe changes in a website's behavior, such as status codes, error messages, or response times, to determine whether a given username is valid. This Proof of Concept (PoC) demonstrates how username enumeration and password brute-forcing were performed on a target login form using Burp Suite’s Intruder tool. The objective was to identify a valid username and password combination, exploiting differences in the website’s responses to invalid and valid inputs. This project highlights my skills in web application security testing, vulnerability exploitation, and penetration testing techniques.

---

### Key Focus Areas

To identify valid usernames and passwords, the following aspects of the website’s behavior were analyzed:  
- **Status Codes**: Variations in HTTP status codes (e.g., 302 for successful login) indicate successful actions.  
- **Error Messages**: Differences in error messages (e.g., "username incorrect" vs "incorrect password") reveal valid usernames.  
- **Response Time**: Delays in responses can sometimes indicate valid credentials, though not a primary factor in this PoC.

---

### PoC: Brute-Forcing Username and Password

#### Step 1: Brute-Forcing the Username

**Objective**: Identify a valid username by enumerating possible usernames and analyzing the website’s responses.  
**Methodology**:  
- An invalid credential was submitted on the target login form to capture the HTTP request packet.  
- The request was sent to Burp Suite’s Intruder tool for brute-forcing.  
- Using the **Sniper attack type**, the username field was set as the payload position.  
- A wordlist (provided by the lab environment) was loaded into the payload options.  
- The attack was initiated, and responses were analyzed for differences in error messages:  
  - Responses with invalid usernames returned the error: **"username incorrect"**.  
  - The response with the correct username returned: **"incorrect password"**, indicating a valid username.  

**Screenshots**:  
- **Burp Suite Intruder Setup for Username Brute-Forcing**:  
  ![Burp Suite Intruder Setup](https://github.com/user-attachments/assets/6c3e47b1-42aa-4744-a5e0-4201183186ee)  
- **Response for Incorrect Username ("username incorrect")**:  
  ![Incorrect Username Response](https://github.com/user-attachments/assets/3f064a4d-4ad9-4372-af48-93d4563bf6de)  
- **Response for Valid Username ("incorrect password")**:  
  ![Valid Username Response](https://github.com/user-attachments/assets/82032f95-6264-4299-ae00-65e18f2064a0)

#### Step 2: Brute-Forcing the Password

**Objective**: Use the identified valid username to brute-force the password and gain access.  
**Methodology**:  
- With the valid username identified, the brute-forcing process was repeated using Burp Suite Intruder.  
- The password field was set as the payload position.  
- A password wordlist (provided by the lab environment) was loaded into the payload options.  
- The Sniper attack was initiated, and responses were analyzed:  
  - The correct password was identified when the response returned a **302 status code**, indicating a successful login redirect.  

**Screenshots**:  
- **Burp Suite Intruder Setup for Password Brute-Forcing**:  
  ![Password Brute-Forcing Setup](https://github.com/user-attachments/assets/6fcf94f5-4cf8-4879-a3c7-a3cc6708c44c)  
- **Response with Correct Password (302 Status Code)**:  
  ![Correct Password Found](https://github.com/user-attachments/assets/a97fbc6c-800f-40b3-af9f-e19921bf7af4)

#### Step 3: Lab Completion

**Result**: Using the identified username and password, the login was successful, and the lab was solved.  
**Screenshot**:  
- **Lab Solved Confirmation**:  
  ![Lab Solved](https://github.com/user-attachments/assets/e670ae06-eae8-48df-b7c5-19c77f966891)

---

### Key Takeaways

- **Username Enumeration**: Differences in error messages ("username incorrect" vs "incorrect password") allowed the identification of valid usernames, highlighting a common web application vulnerability.  
- **Brute-Forcing with Burp Suite**: The Sniper attack type in Burp Intruder effectively enumerated usernames and passwords by analyzing response variations, such as status codes (302 for success).  
- **Mitigation Strategies**: To prevent such attacks, websites should:  
  - Use uniform error messages (e.g., "Invalid credentials") for both incorrect usernames and passwords.  
  - Implement rate-limiting and CAPTCHAs to deter automated brute-force attacks.  
  - Enforce strong password policies and multi-factor authentication (MFA).

---

