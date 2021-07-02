const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Exercise {

    static async exercisePost(exercise) 
    {
        return {
            id: exercise.id,
            user_id: exercise.user_id,
            name: exercise.name,
            category: exercise.category,
            duration: exercise.duration,
            intensity: exercise.intensity,
            created_at: exercise.created_at
        }
    }
    static async listAllExercises () {
        //returns all exercises that user has created
        const results = await db.query (
            `
            SELECT exercises.id AS "exerciseId",
            exercises.category AS "category",
            exercises.name AS "name",
            exercises.duration AS "duration",
            exercises.intensity AS "intensity"
            FROM exercises
            JOIN users ON exercises.user_id = users.id
            `
        ) 

        const exercise2 = results.rows
        return exercise2
    }

    static async fetchExerciseById (exerciseId) {
        const results = await db.query (
            `
            SELECT exercises.id AS "exerciseId",
            exercises.category AS "category",
            exercises.name AS "name",
            exercises.duration AS "duration",
            exercises.intensity AS "intensity"
            FROM exercises
            JOIN users ON exercises.user_id = users.id
            WHERE exercises.id = $1
            `, [exerciseId]
        )

    const exercise = results.rows[0]
    if (!exercise) {
        throw new NotFoundError()
    }

    return exercise }


    static async createExercise({ exercise,user }) {
        // takes user's activity and stores it in database

        const requiredFields = ["name","category","duration","intensity"]
        requiredFields.forEach(field => {
            if(!exercise.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })

            // create new exercise

            const exerciseResult = await db.query (
    `
    INSERT INTO exercises (name, category, duration, intensity, user_id)
    VALUES ($1,$2,$3,$4, (SELECT id FROM users WHERE email = $5))
    RETURNING id, 
            name, 
            category, 
            duration, 
            intensity, 
            user_id,
            created_at
    `, [exercise.name, exercise.category,exercise.duration, exercise.intensity,user.email]
    )
        
    const exercise2 = exerciseResult.rows[0]
    return Exercise.exercisePost(exercise2)
    
}
}

module.exports = Exercise