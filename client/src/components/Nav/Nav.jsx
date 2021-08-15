import { useHistory, Link } from "react-router-dom"
import { signout } from "../../services/artists.js"
import "./Nav.css"

function Nav(props) {
  const history = useHistory()
  const { currentUser, setCurrentUser } = props
  
  const handleClick = async () => {
    await signout
    setCurrentUser(null)
    history.push("/")
  }

  const userNavBar = (
    <div className="user-nav-bar">
      <p>{`Hello, ${currentUser?.username}`}</p>
      <Link to="/shows">shows</Link>
      <Link to="/create-show">create show</Link>
      <button className="signout-button" onClick={handleClick}>sign out</button>
    </div>
  )

  const defaultNavBar = (
    <div className="default-nav-bar">
      <Link to="/shows" >shows</Link>
      <Link to="/artists" >sign up</Link>
      <Link to="/artists/login" >sign in</Link>
    </div>
  )

  return(
    <div className="nav">
      <Link to="/">ArtSpace</Link>
      { currentUser ? userNavBar : defaultNavBar }
    </div>
  )
}

export default Nav