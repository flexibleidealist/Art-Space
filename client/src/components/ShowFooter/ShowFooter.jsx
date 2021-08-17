import "./ShowFooter.css"

function ShowFooter(props) {
  const { artist } = props
  return(
    <footer className="show-footer">
      <img src={artist.image_url} className="artist-pic"></img>
      <p className="artist-statement">{artist.artist_statement}</p>
    </footer>
  )
}

export default ShowFooter