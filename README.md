# Docker Node.js with SQLite Server

## Motivation

The motivation for this project is to learn about Docker, Node.js with SQLite through Sequelize.

## What uses

- Docker
- Docker-Compose
- npm
- Node.js
- Espress
- Nodemon
- Morgan
- Sequelize
- SQLite3
- Babel
- Consign

## EndPoints

```
GET  /users
GET  /users/:id
POST /users
PUT  /users/:id
DEL  /users/:id

GET  /address
GET  /address/:id
POST /address/:userId
PUT  /address/:id
DEL  /address/:id
```

## Model example

**There are two models:**

User

```json
{
    "name":"Siziksu",
    "email":"siziksu@gmail.com",
    "age":25
}
```

Address

```json
{
    "name":"Av. Diagonal 604",
    "cp":"08006"
}
```

**When a user is requested returns both joined:**

User + Address

```json
{
    "name":"Siziksu",
    "email":"siziksu@gmail.com",
    "age":25,
    "address": {
	    "name":"Av. Diagonal 604",
	    "cp":"08006"
    }
}
```

## Seeding

> This process needs `sequelize-cli` installed and the `server/config/config.json` file.
This process will create the folder `seeders` and inside of it, each `seeder` file.  
**Note** All this process is done inside the `server` folder.

1. Go to the `server` folder
2. To create the `seeds`, run:

```bash
$ ./node_modules/.bin/sequelize seed:create --name users-seeder
$ ./node_modules/.bin/sequelize seed:create --name address-seeder
```

3. Edit each seed with the content that you need
4. Seed

```bash
$ ./node_modules/.bin/sequelize db:seed:all
```

## License
    Copyright 2019 Esteban Latre

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.