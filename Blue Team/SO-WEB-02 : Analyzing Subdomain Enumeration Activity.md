Brief: The Secure-Corp Security Operations Center (SOC) detected unusual patterns of activity against the organization's public-facing web infrastructure, Initial alerts were triggered by a sudden surge in HTTP 404 errors and unusual User-Agent strings in the Apache web server logs.

Goal: Identify and determine the event count which get to be associated with status code 404


The lab stated with  accessing the discover option of elastic, and adding "event.dataset" to the selected fieelds 
<img width="1914" height="554" alt="image" src="https://github.com/user-attachments/assets/d64ad86a-4592-4079-850b-c954e28b854d" />
    

this brought out a lot of apache2 logs

<img width="1914" height="554" alt="image" src="https://github.com/user-attachments/assets/3dc95d0f-bcf4-4c65-b0c7-78c82bef8fe5" />




checking out the event details, some of the event outcome had success, while others had failure, and there is a WFuzz keyword at the back
<img width="1550" height="884" alt="image" src="https://github.com/user-attachments/assets/be824652-b8fc-41c4-9316-9b9e57160694" />



Then i modified my filter to "event.dataset: apache.access and event.outcome: success"  to see the events that contains valid directories
The info includes HTTP 200 response code

<img width="1547" height="493" alt="image" src="https://github.com/user-attachments/assets/d922f6c4-f29c-4559-bbb8-a6f509073aa1" />


Then i modified my fiter to "event.dataset: apache.access and event.outcome: failure" to see the event that failed

The info includes HTTP 400, and other response code 

<img width="1581" height="462" alt="image" src="https://github.com/user-attachments/assets/f93d3cce-325a-4e29-b921-9d55d41af2c1" />


Then i had to  steamline the filter to "event.dataset: apache.access and event.outcome: failure and http.response.status_code: 404"

<img width="1913" height="540" alt="image" src="https://github.com/user-attachments/assets/ca43272d-705f-4c79-84ba-67e646bb5528" />


After seeing over 272 events that started  at Apr 28, 2025 @ 07:31:23.362 and ended at Apr 28, 2025 @ 07:32:00.000, i had to streamline the search again using the details of the user "event.dataset: apache.access and event.outcome: failure and http.response.status_code: 404  and event.original: ("Wfuzz/3.1.0" or “massdns” or “nikto” or “dirb”)". this was don to Correlate User-Agent Data with Accessed URL/URI Paths
<img width="1913" height="540" alt="image" src="https://github.com/user-attachments/assets/f1f2c532-2a12-4ea3-a405-c6983fda42e1" />


This gave me the final count as 272
<img width="631" height="434" alt="image" src="https://github.com/user-attachments/assets/8af70f76-9a5f-4803-84ff-541f458baf9f" />





