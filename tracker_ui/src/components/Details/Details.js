import { formatStatistic, formatTimeStat } from "utils/format"
import "./Details.css"

export default function Details({ title, value, isDate }) {
  return (
    <div className="Details">
      <p>{title}</p>
      <span>{isDate ? formatTimeStat(value) : formatStatistic(value)}</span>
    </div>
  )
}