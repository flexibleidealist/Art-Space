function Layout(props) {
  return(
    <div className="layout">
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  )
}

export default Layout