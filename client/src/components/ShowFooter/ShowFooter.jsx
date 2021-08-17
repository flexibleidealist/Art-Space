import "./ShowFooter.css"

function ShowFooter(props) {
  const { artist } = props
  return(
    <footer className="show-footer">
        <img src={artist.image_url} className="artist-pic"></img>
      <div className="footer-text">
        <h1>{artist.name}</h1>
        <p className="artist-statement">{artist.artist_statement}</p>
      </div>
    </footer>
  )
}

export default ShowFooter