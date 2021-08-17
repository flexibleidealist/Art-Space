import "./ShowHeader.css"

function ShowHeader(props){
  const { show } = props
  return(
    <header className="show-header">
      <div className="show-header-text"> 
        <h1>{show.title}</h1>
        <p>{show.description}</p>
      </div>
      <img className ="show-poster" src={show.image_url} alt="show poster"></img>
    </header>
  )
}

export default ShowHeader