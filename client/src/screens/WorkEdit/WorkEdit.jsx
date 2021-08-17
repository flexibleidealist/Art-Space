import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { getWork, editWork, deleteWork } from "../../services/works.js"

function WorkEdit() {
  const params = useParams()
  const history = useHistory()
  const [workData, setWorkData] = useState({
    title: "",
    year: "",
    materials: "",
    image_url: "",
    artist_id: "",
  })

  useEffect(() => {
    const fetchWork = async (id) => {
    const current_work = await getWork(id)
    setWorkData(current_work)
  }
    fetchWork(params.id)
  }, [])

  const handleChange = (event) => {
    setWorkData({
      ...workData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await editWork(params.id, workData)
    history.push(`/works/${params.id}`)
  }

  const handleDelete = async () => {
    await deleteWork(workData.id)
    history.push(`/shows/${workData.show_id}/edit`)
  }
  return(
  <form onSubmit={handleSubmit} className="work-edit-form">
    <label htmlFor="title">work title:</label>
    <input 
      name="title"
      type="text"
      value={workData.title}
      onChange={handleChange}
    />
  
    <label htmlFor="year">year:</label>
    <input 
      name="year"
      type="text" 
      value={workData.year}
      onChange={handleChange}
    />
  
    <label htmlFor="materials">materials:</label>
    <input 
      name="materials"
      type="text" 
      value={workData.materials}
      onChange={handleChange}
    />
    <label htmlFor="image_url">image URL:</label>
    <input 
      name="image_url"
      type="text" 
      value={workData.image_url}
      onChange={handleChange}
    />
  <button type="submit">submit</button>
  <button onClick={handleDelete}>remove work from show</button>
  </form>  

)
}

export default WorkEdit