import { Link } from "react-router-dom"

function Work(props) {
  const { work } = props
  return(
    <div className="work-container">
      <img src={`${work.image_url}`}></img>
      <div className="work-button-container">
      <Link to={`/works/${work.id}`}><button className="work-button">details</button></Link>
      </div>
    </div>
  )
}

export default Work