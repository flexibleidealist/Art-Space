import { useState, useEffect } from "react"
import "./Home.css"

function Home(props){
  const [animate1, setAnimate1] = useState(false)
  const [animate2, setAnimate2] = useState(false)
  const [animate3, setAnimate3] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setAnimate1(true)
    }, 800);
  }, [])


  return(
    <div className="home">
      <svg width="100vw" height="100vh">
        <circle 
          id="home-circle-1"  
          cx="0vw" 
          cy="0vh" 
          r="1vw" 
          opacity=".75"
          className={ animate1 ? "animate-circle-1" : ""}
        />
        
        <circle 
          id="home-circle-2"  
          cx="100vw" 
          cy="0vh" 
          r="55vw"
          opacity=".75"

        />
        <circle 
          id="home-circle-3"  
          cx="100vw" 
          cy="100vh" 
          r="55vw" 
          opacity='.75'
          /> 
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
        y="15vw">
    
          share your passion
        </text>
      
      </svg>

    </div>
  )
}

export default Home