import { useHistory } from "react-router-dom"
import { signout } from "../../services/artists.js"
function Nav(props) {
  const history = useHistory()
  const handleClick = async () => {
    await signout
    props.setCurrentUser(null)
    history.push("/")

  }
  return(
    <div className="nav">
      <button className="signout-button" onClick={handleClick}>sign out</button>
    </div>
  )
}

export default Nav