import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect (() => {
        axios.get('https://dummyjson.com/users')
        .then(resp => {
            setPosts(resp.data.users)
        })
    },[])
  return (
    <div>
        <div className="main">PostsPage
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/user/${post.id}`}>{post.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}