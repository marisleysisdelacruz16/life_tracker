import workout from "assets/iconworkout.svg"
import planner from "assets/planningicon.svg"
import food from "assets/food.svg"
import rest from "assets/rest.svg" 
import "./Home.css"

const bar = [
  { label: "Fitness", image: workout, id: 1 },
  { label: "Food", image: food, id: 2 },
  { label: "Rest", image: rest, id: 3 },
  { label: "Planner", image: planner, id: 4 },
]

export default function Home() {
  return (
    <div className="Home">
      <div className="hero">
          <img src= "http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg" alt="hero img"></img>
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>

<div className="bar">
{bar.map(({ label, image, id }) => (
  <div className="catbar" key={id}>
    <img src={image} alt={label} />
    <p>{label}</p>
  </div>
))}
</div>
</div>
  )
}