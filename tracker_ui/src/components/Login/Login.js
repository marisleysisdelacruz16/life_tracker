import { Link } from "react-router-dom"
import { useLoginForm } from "hooks/useLoginForm"
import "./Login.css"

export default function Login({ message }) {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } = useLoginForm()

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>

        {errors.form || message ? <span className="error">{errors.form || message}</span> : null}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
            {isProcessing ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/register">here.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}