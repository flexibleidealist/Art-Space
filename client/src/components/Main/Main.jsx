import { Route } from "react-router-dom"
import Home from "../../screens/Home/Home.jsx"
import Show from "../../screens/Show/Show.jsx"
import ShowCreate from "../../screens/ShowCreate/ShowCreate.jsx"
import ShowEdit from "../../screens/ShowEdit/ShowEdit.jsx"
import ShowMenu from "../../screens/ShowMenu/ShowMenu.jsx"
import WorkDetail from "../../screens/WorkDetail/WorkDetail.jsx"
import WorkEdit from "../../screens/WorkEdit/WorkEdit.jsx"
import Profile from "../../screens/Profile/Profile.jsx"
import "./Main.css"

function Main(props) {
  const { currentUser, setCurrentUser } = props
  return(
    <div className="main">
      <Route exact path="/">
        <Home currentUser={currentUser}/>
      </Route>
      <Route exact path="/shows/:id/edit">
        <ShowEdit currentUser={currentUser}/>
      </Route>
      <Route exact path="/shows/:id">
        <Show currentUser={currentUser}/>
      </Route>
      <Route exact path="/create-show">
        <ShowCreate currentUser={currentUser}/>
      </Route>
      <Route exact path="/shows">
        <ShowMenu />
      </Route>
      <Route exact path="/works/:id/edit">
        <WorkEdit currentUser={currentUser}/>
      </Route>
      <Route exact path="/works/:id">
        <WorkDetail currentUser={currentUser}/>
      </Route>
      <Route exact path="/artists/:id">
        <Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
    </div>
  )
}

export default Main