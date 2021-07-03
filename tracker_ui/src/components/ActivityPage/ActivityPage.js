import { useNavigate } from "react-router-dom"
import { useActivityContext } from "../../contexts/activity"
import { summaryInformation } from "../../contexts/activity"
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
    const summaryInfo = summaryInformation(activity)

  return (
    <div className="ActivityPage">
      <div className="content">
        <Actions />
        <div className="stats">
          <div className="main">
            <SummaryPage
              color="aqua"
              isAverage={false}
              stat={{ title: `Total Exercise Minutes`, value: summaryInfo.totalExerciseMinutes }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}