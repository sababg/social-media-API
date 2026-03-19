# Connecting a Database

## Reflections

1: Reduce who can attempt to reach your database. It’s a “network perimeter” control that complements (not replaces) authentication. It reduces the attack surface. By allowing connections from anywhere : 
Attackers can repeatedly try usernames/passwords or test leaked credentials at scale. Attackers can cause downtime.

2: It loads environment variables from a local .env file into process.env at runtime. We typically don’t ship a .env file with secrets, so with the help of CI/CD-injected 
variables, we can manage environment variables in a production environment.

3: First, I will log  environment variables, and I will check the connection string. 


##

👤 Author
Saba Beigi
🌎 Charlotte, NC
💼 GitHub @sababg
📧 beigisaba@gmail.com

Feel free to reach out with questions, feedback, or ideas!
