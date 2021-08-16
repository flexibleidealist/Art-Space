import { useState } from "react"
import { useHistory } from "react-router-dom"
import { signup } from "../../services/artists"
import "./SignUp.css"

function SignUp(props) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  
  const handleChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = async (event) => {
    event.preventDefault()
    const artist = await signup(formData)
    props.setCurrentUser(artist)
    history.push("/")
  }

  return(
    <div className="signup-form-container">
    <form onSubmit={handleSubmit} id="signup-form" autocomplete="off">
      <div className="input">
        <label htmlFor="username">username:</label>
        <input
          name="username"
          type="text"
          value={formData.username}
          placeholder="username"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="email">email:</label>
        <input
          name="email"
          type="text"
          value={formData.email}
          placeholder="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="input">
        <label htmlFor="password">password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="password"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">submit</button>
    </form>
    </div>
  )
}
export default SignUp