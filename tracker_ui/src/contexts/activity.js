import { createContext, useState, useContext, useEffect } from "react"
import { useAuthContext } from "contexts/auth"
import { useExerciseContext } from "contexts/exercise"
import apiClient from "services/apiClient"

const ActivityContext = createContext(null)

export const ActivityContextProvider = ({ children }) => {
  const { user } = useAuthContext()
  const { exercises, initialized: exerciseInitialized } = useExerciseContext()
  const [initialized, setInitialized] = useState(false)
  const [activity, setActivity] = useState({
    averageIntensity: 0,
    totalExerciseMinutes: 0
  })

  const allInitialized = [exerciseInitialized].every((v) => Boolean(v))

  useEffect(() => {
    const fetchUserActivity = async () => {
      const { data } = await apiClient.fetchUserActivity()
      if (data) {
        setActivity((s) => ({
          ...s,
          averageIntensity: data.averageIntensity?.avg || 0,
          totalExerciseMinutes: data.totalExerciseMinutes?.sum || 0,
        }))
      }
    }

    if (user?.username) {
      if (allInitialized && !initialized) {
        fetchUserActivity()
        setInitialized(true)
      } else if (allInitialized && exercises.length !== 0) {
        fetchUserActivity()
        setInitialized(true)
      }
    }
    
  }, [user?.username, exercises.length, allInitialized])

  const activityValue = { activity, setActivity }

  return (
    <ActivityContext.Provider value={activityValue}>
      <>{children}</>
    </ActivityContext.Provider>
  )
}

export const useActivityContext = () => useContext(ActivityContext)

export const summaryInformation = (activity) => ({
  totalExerciseMinutes: activity.totalExerciseMinutes
})
export const extraInformation = (activity) => ({
  averageIntensity: activity.averageIntensity
})