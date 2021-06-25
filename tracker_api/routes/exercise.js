const express = require("express")
const Exercise = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async(req,res,next) => {
  try {
    const {user} = res.locals
    const exercise = await Exercise.createExercise({user, exercise:req.body})
    return res.status(201).json({exercise})
  } catch (err) {
    next (err)
  }
})

router.get("/:exerciseId", async (req,res,next) => {
  try {
    //get single order
    const {orderId} = req.params
    const order = await Order.fetchOrderById(orderId)
    return res.status(200).json({order})
  }
  catch (err) {
    next(err)
  }
})



router.get("/", async (req, res, next) => {
    //calls listsOrdersForUser 
  try {
    const order = await Order.listOrdersForUser()
    return res.status(200).json({ order })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    // calls createOrder
  try {
    const order = await Order.createOrder()
    return res.status(201).json({ order })
  } catch (err) {
    next(err)
  }
})

module.exports = router
