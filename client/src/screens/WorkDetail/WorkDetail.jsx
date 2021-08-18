import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getWork } from "../../services/works.js"
import "./WorkDetail.css"

function WorkDetail() {
  const [work, setWork] = useState({})
  const params = useParams()

  useEffect(() => {
    const fetchWork = async (id) => {
      const current_work = await getWork(id)
      setWork(current_work)
    }
    fetchWork(params.id)

  },[])

  return(
    <div className="work-detail">
      <img src={work.image_url} alt={work.title} />
        <div className="work-text">
          <h1 className="work-title">{work.title}</h1>
          <h1>{work.year}</h1>
          <h1>{work.materials}</h1>
          <div className="work-detail-button-container">
            <Link to={`/shows/${work.show_id}`}><button>back</button></Link>
          </div>
        </div>
    </div>
  )
}

export default WorkDetail