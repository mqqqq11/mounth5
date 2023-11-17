import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


export const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect (() => {
        axios.get('https://dummyjson.com/posts')
        .then(resp => {
            setPosts(resp.data.posts)
        })
    },[])
  return (
    <>
        <div>PostsPage
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    </>
  )
}