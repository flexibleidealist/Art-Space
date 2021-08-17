import "./Home.css"

function Home(props){
  const { currentUser } = props

  return(
    <div className="home">
      <h1>ArtSpace</h1>
      {/* <svg width="500" height="300">
        <circle id="home-circle-1"  cx="100" cy="100" r="100" />
        <circle id="home-circle-2"  cx="200" cy="175" r="100" />
        <circle id="home-circle-3"  cx="300" cy="200" r="100" />
      </svg> */}

    </div>
  )
}

export default Home