import { useState, useEffect } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { updateShow, getShow, deleteShow } from "../../services/shows.js"
import Work from "../../components/Work/Work.jsx"
function ShowEdit() {
  const params = useParams()
  const history = useHistory()
  const [showData, setShowData] = useState({
    title: "",
    description: "",
    image_url: "",
    artist_id: "",
    works: [],
  })
  useEffect(() => {
    const fetchShow = async (id) => {
      const current_show = await getShow(id) 
      setShowData(current_show)
  } 
    fetchShow(params.id)
  }, [])

  const handleChange = (event) => 
    setShowData({
      ...showData,
      [event.target.name]: event.target.value,
    })

    const handleSubmit = async (event) => {
      event.preventDefault()
      await updateShow(params.id, showData)
      history.push(`/shows/${showData.id}`)
    }

    const handleClick = async () => {
      await deleteShow(showData.id)
      history.push("/")
    }

  return(
    <div className="edit-show-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">show title:</label>
        <input 
          type="text" 
          name="title"
          value={showData.title}
          onChange={handleChange}
        />
          <label htmlFor="description">description:</label>
          <input 
            type="text" 
            name="description"
            value={showData.description}
            onChange={handleChange}
          />
          <label htmlFor="image_url">image URL:</label>
          <input 
            type="text"
            name="image_url"
            value={showData.image_url} 
            onChange={handleChange}
          />
          <button type="submit">submit</button>
      </form>
      <button onClick={handleClick}>delete show</button>
      {showData.works.map(work => (
        <div className="work-to-edit">
          <Work work={work} />
          <Link to={`/works/${work.id}/edit`}><button>edit work details</button></Link>
        </div>
      ))}
    </div>
  )
}

export default ShowEdit