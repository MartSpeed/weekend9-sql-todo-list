const pg = require('pg');

// pool variable to tell my server where to find the database
const pool = new pg.Pool({
  // This
  database: 'weekend-to-do-app',

  // These options are not required,
  //but you may see them around
  host: 'localhost',
  port: 5000,
});

// connect to the postgreSQL
pool.on('connect', () => {
  console.log('connected to postgres');
});

// has an error if th connection was not successful
pool.on('error', (err) => {
  console.log('error connecting to postgres', err);
});

module.exports = pool;
