import { Link } from "react-router-dom"
import "./Work.css"
function Work(props) {
  const { work } = props
  return(
    <div className="work-container">
      <img src={`${work.image_url}`} alt={work.title}></img>
      <div className="work-button-container">
      <Link to={`/works/${work.id}`}><button>details</button></Link>
      </div>
    </div>
  )
}

export default Work