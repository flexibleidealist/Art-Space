import { useState, useEffect } from "react"
import "./Home.css"

function Home(props){
  const [resting, setResting] = useState(false)

  useEffect(() => {
    setResting(true)
  }, [])

  return(
    <div className="home">
      <svg width="100vw" height="100vh">
        <circle 
          id="home-circle-1"  
          cx="75vw" 
          cy="50vh" 
          r="12vw" 
          className={ resting ? "rest-position-circle-1" : "start-position"}
        />
        
        <circle 
          id="home-circle-2"  
          cx="100vw" 
          cy="100vh" 
          r="50vw"
        />
        <circle 
          id="home-circle-3"  
          cx="100vw" 
          cy="0" 
          r="50vw" /> 
        <text 
          id="home-title-text"
          font-size="3.5em" 
          fill="white" 
          x="10vw" 
          y="10vw">
            ArtSpace
        </text>
        <text
        font-size="3em"
        fontStyle="italic" 
        fill="white" 
        x="11vw" 
        y="15vw"
        
        >
          share your creativity
        </text>
      
      </svg>

    </div>
  )
}

export default Home