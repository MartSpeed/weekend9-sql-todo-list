// server housing the app information from the routes
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Router } = require('express');
const weekendRouter = require('./routes/weekend.router');
const PORT = 5000;

// app info
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use(bodyParser.json());

// ROUTES
app.use('/task', weekendRouter);
// LISTENER
// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
