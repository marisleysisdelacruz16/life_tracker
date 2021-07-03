const db = require("../db")

class Activity {
    static async totalExerciseMinutes () {
        const exerciseTotal = await db.query (
            `SELECT SUM(duration) AS total 
            FROM exercises`
        )
        
        const amount = exerciseTotal.rows[0]
        return amount
    }


}

module.exports = Activity