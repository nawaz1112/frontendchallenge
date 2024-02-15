// Importing modules
const express = require('express');
const Authentication = require('../db/queries/authentication');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User login api
router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const user = await Authentication.login(username,password);
  if (user === null) {
    return res.status(400).send({
      message: "User not found."
    });
  }
  bcrypt.compare(password, user[0].passwordhash, function(err, result) {
    if(result !== true) return res.status(400).send({
      message: "Wrong Password"
    });
    else {
      const token = jwt.sign({ username: username }, password);
      return res.status(201).send({
        message: "User Logged In",
        token
      })
    }
});
  // Find user with requested email
});

// User signup api 
router.post('/signup', async (req, res) => {
  const {username, password,email,userType} = req.body;
  const user = await Authentication.login(username,password);
  if(user !== null) return res.status(400).send({
    message: "user exists"
  })
const saltRounds = 10;

  bcrypt.hash(password, saltRounds, async function(err, hash) {
    // Store hash in your password DB.
    console.log(Authentication);
    await Authentication.signup(uuidv4(),username,hash,email,userType)
    return res.status(201).send({
      message: "User added successfully."
    });
});

});
// Export module to allow it to be imported in other files 
module.exports = router; 