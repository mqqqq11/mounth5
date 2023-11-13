import { useEffect } from "react"
import { useState } from "react"


export const PostsPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        fetch('https://dummyjson.com/posts')
        .then(responce => responce.json())
        .then(json => setPosts(json.posts))
    }, [])
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
