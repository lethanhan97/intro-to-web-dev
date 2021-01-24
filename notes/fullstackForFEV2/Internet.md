# Undertanding the Internet

Internet is a bunch of computers talking to each other hehehehe

World Wide Web is only a part of the Internet. There s like FPT, BitTorrent etc

1. Internet: A system of globally interconnected devices
2. Intranet: Private internet

The internet runs on trust (standards). We have a series of protocol to govern how the internet works

1. IP: Internet Protocol. Collective idea that if i send you some data that is well formed enough, I can accept it, read it and send it back to you, let you know how I have your data

2. IP Address: A label assigned to an internet connected device. Like a postal address

3. IPv4: 8.8.8.8
4. IPv6: 2001:1201:3410:3331

5. TCP: Transmission Control Protocol: Negotiate the connection for each file. TCP is lossless. It will make sure that the server is available by sending a SYN package first. The server then replies with an ACK package indicating that it is available, then the file transmission starts. It does this for every file being transmitted

6. UDP: User Datagram Protocol: Negotiate the connection for 1 time then keeps the channel open. UDP is more like it just sends the information out not caring if you are ready to receive it

`ping`: It s a really short request that just says "hey u there?, hey u there?, etc". Cheapest easiest way to test the connection if it is working

7. DNS: Domain Name System. Run by ICANN. They control domain names. Basically a phone book of the internet. When u wanna go twitter.com DNS helps you find the nearest server. It basically maps IP address to Domain Names

blog.lethanhan.com: Subdomain. It is part of lethanhan.com. For users it looks like it s a different site affliated with the main site

lethanhan.com: domain

.com: TLD (Top Level Domain). Run by companies

Every country has their own top level domain (e.g .sg .cn. ru)
