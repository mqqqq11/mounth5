
import { useParams, useNavigate } from "react-router-dom"

export const OnePostPage = () => {

    const {id} = useParams()
    const navigate = useNavigate()

  return (
    <div>
      <p>OnePostPage id: {id}</p>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
}
