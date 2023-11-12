import { useEffect, useState } from "react"



export const PostsPage = () => {
  const [posts, setPost] = useState ([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then( json => setPost(json))
  }, [])
  return ( 
    <div>PostsPage
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
