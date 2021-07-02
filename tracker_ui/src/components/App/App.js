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
/*   const [user, setUser] = useState({})
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async() => {
      const { data, error } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)

      if (error) setError(error)
      }
    }

    const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
  }
}, [])

const handleLogout = async () => {
  await apiClient.logoutUser()
  setUser({})
  setError(null)
} */

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activity" element={<AuthorizedUser element = {<ActivityPage />} /> } />
          <Route path="/exercise" element={<AuthorizedUser elemenent = {<ExercisePage />} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
        
