import Nav from "../Nav/Nav.jsx"

function Layout(props) {
  const { currentUser, setCurrentUser } = props
  return(
    <div className="layout">
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  )
}

export default Layout