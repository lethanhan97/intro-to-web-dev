# Understanding HTTP

HTTP: HyperText Transport Protocol

A standard that defines how our code moves from our server to our client, and how to decrypt that.

## HTTP Header

Metadata about the request. Information about where it's from, where is it going, what is the encoding, etc

 Certain Header are unmodified by the clients. E.g The Host header cant be modified by the client

Common headers:

- User-agent: Use to inspect what browser what we are on, what feature is supported e.t.c. If you're trying to sniff user-agent, use a library
- Accept: What the device will handle
- Accept-language: Browser languages
- Content-type: The type of media
- Set-cookie: Sets stateful information
- X-: used for custom header

Cookie: persistent bit of metadata that goes on every subsequent request that can be accessed and managed by the server side and the client side. Important because it brings data between sessions and let you extend UX across sessions

Internet is stateless. It's just requests and response. Cookies helps you persist states. The danger is that cookies will not expire unless you expire them, and gets added into every single request. So don't put too much in your cookies

Status codes: Describes the status of a request

Common status codes:

- 200: OK
- 301: Moved permanently
- 302: Found (temp redirect)
- 401: Not authorized
- 404: Not found
- 500: Internal server error

Status prefix:

- 1xx: Information
- 2xx: Success
- 3xx: Redirect
- 4xx: Client Error
- 5xx: Server Error

## HTTPS

SSL Over HTTP. Prevents snooping. Cant inspect traffic between client n server

It also guarantees the person you are talking to is the person you think you are talking to.

A few years ago, it was hard to add HTTPS to your website. Now we can easily add a free one using certbot. Certbot is a wrapper around Let's Encrypt, a free cert authority.

HTTPS cant be done for just IP Address. Only domain name

Use [Certbot](https://certbot.eff.org/instructions)

## HTTP/2 

In HTTP1.1, with TCP, every connection needed to perform a handshake. 1 connection = 1 pipe

In HTTP/2, we do many requests over 1 connection (multiplexing)

There is a limit on number of connections we can make (most browser limited to 6 per domain)

For a very large number of requests (quadrillion), getting rid of multiple handshakes make everything harder

HTTP/2 also has HPACK (a compression algo). It hashes the header and compare the hashes, giving about 30-40% speed increase. Though it wont do it on cookies cuz cookies are more dynamic



## HTTP/3

Not being supported yet

HTTP over UDP instead of HTTP over TCP like in HTTP/2 and HTTP/1.1

It has some error correction in it