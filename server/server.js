const express = require('express');
const cors = require('cors');
const pool = require('./db')

const app = express();
app.use(cors());
app.use(express.json());


app.listen(3001,()=>{
  console.log('App listing at 3001');
})


// Importing routes
const user = require('./routes/User');
// Use user route when url matches /api/user/
app.use('/api/user', user);