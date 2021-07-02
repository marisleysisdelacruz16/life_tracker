const express = require("express")
const Activity = require("../models/activity")
const security = require("../middleware/security")
const activityRouter = express.Router()

activityRouter.get("/information", security.requireAuthenticatedUser, async (req,res,next) => {
    try {
        const amount = await Activity.exerciseTotal()
        res.status(200).json({ total: amount })
    }
    catch(error)
    {
        next(error)
    }
})

module.exports = activityRouter