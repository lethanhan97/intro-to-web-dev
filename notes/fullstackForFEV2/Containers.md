# Containers

## Microservices

- An architecture of loosely connected services
- Opposite of microservices are monoliths

Each team can fully utilize the benefits of different languages

Easier to manage

## Container

- Way of partitioning your code and environment so that it will run with only the neccessary components included
- Different from Virtual Machines since VMs need their own OS to run
- Containers takes the VM concept,  each containers have its own libraries in order for the code to run. It doesnt know and doesnt care about which OS it is on

We could only use containers so much today due to the advancements in hypervisors (processors that control other processors)

Good for analyzing each container

Benefits:

- Lightweight
- Portable
- Easier for Development
- Easier to manage
- Faster startup
- Decouple application from infra

## Services

Some container services:

- Docker
- Apache Mesos
- CoreOS rkt

## Orchestration

Rolling out many containers at once. Managing Containers

Services:

- Kubernetes "K8"
- Docker Swarm
- Amazon EKS
- Apache Mesos
- AKS

## Load balancer

Manage requests and resources. Direct requests to available containers

Operate using Scheduling Algorithms. Some examples:

- Round Robin
- IP Hashing
- Least Load
- Least connection

you can use `top` or `htop` to see the load on your server. CPU load, Memory Load and Swp Load

## Deployment

There are tools that help you spin up/take down multiple servers at once. E.g:

- Ansible
- Vagrant
- Puppet

