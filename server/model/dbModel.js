const { Pool } = require('pg');
//const config = require('../../config');
//const PG_URI = config.URI;
const PG_URL =
  'postgres://ohzxtojc:PVEpzgrigPMB6G6WlXA5Xb_9U-864Mzt@ziggy.db.elephantsql.com:5432/ohzxtojc';
const pool = new Pool({ connectionString: PG_URL });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
