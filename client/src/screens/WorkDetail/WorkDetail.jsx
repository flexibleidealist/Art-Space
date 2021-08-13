import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getWork } from "../../services/works.js"

function WorkDetail() {
  const [work, setWork] = useState({})
  const params = useParams()
  useEffect(() => {
    const fetchWork = async (id) => {
      const current_work = await getWork(id)
      setWork(current_work)
      console.log(work)
    }
    fetchWork(params.id)

  },[])

  return(
    <h1>{work.title}</h1>
  )
}

export default WorkDetail