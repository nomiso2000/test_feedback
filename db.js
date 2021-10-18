const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'misha432',
  host: 'localhost',
  port: 5432,
});
