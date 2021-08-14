import Nav from "../Nav/Nav.jsx"

function Layout(props) {
  const { setCurrentUser } = props
  return(
    <div className="layout">
      <Nav setCurrentUser={setCurrentUser}/>
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  )
}

export default Layout