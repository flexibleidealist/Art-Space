import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getShow } from "../../services/shows.js"
import { getArtist } from "../../services/artists.js"
import Work from "../../components/Work/Work.jsx"
import ShowFooter from "../../components/ShowFooter/ShowFooter.jsx"
import "./Show.css"
import ShowHeader from "../../components/ShowHeader/ShowHeader.jsx"

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
      <ShowHeader show={show} />
      <section className="works-section">
      {show.works ? show.works.map(work => (
        <Work key={work.id} work={work}/>
      )) : <h3>loading...</h3>}
      </section>
      <ShowFooter artist={artist} />
    </div>
  )
}

export default Show