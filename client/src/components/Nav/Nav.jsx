import { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllShows } from "../../services/shows.js"
import { signout } from "../../services/artists.js"
import "./Nav.css"

function Nav(props) {
  const [show, setShow] = useState([])
  const history = useHistory()
  const { currentUser, setCurrentUser } = props
  
  useEffect(() => {
    const fetchShows = async () => {
      const allShows = await getAllShows();
      const matchingShow = allShows.filter(show => show.artist_id === currentUser?.id)
      setShow(matchingShow)
    };
    fetchShows();
  }, [currentUser])

  const handleClick = async () => {
    await signout
    setCurrentUser(null)
    history.push("/")
  }

  const userNavBar = (
    <div className="user-nav-bar">
      <p>{`Hello, ${currentUser?.username}`}</p>
      <Link to="/shows">browse shows</Link>
      {show[0]?.id ? 
        <Link to={`/shows/${show[0].id}/edit`}>edit my show</Link>
        :
        <Link to="/create-show">create show</Link>
      }
      <Link to={`/artists/${currentUser?.id}`}>my profile</Link>
      <button className="signout-button" onClick={handleClick}>sign out</button>
    </div>
  )

  const defaultNavBar = (
    <div className="default-nav-bar">
      <Link to="/shows">browse shows</Link>
      <Link to="/artists">sign up</Link>
      <Link to="/login">sign in</Link>
    </div>
  )

  return(
    <div className="nav">
      <Link id="logo" to="/">ArtSpace</Link>
      { currentUser ? userNavBar : defaultNavBar }
    </div>
  )
}

export default Nav