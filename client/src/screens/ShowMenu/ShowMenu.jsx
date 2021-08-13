import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllShows } from "../../services/shows.js"

function ShowMenu() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const allShows = await getAllShows();
      setShows(allShows);
      
    };
    fetchShows();
    console.log(shows);
  }, []);

  return(
    <div>
      {shows.map((show) => (
        <Link to={`/shows/${show.id}`}> 
          <div className="show-link" key={show.id}>
          <h1>{show.title}</h1>
          </div>
        </Link>
      ))}
    </div>
    
  )
}

export default ShowMenu