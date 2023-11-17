import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export const PostsPage = () => {
  const [posts, setPost] = useState ([])

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      setPost(resp.data) 
    }
    getPosts()
  }, [])
  return ( 
    <div>PostsPage
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
