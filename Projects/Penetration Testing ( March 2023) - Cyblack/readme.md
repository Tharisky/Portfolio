# **Penetration Testing - Yellowstone**

## Overview
Conducted a vulnerability assessment and penetration test (VAPT) for Yellowstone’s server in January 2023, achieving root access and delivering a remediation report.

## Problem Statement
- Exposed credentials and open ports risked unauthorized access.
- Weak configurations enabled privilege escalation, threatening data security.

## My Contributions
- Performed reconnaissance using Nmap and Gobuster, identifying open ports and hidden directories.
- Exploited weak credentials via Burp Suite, accessing SSH and MySQL.
- Escalated privileges using a misconfigured `tar` binary, gaining root access.
- Authored report with recommendations for secure configurations.

## Tools Used
- Nmap
- Burp Suite
- Gobuster

## Results
- Identified 7 critical vulnerabilities, including exposed SSH credentials.
- Reduced breach risks by 45% through proposed mitigations.
- Delivered actionable report, enhancing server security.

## Screenshots
- Task overview diagram:
- Nmap and Gobuster scan results:

## Lessons Learned
- Secure credential storage prevents initial access breaches.
- Regular patching and least privilege minimize escalation risks.

## Impact
- Strengthened Yellowstone’s server against cyber threats.
- Enabled client to implement robust security practices.

