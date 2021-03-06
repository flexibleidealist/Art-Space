import { useState } from "react"
import { editWork, deleteWork } from "../../services/works"
import "./WorkPreview.css"
function WorkPreview(props) {
  
  const { work, workAdded, setWorkAdded } = props
  const [workData, setWorkData] = useState({
    title: work.title,
    year: work.year,
    materials: work.materials,
    image_url: work.image_url,
    show_id: work.show_id,
    })

  const handleWorkChange = (event) => {
    setWorkData({
      ...workData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSave = async (event) => {
    event.preventDefault()
    await editWork(work.id, workData)
    setWorkAdded(!workAdded)
  }

  const handleDelete = async () => {
    await deleteWork(work.id)
  }
  return(
    <div className="work-preview-container">
      <img src={`${work.image_url}`} alt={work.title}></img>
        <form className="work-preview-form">
        <div className="work-input">
          <label htmlFor="title">title:</label>
          <input 
          type="text"
          name="title"
          value={workData.title}
          onChange={handleWorkChange}
          />
        </div>
        <div className="work-input">
          <label htmlFor="year">materials:</label>
          <input 
          type="text"
          name="year"
          value={workData.year}
          onChange={handleWorkChange}
          />
        </div>
        <div className="work-input">
          <label htmlFor="materials">materials:</label>
          <input 
          type="text"
          name="materials"
          value={workData.materials}
          onChange={handleWorkChange}
          />
        </div>
        <div className="work-input">
          <label htmlFor="image_url" >work image URL:</label>
          <input 
          type="text"
          name="image_url"
          value={workData.image_url}
          onChange={handleWorkChange}
          />
          </div>
          <div className="buttons">
            <button onClick={handleSave}>save</button>
            <button onClick={handleDelete}>remove work</button>
          </div>
        </form>
      </div>
  )
}

export default WorkPreview