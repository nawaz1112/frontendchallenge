const jwt = require('jsonwebtoken');
const pool = require('./../index')

async function login(username) {
  try {
    const client = await pool.connect();
    const user = await client.query('SELECT * from Users where username = $1', [username])
    client.release();
    return user.rows;
  } catch (error) {
    console.log(error);
  }
}
async function signup(userID, username, passwordHash, email, userType) {
  try {
    console.log(userID, username, passwordHash, email, userType);
    const client = await pool.connect()
    await client.query('INSERT INTO Users (UserID, Username, PasswordHash, Email, UserType) VALUES ($1, $2, $3, $4,$5)',[userID, username, passwordHash, email, userType]);
    client.release()
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  login,
  signup
}