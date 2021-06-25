const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Exercise {
    static async listAllExercises () {
        //returns all orders that user has created
        const results = await db.query (
            `
            SELECT exercises.id AS "exerciseId",
            exercises.user_id AS "userId",
            exercises.category AS "category",
            exercises.name AS "name",
            exercises.duration AS "duration"
            exercises.intensity AS "intensity"
            FROM exercises
            WHERE exercises.user_id = (SELECT id FROM users WHERE email = $1)
            `
        )

    }

    static async fetchExerciseById (exerciseId) {
        const results = await db.query (
            `
            SELECT exercises.id AS "exerciseId",
            exercises.user_id AS "userId",
            exercises.category AS "category",
            exercises.name AS "name",
            exercises.duration AS "duration"
            exercises.intensity AS "intensity"
            FROM exercises
            WHERE exercises.user_id = (SELECT id FROM users WHERE email = $1)
            `, [exerciseId]
        )

        const exercise= results.rows[0]
        if (!exercise) {
            throw new NotFoundError()
        }

        return exercise

    }


    static async createExercise({exercise,user}) {
        // takes user's activity and stores it in database

        const requiredFields = ["name"]
        requiredFields.forEach(field => {
            if(!exercise.hasOwnProperty(field) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })

            if (!user) {
                throw new BadRequestError("No user provided")
            }

            // create new order

            const exerciseResult = await db.query (
    `
    INSERT INTO exercises (name, category, duration, intensity, user_id)
    VALUES ($1,$2,$3,$4, SELECT id FROM users WHERE email = $5)
    RETURNING id, name, category, duration, intensity, 
    user_id as "userId"
    `, [exercises.name, exercises.category,exercises.duration, exercises.intensity,user.email]
    )

    return exerciseResult.rows[0]
    
}
}

module.exports = Exercise