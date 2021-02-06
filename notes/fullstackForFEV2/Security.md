# Security 

What could someone do if they gain ~~root~~ access to your server? :o 

SO MANY THINGS

e.g

- Getting your password and try that password for other things
- Redirect your sites to their nefarious sites
- Man in the middle attack :o
- Run their own server on your server, get your server banned, and then lock your legit stuff out
- Lock you out of your own server
- Scrape your DB
- Turn your server into a botnet



## Security Checklist

- SSH. Don't use password!
- Use firewalls
- Updates often!
- 2FA
- VPN

## Unattended upgrades

package that helps you upgrade things in ur com for security fixes

Automatically helps you upgrade



## Fire wall

Security technique that filter requests based on certain criteria. Monitor incoming and outgoing traffic and decides to allow or block a traffic based on a certain rules

They are not invulnerable, there are ways around them

But it slows people down

`nmap $IP` allows you to see opened ports

`nmap -sV $IP` allows you to see more info



- PORT: communication endpoint that maps to a specific process or network service

Every opened port to the internet, it s a potential for vulnerability. Hence they are closed by default

## UFW - Uncomplicated Fire Wall

Easy program to manage firewall

```bash
ufw [allow|deny|reject] [http|https|ssh]
```

__Deny vs Reject__

- Deny: Completely ignore the request (blackholes)
- Reject: Responds to request saying that request is dropped

Don't lock ourself out by closing port `22`

## Permissions

Limiting what a particular user can do. Generally you can only `READ, WRITE, EXECUTE` a file. Permissions is about controlling that

You shouldn't do `777` ever

- `READ`: 1
- `WRITE`: 2
- `EXECUTE`: 4