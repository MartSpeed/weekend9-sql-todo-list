// pool connection to router
const pool = require('../modules/pool');

// setup of the router information
const express = require('express');
const router = express.Router();

/**
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

// pool
//   .query(sqlText, sqlArgs)
//   .then(function (dbRes) {
//     res.sendStatus(200);
//   })
//   .catch(function (error) {
//     console.log('POST error', error);
//   });
module.exports = router;
