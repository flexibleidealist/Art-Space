import { useState, useEffect } from "react"
import { createShow } from "../../services/shows.js"

function ShowCreate(props) {
  const currentUser = props.currentUser
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    artist_id: "",
  })
  
  useEffect(() => {
    setFormData({
    ...formData,
    artist_id: currentUser.id,})
    console.log(currentUser)
  }, [])

  const handleChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    const handleSubmit = async (event) => {
      event.preventDefault()
      await createShow(formData)
    }

    

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="show title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="image_url"
          type="text"
          value={formData.image_url}
          onChange={handleChange}
          required
        />
      <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default ShowCreate