import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getShow } from "../../services/shows.js"

function Show() {
  const params = useParams()
  const [show, setShow] = useState({})

  useEffect(() => {
    const fetchShow = async (id) => {
      const current_show = await getShow(id) 
      setShow(current_show)
  } 
    fetchShow(params.id)
  }, [])

  return(
    <div>
      <header className="show-header">
        <h1>{show.title}</h1>
        <p>{show.description}</p>
        <img src={show.image_url} alt="show poster"></img>
      </header>
      {show.works ? show.works.map(work => (
        <div key={work.id} className="work-container">
          <img src={`${work.image_url}`}></img>
          <div className="work-button-container">
            <button className="work-button"></button>
          </div>
        </div>
      )) : <h3>loading...</h3>}
      <footer className="show-footer">
        <img className="artist-pic"></img>
        <p className="artist-statement">artist's statement here</p>
      </footer>
      
    </div>
  )
}

export default Show