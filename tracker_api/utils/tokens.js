const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")


//returns signed toke using jsonwebtoken package and SECRET_KEY
const generateToken = (data) => jwt.sign(data,SECRET_KEY, {expiresIn: "24h"}) 


const validateToken = (token) => {
    try {
    const decoded = jwt.verify(token, SECRET_KEY)
      return decoded
    } catch (err) {
      return {}
    }
}
   
const createUserJwt = (user) => {
    // accepts user and creates payload with user email and admin status
    // returns result of calling generateToken on payload
    const payload = {
    email: user.email,
    isAdmin: user.isAdmin || false,
    }

    return generateToken(payload)
}


module.exports = {
    generateToken,
    createUserJwt,
    validateToken
} 