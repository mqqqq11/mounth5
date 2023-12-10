import { useDispatch, useSelector } from "react-redux"
import {fetchPosts, fetchEditPosts} from '../redux/EditSlice'
import { useEffect, useState } from "react"

export const EditPostsPage = () => {

  const [editPost, setEditPost] = useState('')
  const [newPost, setNewPost] = useState('')

  const posts = useSelector(state => state.editPosts.editPostsMassive)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())  
  }, [])

  const handleSave = (id) => {
    dispatch(fetchEditPosts({postId: id, title: newPost}))

    setEditPost('')
    setNewPost('')
  }

  return (
    <>
      <h1>Edit posts</h1>

      <ul className="posts">
        {posts.posts && posts.posts.map((post) => (
          <li key={post.id}>

            {post.title}

            {editPost === post.id ? (
              <div>
                <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
                <button onClick={() => handleSave(post.id)}>Save</button> 
              </div>
            ) : (
              <div>
                <button onClick={() => setEditPost(post.id)}>Edit</button>
              </div>
            )}

          </li>
        ))}
      </ul>
    </>
  )
}
