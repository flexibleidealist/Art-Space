import { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { verify } from "./services/artists.js"
import Main from "./components/Main/Main.jsx"
import SignIn from "./screens/SignIn/SignIn.jsx"
import SignUp from "./screens/SignUp/SignUp.jsx"
import Layout from "./components/Layout/Layout.jsx"
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const artist = await verify()
      artist ? setCurrentUser(artist) : setCurrentUser(null)
    }
    fetchUser()
  }, [])
  

  return (
    <div>
      <Layout currentUser={currentUser} setCurrentUser={setCurrentUser}>
        <Main currentUser={currentUser}/>
        <Route exact path="/artists/login">
          <SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/artists">
          <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
