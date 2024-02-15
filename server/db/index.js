const { Pool } = require('pg');
 
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  max: 20,
  password:'password',
  database:'task_management',
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = pool;