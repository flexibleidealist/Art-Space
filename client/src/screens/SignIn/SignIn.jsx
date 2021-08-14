import { useState } from "react"
import { signin } from "../../services/artists"

function SignIn(props) {  
  const setCurrentUser = props.setCurrentUser
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
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        value={formData.username}
        placeholder="username"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        placeholder="password"
        onChange={handleChange}
        required
      />
      <button type="submit">submit</button>
    </form>
  )
}
export default SignIn