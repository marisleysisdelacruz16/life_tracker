import { Routes, Route } from "react-router-dom"
import Banner from "../Banner/Banner"
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"
import ExerciseOverview from "../ExerciseOverview/ExerciseOverview"
import NotFound from "../NotFound/NotFound"
import "./ExercisePage.css"

export default function ExercisePage() {

  return (
    <div className="ExercisePage">
      <Banner title="Exercise" />
      <div className="content">
        <Routes>
          <Route path="/" element={<ExerciseOverview />} />
          <Route path="/add" element={<NewExerciseForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

