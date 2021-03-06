# Node Rest API
> A starter project with Node.js, Fastify and PostgreSQL

### Structure

```
.
├── README.md
├── src
│   ├── helpers
│   ├── modules
│   ├── routes
├── app.js
├── server.js
├── .env.example
├── .gitignore
└── db.sql

```

## How To Run

1. Import file db.sql to your database
2. Copy file .env.example to .env and change with your configuration
3. Run node app.js

## Endpoints

1. GET      /api/v1/users           fetch data users
2. GET      /api/v1/users/:id       fetch data user by id
3. POST     /api/v1/users           create data user
4. PATCH    /api/v1/users/:id       update data user by id
5. DELETE    /api/v1/users/:id      delete data user by id
