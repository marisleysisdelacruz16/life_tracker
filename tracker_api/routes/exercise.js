const express = require("express")
const Exercise = require("../models/exercise")
const security = require("../middleware/security")
const router = express.Router()

router.post("/add", security.requireAuthenticatedUser, async(req,res,next) => {
  try {
      // create new exercise log
    const { user } = res.locals
    const exercise = await Exercise.createExercise({ exercise:req.body, user })
    return res.status(201).json({ exercise })
  } catch (err) {
    next (err)
  }
})


router.get("/exercise", security.requireAuthenticatedUser, async (req, res, next) => {
    //lists all Exercises 
  try {
    const { user } = res.locals
    const exercise = await Exercise.listAllExercises({ user })
    return res.status(200).json({ exercise })
  } catch (err) {
    next(err)
  }
})

router.get("/:exerciseId", async (req, res, next) => {
  //gets one exercise
try {
  const { exerciseId } = req.params
  const exercise = await Exercise.fetchExerciseById(exerciseId)
  return res.status(200).json({ exercise })
} catch (err) {
  next(err)
}
})


module.exports = router
