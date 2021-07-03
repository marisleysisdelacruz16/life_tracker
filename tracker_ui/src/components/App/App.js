import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import ActivityPage from "../ActivityPage/ActivityPage"
import ExercisePage from "../ExercisePage/ExercisePage"
import Login from "../Login/Login"
import Navbar from "../Navbar/Navbar"
import NotFound from "../NotFound/NotFound"
import Register from "../Register/Register" 
import AuthorizedUser from "../AuthorizedUser/AuthorizedUser"
import { AuthContextProvider } from "contexts/auth"
import { ActivityContextProvider } from "contexts/activity"
import { ExerciseContextProvider } from "contexts/exercise"
import "./App.css"

export default function AppContainer() {

return (
  <AuthContextProvider>
  <ExerciseContextProvider>
        <ActivityContextProvider>
          <App />
        </ActivityContextProvider>
  </ExerciseContextProvider>
</AuthContextProvider>
)
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activity/*" element={<AuthorizedUser element = {<ActivityPage />} /> } />
          <Route path="/exercise/*" element={<AuthorizedUser element = {<ExercisePage />} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
        
