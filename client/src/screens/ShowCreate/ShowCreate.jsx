import { useState, useEffect } from "react"
import { createShow } from "../../services/shows.js"
import { createWork } from "../../services/works.js"
import "./ShowCreate.css"
function ShowCreate(props) {
  const { currentUser } = props
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    artist_id: "",
  })
  const [showID, setShowID] = useState(null)
  const [workData, setWorkData] = useState({
    title: "",
    year: "",
    materials: "",
    image_url: "",
    show_id: "",
    })
  
  useEffect(() => {
    setFormData({
    ...formData,
    artist_id: currentUser?.id,})
  }, [currentUser])

  const handleChange = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })

  const handleWorkChange = (event) =>
    setWorkData({
      ...workData,
      [event.target.name]: event.target.value,
      show_id: showID,
    })

    const handleSubmit = async (event) => {
      event.preventDefault()
      const show = await createShow(formData)
      setShowID(show.id)
    }

    const handleWorkSubmit = async (event) => {
      event.preventDefault()
      await createWork(workData)
    }

  return(
    <div className="create-show">
      <h1>Create a header for your show:</h1>
      <form className="create-show-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="header-input">
        <label htmlFor="title">show title: </label>
        <input
          name="title"
          type="text"
          placeholder="show title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        </div>
        <div className="header-input">
        <label htmlFor="description">description: </label>
        <textarea
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          required
        />
        </div>
        <div className="header-input">
        <label htmlFor="image_url">image URL: </label>
        <input
          name="image_url"
          type="text"
          value={formData.image_url}
          onChange={handleChange}
          required
        />
        </div>
      <button type="submit">submit</button>
      </form >
      <h1>add works to your show:</h1>
      <form onSubmit={handleWorkSubmit} className="create-work-form">
        <div className="work-input">
          <label htmlFor="title">work title: </label>
          <input 
            type="text" 
            name="title"
            value={workData.title}
            onChange={handleWorkChange}
          />
        </div>
        <div className="work-input">
        <label htmlFor="year">year: </label>
        <input 
          type="text"
          name="year"
          value={workData.year}
          onChange={handleWorkChange}
        />
        </div>
        <div className="work-input">

        <label htmlFor="materials">materials: </label>
        <input 
          type="text"
          name="materials"
          value={workData.materials}
          onChange={handleWorkChange}
        />
        </div>
        <div className="work-input">
        <label htmlFor="image_url">work image URL: </label>
        <input 
          type="text"
          name="image_url"
          value={workData.image_url}
          onChange={handleWorkChange}
        />
        </div>
        <button onClick={handleWorkSubmit}>submit work</button>
      </form>
    </div>
  )
}

export default ShowCreate