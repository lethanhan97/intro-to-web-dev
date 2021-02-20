# Databases

Simplest way of persisting something is using a file.

However, it will be hard to find data throughout the file. Makes it very slow. Writing to a file is also not portable. Each server writing data to the same file is not portable at all. => Not scalable

=> Database is invented. Structured way to storing and getting data

## Database types

1. Relational DBs (SQL)
2. Non Relational DBs (NoSQL)

### Relational DBs

Describes how entities are related to each other.

Uses table

Very strict

Data are related to each other

Some examples:

- MySQL
- PostgreSQL
- Microsoft SQL Server

### Non Relational DBs

More for pure document storage

Data agnostic => dont care what type of data to it

Loose structure

E.g:

- Redis
- Elastic Search
- MongoDB
- Cassandra

They all have their unique place in the world. E.g Redis is very good for caching. Mongo is good for storing documents => key and JSON