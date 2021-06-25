const jwt = require("jsonwebtoken")
const {SECRET_KEY} = require("../config")
const {UnauthorizedError} = require("../utils/errors")

const jwtFrom = ({headers}) => {
    // takes in a request object and checks to see if the request has an authorization header
    // extracts token from header and returns it if it exists
    if (headers?.authorization) {
        const [scheme,token] = headers.authorization.split(" ")
        if (scheme.trim() === "Bearer") {
            return token
        }
    }

    return undefined
}

const extractUserFromJwt = (req,res,next) => {
    try {
        const token = jwtFrom(req)
        if(token) {
            res.locals.user = jwt.verify(token,SECRET_KEY)
            //ENSURING THAT IT IS A VALID TOKEN
        }
        return next()
    } catch (error) {
        return next()
    }
    
}

const requireAuthenticatedUser = (req,res,next) => {
    //checks if user exists on res.locals and user has an email
    try{
        const {user} = res.locals
        if (!user?.email) {
            throw new UnauthorizedError()
        }
      return next()
    } catch(error) {
        return next(error)
    }
}

module.exports = {
    jwtFrom,
    extractUserFromJwt,
    requireAuthenticatedUser
}