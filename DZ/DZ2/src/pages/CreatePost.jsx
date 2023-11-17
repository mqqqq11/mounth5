import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const CreatePost = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')

    const handlePosts = async() => {
        axios.post('https://dummyjson.com/posts/add', {
            title: value,
            userId: 1
        })
        .then(() => {
            navigate('/'),
            console.log(value);
        })
    }
  return (
    <div>
        <div>CreatePost
            <input onChange={e => setValue(e.target.value)} type="text" value={value} />
            <button type="button" onClick={handlePosts}>Create</button>
        </div>
        
    </div>
  )
}
