import { useState } from "react"
import { useHistory } from "react-router-dom"
import { signin } from "../../services/artists"
import "./SignIn.css"

function SignIn(props) {  
  const { setCurrentUser } = props
  const history = useHistory()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const artist = await signin(formData)
    setCurrentUser(artist)
    history.push("/")
  }

  return(
    <div className="signin-form-container">
    <form id="signin-form" onSubmit={handleSubmit} >
      <div className="input">
        <label htmlFor="username">username:</label>
        <input
        name="username"
        type="text"
        value={formData.username}
        placeholder="username"
        onChange={handleChange}
        required
        autoComplete="off"
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
        autoComplete="off"
        />
      </div>
      <button type="submit">submit</button>
    </form>
    </div>
  )
}
export default SignIn