import { useDispatch, useSelector } from "react-redux"
import {fetchPosts, fetchEditPosts} from '../redux/EditSlice'
import { useEffect, useState } from "react"

export const EditPostsPage = () => {
  const [editPostId, setEditPostId] = useState(null);
  const [newPost, setNewPost] = useState("");

  const posts = useSelector((state) => state.editPosts.editPostsMassive);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleEdit = (id) => {
    setEditPostId(id);
    const postToEdit = posts.posts.find((post) => post.id === id);
    setNewPost(postToEdit.title);
  };

  const handleSave = (id) => {
    dispatch(fetchEditPosts({ postId: id, title: newPost }));

    setEditPostId(null);
    setNewPost("");
  };

  return (
    <>
      <h1>Edit posts</h1>

      <ul className="posts">
        {posts.posts &&
          posts.posts.map((post) => (
            <li key={post.id}>
              {editPostId === post.id ? (
                <div>
                  <input
                    type="text"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                  />
                  <button onClick={() => handleSave(post.id)}>Save</button>
                </div>
              ) : (
                <div>
                  {post.title}
                  <button onClick={() => handleEdit(post.id)}>Edit</button>
                </div>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};