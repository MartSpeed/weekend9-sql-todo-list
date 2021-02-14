# John Anthony Weekend TODO List TODO list

## Wireframe

## Plumbing

## Files

### Public

### Route - app.grt -> router.get(function (request, response){ response.send(some information)})

#### ## jQuery - $.ajax(function{ type: "", url: "", data: "name of the const variable made"}).then().catch()

- [x] copy jQuery file

## Database

- [] database name: weekend-to-do-app
- [] variables, "task_name", "complete"

## server

- [x] npm init
- [x] npm install
- [x] .gitignore
- [x] npm install express
- [x] npm install body-parser
- [x] nom install pg

## pool

Thank you to William Krug for providing this amazing TODO list

# Server Set up Template

​

1. [x] Run `npm init` from the terminal
2. [x] Run `npm install express` from the terminal
3. [x] Run `npm install pg` from the terminal
4. [x] Create `.gitignore` file
   - [x] `node_modules/` needs to be present
   - [] `.DS_Store` needs to be present
5. [x] Update `package.json` file with `start` command
   - [] Find the `"scripts"` section
   - [x] Add the following: `"start": "node ./server/server.js"`
6. [x] Create `server` directory
7. [x] Create `server.js` inside of the `server` directory
   - [] `const express = require('express')`
   - [] `const app = express()`
   - [] `const port = 5000`
   - [] `app.use(express.static('server/public'))`
   - [] `app.use(express.json())`
   - [] `app.use (express.urlencoded({extended: true}))`
   - [] `app.listen(port, function() { console.log("I'm listening....", port); })`
8. [x] Create `public` directory inside of the `server` directory
9. [x] Create `index.html` inside of the `public` directory
10. [] Create `styles` directory inside of the `public` directory
11. [] Create `style.css` inside of the `styles` directory
    ​

- [x] `<link>` file to `index.html`
      ​

12. [x] Create `scripts` directory inside of the `public` directory
13. [x] Create `client.js` inside of the `scripts` directory
        ​

- [x] `<script src>` file to `index.html`
      ​

14. [x] Create `vendors` directory inside of the `public` director
        ​

- [x] Create `jQuery.js` inside of the `vendors` directory
      ​
- [x] `<script src>` file to `index.html` before `client.js`
      ​

15. [x] Create `modules` directory inside of the `server` directory
        ​

- [x] Create `pool.js` inside of the `modules` director
  - [] `const pg = require('pg')`
  - [] `const config = { database: 'databasename', host: 'localhost' port: 5432, };`
  - [] `const pool = new pg.Pool(config);`
  - [] `pool.on("connect", () => {console.log('connected to postgres');});`
  - [] `pool.on("error", (error) => {console.log('ERROR: Connecting to postgres', error);});`
  - [] `module.exports = pool;`
- [] `const pool = require('filepath to pool.js')` where needed
  ​

16. [x] Create `routes` directory inside of the `server` directory
        Collapse
