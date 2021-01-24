# Server

Serves content. Response to requests

Any computer can be a server. As long as it response to requests and serving content, it is a server

Any port below 1000 is reserved

Servers that we pay for are built differently from our consumer machines. They are custom built machines for serving files. They live in data centers. Run in really cold environment. Usually v clean. Very tight security

Cloud. Allow the same app to be running across the world. Makes things faster. Elastic computing. Allows scaling as needed. Can adjust cost according to traffic

Server can be split into multiple parts for people to share. Each part dont communicate with each other

VPS: Virtual Private Server (e.g DigitalOcean)

An Image is a copy of a base OS

## Operating System

2 main types of server operating systems:

1. Windows
2. Unix-based

![List of operating systems](../../assets/listOfOs.png)

Ubuntu is one of the most popular flavour of Linux

Kernel: layer that talks to the machine hardware
Utilities: Tiny applications that do 1 thing. They can be updated and not break the kernel

LTS (Long Term Support) Version: Stable version

## SSH Key

2 ways of going into a server: Password and SSH Key

SSH: Secure Socket Shell. Basically a vvvv large key as of now unbreakable.

Made of 2 parts: Public key and Private key.

- Private key is stored in your computer
- Public key is stored on the server

Everything is encrypted with the public key. Encrypts using private key

To generate a pair of public-private key use `ssh-keygen`
