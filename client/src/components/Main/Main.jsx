import { Route } from "react-router-dom"
import Home from "../../screens/Home/Home.jsx"
import Show from "../../screens/Show/Show.jsx"
import ShowCreate from "../../screens/ShowCreate/ShowCreate.jsx"
import ShowEdit from "../../screens/ShowEdit/ShowEdit.jsx"
import ShowMenu from "../../screens/ShowMenu/ShowMenu.jsx"
import WorkDetail from "../../screens/WorkDetail/WorkDetail.jsx"
import WorkEdit from "../../screens/WorkEdit/WorkEdit.jsx"


function Main() {
  return(
    <div className="main">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shows/:id">
        <Show />
      </Route>
      <Route exact path="/shows">
        <ShowCreate />
      </Route>
      <Route exact path="/edit-show">
        <ShowEdit />
      </Route>
      <Route exact path="/shows">
        <ShowMenu />
      </Route>
      <Route exact path="/works/:id">
        <WorkDetail />
      </Route>
      <Route exact path="/edit-work">
        <WorkEdit />
      </Route>
    </div>
  )
}

export default Main