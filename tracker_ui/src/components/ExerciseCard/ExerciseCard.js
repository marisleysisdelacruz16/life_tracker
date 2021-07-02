import "./ExerciseCard.css"
import { formatCalendar } from "utils/format"
import Details from "../Details/Details"

export default function ExerciseCard({ exercise }) {
  return (
    <div className="ExerciseCard">
      <div className="card-header">
        <h2 className="title">{exercise.name}</h2>
        {exercise.image ? <img src={exercise.imageUrl} alt="exercise" /> : null}
      </div>

      <div className="card-stats">
        <Details title="Duration" value={exercise.duration} />
        <Details title="Intensity" value={exercise.intensity} />
      </div>

      <div className="card-meta">
        <small>{formatCalendar(exercise.createdAt)}</small>
        <small className="category">{exercise.category}</small>
      </div>
    </div>
  )
}