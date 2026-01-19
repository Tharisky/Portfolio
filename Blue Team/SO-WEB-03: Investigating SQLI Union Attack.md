Brief: This challenge demonstrates an investigation into a classic web exploitation technique known as SQL Injection (SQLi)—specifically UNION-based SQL Injection, which allows attackers to combine malicious SQL queries with legitimate ones using the UNION operator.

Goal : Investigate and identify the table name targeted by adversaries for data extraction using UNION-based SQL injection


I started with filtering for event dataset, and i got 23 events
<img width="1919" height="540" alt="image" src="https://github.com/user-attachments/assets/47971dc6-a279-4622-a57d-b8d8577918ff" />


Then checking the information contained in each  event, The event.original brougt up a get request that contains the UNION SELECT query
<img width="881" height="471" alt="image" src="https://github.com/user-attachments/assets/1f971d6e-ddfc-4cae-b936-f57a84faa563" />


The query contained "http://securecorp.org/database/?value=alice_wonder%27%20union%20select%20concat(username,%22|%22,password,%22|%22,email),2,3%20from%20login%20" which indicates that the Login table is being queried foor usernames,password and email


Then, i added a new filter to ensure that all logs with the AQL injection patterns are returned "event.dataset: apache.access and url.query: "UNION" or "SELECT" or "INTO" or "AND" or "OR"
" 

<img width="1910" height="759" alt="image" src="https://github.com/user-attachments/assets/5eb656d1-bb17-4e6b-b6b2-02042cc148cd" />


