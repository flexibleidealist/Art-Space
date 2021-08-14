import { useState } from "react"
import { useHistory } from "react-router-dom"
import { signup } from "../../services/artists"

function SignUp(props) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    artist_statement: "",
    image_url: "",
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
    <div>
    <form onSubmit={handleSubmit} className="signup-form">
      <input 
        name="name"
        type="text"
        value={formData.name}
        placeholder="name"
        onChange={handleChange}
        required
      />
      <input
        name="username"
        type="text"
        value={formData.username}
        placeholder="username"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="text"
        value={formData.email}
        placeholder="email"
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
      <textarea
        name="artist_statement"
        value={formData.artist_statement}
        placeholder="Artist Statement"
        onChange={handleChange}
        required
      />
      <input
        name="image_url"
        type="text"
        value={formData.image_url}
        placeholder="URL for Profile Pic"
        onChange={handleChange}
        required
      />
      <button type="submit">submit</button>
    </form>
    </div>
  )
}
export default SignUp