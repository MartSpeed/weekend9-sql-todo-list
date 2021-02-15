// pool connection to router
const pool = require('../modules/pool');

// setup of the router information
const express = require('express');
const database = require('mime-db');
const router = express.Router();

/**
 * POST INCANTATION
 *
 * NAME: weekend todo list route information
 * DESCRIPTION: grabs the task info and uses the routes root folder to display the task information that was
 * appended to the DOM
 */
router.post('/', function (request, response) {
  console.log('in server');
  //response.sendStatus(200);
  let sqlText = `INSERT INTO "weekend_todo" ("task") VALUES ($1);`;
  let sqlArgs = request.body.task;
  console.log('this is the args', sqlArgs);

  // pool.query second argument always takes an array
  pool
    .query(sqlText, [sqlArgs])
    .then(function (dbResponse) {
      response.sendStatus(200);
    })
    .catch(function (error) {
      console.log('POST error', error);
      response.sendStatus(500);
    });
});
/**
 * GET INCANTATION
 * NAME: 'GET'
 * DESCRIPTION:grab the query from the DOM and insert that from server to and feed the
 * updated query into the "task" database and display the results per row
 */
router.get('/', function (request, response) {
  // I want to select everything in the workout list and set the order by id
  pool
    .query(`SELECT * FROM "weekend_todo" ORDER BY "id"`)
    .then(function (dbResults) {
      console.log('database results', dbResults.rows);
      response.send(dbResults.rows);
    })
    .catch(function (error) {
      console.log('GET error', error);
      response.sendStatus(500);
    });
});

module.exports = router;
