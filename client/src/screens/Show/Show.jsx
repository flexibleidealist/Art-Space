import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getShow } from "../../services/shows.js"
import { getArtist } from "../../services/artists.js"
import "./Show.css"

function Show(props) {
  const params = useParams()
  const { currentUser } = props
  const [show, setShow] = useState({})
  const [artist, setArtist] = useState({})

  useEffect(() => {
    const fetchShow = async (id) => {
      const current_show = await getShow(id) 
      setShow(current_show)
  } 
    fetchShow(params.id)
  }, [])

  useEffect(() => {
    const fetchArtist = async (id) => {
      const showArtist = await getArtist(id)
      setArtist(showArtist)
    }
    fetchArtist(show.artist_id)
  }, [show])

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
        <img src={artist.image_url} className="artist-pic"></img>
        <p className="artist-statement">{artist.artist_statement}</p>
      </footer>
      
    </div>
  )
}

export default Show