# Nginx

What does it do?

- Reverse proxy
- Web server
- Proxy Server

## What does a webserver do?

Request hit your server. Now what?

That's why Nginx is there. It helps you direct your requests to the right places

![Nginx High Level](../../assets/nginx.png)

```
sudo apt install nginx // install nginx

sudo service nginx start // start nginx
```

## Configuration

- Default config is at `/etc/nginx/sites-available/default`
- Root directory for requests is at `/var/www/html`
- Nginx directives: Macro for doing stuff

## Commands

- To start Nginx: `sudo service nginx start`
- Restart: `sudo service nginx reload`
- Stop: `sudo service nginx stop`
