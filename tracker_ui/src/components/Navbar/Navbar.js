import { Link } from "react-router-dom"
import { useAuthContext } from "contexts/auth"
import "./Navbar.css"

const navLinks = [
  { label: "Activity", path: `/activity` },
  { label: "Exercise", path: `/exercise` },
  { label: "Nutrition", path: `/nutrition` },
  { label: "Sleep", path: `/sleep` },
]

export default function Navbar() {
  const { user, handleLogout } = useAuthContext()

  return (
    <nav className="Navbar">
      <div className="content">
        <span className="logo">
          {<Link to="/">
            <img src= "https://student-store.surge.sh/static/media/codepath.70a9a31f.svg" alt="codepath logo"></img>
          </Link>}
        </span>

        <ul className="links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}

          {user?.email ? (
            <>
              <li className="secondary btn">
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="btn secondary">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}