
import { useParams } from "react-router-dom"

export const OnePostPage = () => {

    const {id} = useParams()


  return (
    <div>OnePostPage id: {id}</div>
  )
}
