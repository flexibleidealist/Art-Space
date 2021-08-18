import { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { updateShow, getShow, deleteShow } from "../../services/shows.js"
import { createWork } from "../../services/works.js"
import WorkPreview from "../../components/WorkPreview/WorkPreview.jsx"
import "./ShowEdit.css"

function ShowEdit() {
  const params = useParams()
  const history = useHistory()
  const [workAdded, setWorkAdded] = useState(false)
  const [showData, setShowData] = useState({
    title: "",
    description: "",
    image_url: "",
    artist_id: "",
    works: [],
  })
  const [workData, setWorkData] = useState({
    title: "",
    year: "",
    materials: "",
    show_id: params.id,
  })

  useEffect(() => {
    const fetchShow = async (id) => {
      const current_show = await getShow(id) 
      setShowData(current_show)
  } 
    fetchShow(params.id)
  }, [workAdded])

  const handleChange = (event) => 
    setShowData({
      ...showData,
      [event.target.name]: event.target.value,
    })

    const handleWorkChange = (event) =>
      setWorkData({
        ...workData,
        [event.target.name]: event.target.value,
      })

    const handleSubmit = async (event) => {
      event.preventDefault()
      await updateShow(params.id, showData)
      // history.push(`/shows/${showData.id}`)
    }

    const handleWorkSubmit = async (event) => {
      event.preventDefault()
      await createWork(workData)
      setWorkAdded(!workAdded)
    }

    const handleDeleteShow = async () => {
      await deleteShow(showData.id)
      history.push("/")
    }

  return(
    <div className="edit-show-container">
      <h1>Edit the show header:</h1>
      <form className="header-editor-form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">show title:</label>
          <input 
            type="text" 
            name="title"
            value={showData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="description">description:</label>
          <textarea 
            rows="5"
            type="text" 
            name="description"
            value={showData.description}
            onChange={handleChange}
          />
          </div>
          <div className="input">
          <label htmlFor="image_url">image URL:</label>
          <input 
            type="text"
            name="image_url"
            value={showData.image_url} 
            onChange={handleChange}
          />
        </div>
          <button type="submit">save</button>
      </form>
      <h1>Add works to your show:</h1>
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
        <button onClick={handleWorkSubmit}>add work</button>
      </form>
      <h1>Edit works currently in your show:</h1>
      {showData.works.map(work => (
        <div className="work-to-edit">
          <WorkPreview work={work} workAdded={workAdded} setWorkAdded={setWorkAdded} />
        </div>
      ))}
      <div className="show-edit-buttons">
        <Link to={`/shows/${params.id}`}><button>view show</button></Link>
        <button onClick={handleDeleteShow}>delete show</button>
      </div>
    </div>
  )
}

export default ShowEdit