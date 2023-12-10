import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/PostsSlice";
export const PostsPage = () => {
  const posts = useSelector((state) => state.posts);
  const added = useSelector((state) => state.addPosts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (posts.loading) {
    return <span>Loading ...</span>;
  }

  console.log(posts);
  return (
    <>
      <h1>Posts</h1>

      <ul className="posts">
        {posts.postsMassive.posts &&
          posts.postsMassive.posts.map((post) => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}

        {added.map((addedPost) => (
          <li key={addedPost.id}>{addedPost.name}</li>
        ))}
      </ul>
    </>
  );
}; 