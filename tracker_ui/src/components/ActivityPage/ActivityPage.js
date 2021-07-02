import { useNavigate } from "react-router-dom"
import { useActivityContext } from "../../contexts/activity"
import { summaryInformation } from "../../contexts/activity"
import { extraInformation } from "../../contexts/activity"
import SummaryPage from "../SummaryPage/SummaryPage"
import Button from "../Button/Button"
import "./ActivityPage.css"

const Actions = ({ title = "Activity Feed" }) => {
  const navigate = useNavigate()
  return (
    <div className="actions">
      <h2 className="heading">{title}</h2>
      <div className="buttons">
        <Button className="outline gold" onClick={() => navigate("/exercise/add")} size="small">
          {"Add Exercise"}
        </Button>
        <Button className="outline blue" onClick={() => navigate("/sleep/create")} size="small">
          {"Log Sleep"}
        </Button>
        <Button className="outline aqua" onClick={() => navigate("/nutrition/create")} size="small">
          {"Record Nutrition"}
        </Button>
      </div>
    </div>
  )
}

export default function ActivityPage() {
    const { activity } = useActivityContext()
    const SummaryInfo = summaryInformation(activity)
    const extraInfo = extraInformation(activity)

  return (
    <div className="ActivityPage">
      <div className="content">
        <Actions />
        <div className="stats">
          <div className="main">
            <SummaryPage
              color="aqua"
              isAverage={false}
              stat={{ title: `Total Exercise Minutes`, value: SummaryInfo.totalExerciseMinutes }}
            />
          </div>
          <h4>More Details</h4>
          <div className="more">
            <SummaryPage
              stat={{ title: `Avg Exercise Intensity`, value: extraInfo.averageIntensity }}
              isAverage={true}
              color="aqua"
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* const [isFetching, setIsFetching] = useState(false)
const [exercises,setExercises] = useState([])
const [error, setError] = useState(null)

useEffect(() => {
    const fetchExercises = async () => {
        setIsFetching(true)

        const { data, error } = await apiClient.listExercises()
        if (data) setExercises(data.exercises)
        if (error) setError(error)

        setIsFetching(false)
    }
}) 

} */