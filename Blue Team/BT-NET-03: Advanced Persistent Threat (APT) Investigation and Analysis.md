Brief: As a senior security analyst at Secure-corp, you've been tasked with investigating a sophisticated Advanced Persistent Threat (APT) campaign targeting your organization's critical infrastructure. The security monitoring system has detected an extended, multi-phase attack campaign demonstrating advanced evasion techniques, enterprise service enumeration, covert channel attempts, and lateral movement patterns

GOal: Identify the DNS service port that received the most blocked connection attempts during the APT campaign.



Below are the activities carried out

1. Comprehensive APT pattern recognition in UFW logs

The logs were filtered to bring out UFW based logs only.
These logs contain detailed records of blocked network connections that are crucial for APT investigations, 
- including source IP addresses
- destination ports
- protocols
- connection attempts
- packet characteristics.
APT groups typically generate distinctive patterns in firewall logs due to their systematic and persistent approach to network reconnaissance.s

<img width="1910" height="759" alt="image" src="https://github.com/user-attachments/assets/0f78314d-accf-465d-aeee-b9e85af984ac" />

Filtering uaing the message field, coulple of port numers were discovered, and the messag also contained the word "UFW Block" to sho thatt the UFW blocked the request
<img width="1910" height="759" alt="image" src="https://github.com/user-attachments/assets/dc21ba0a-57e7-4a6b-9c27-e93d30d09cd5" />

<img width="1910" height="759" alt="image" src="https://github.com/user-attachments/assets/4d674232-9363-4e50-a3fd-135b7ae6554b" />


Then i had to add the SRC and DPT filds that were found in thee message, to ensure that all pacekts i am seeing are only in that format
<img width="1910" height="759" alt="image" src="https://github.com/user-attachments/assets/5254c74a-cb03-4741-9f07-280bf2fd8902" />


Enterprise service enumeration detection
Advanced evasion technique identification
Persistent threat behavior analysis
Backdoor and covert channel detection
Lateral movement pattern recognition
Long-term campaign correlation
