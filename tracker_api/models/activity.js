const db = require("../db")

class Activity {
    static async totalExercise () {
        const exerciseTotal = await db.query (
            `SELECT SUM(duration) AS total 
            FROM exercise`
        )
        
        const amount = exerciseTotal.rows[0]
        return amount
    }
}

module.exports = Activity