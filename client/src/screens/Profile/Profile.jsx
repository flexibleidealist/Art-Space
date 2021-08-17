import { useState, useEffect } from "react"
import { updateArtist } from "../../services/artists.js"
import ShowFooter from "../../components/ShowFooter/ShowFooter.jsx"
import "./Profile.css"

function Profile(props) {
  const { currentUser, setCurrentUser } = props
  const [profileData, setProfileData] = useState({
    name: "",
    artist_statement: "",
    image_url: "",
  })

  useEffect(() => {
      setProfileData({
        name: currentUser.name,
        artist_statement: currentUser.artist_statement,
        image_url: currentUser.image_url,
      })
    }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedArtist = await updateArtist(currentUser.id, profileData)
    setCurrentUser(updatedArtist)
  }

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    })
  }

  return(
    <div className="profile-form-container">
      <form id="profile-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="input">
        <label htmlFor="name">name:</label>
          <input 
            name="name"
            type="text"
            value={profileData.name}
            placeholder="name"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="artist_statement">artist's statement:</label>
          <textarea
            name="artist_statement"
            rows="10"
            value={profileData.artist_statement}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="image_url">profile image URL:</label>
          <input
            name="image_url"
            type="text"
            value={profileData.image_url}
            placeholder="URL for Profile Pic"
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div className="profile-preview visible">
        <ShowFooter artist={currentUser} />
      </div>
    </div>
  )
}
export default Profile