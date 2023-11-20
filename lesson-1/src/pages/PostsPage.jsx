import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../api";


const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPosts = async () => {
      if (searchParams.get("user") !== null) {
        const resp = await API.get(`/posts?userId=${searchParams.get("user")}`);
        setPosts(resp.data);
      } else {
        const resp = await API.get("/posts");
        setPosts(resp.data);
      }
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      if (searchParams.get("user") !== null) {
        const resp = await API.get(`/posts?userId=${searchParams.get("user")}`);
        setPosts(resp.data);
      } else {
        const resp = await API.get("/posts");
        setPosts(resp.data);
      }
    };
    getPosts();
  }, [searchParams]);

  

  return (
    <div>
      PostsPage
      <div>
        <span onClick={() => setSearchParams({})}>Все посты</span>
        {[1, 2, 3, 4, 5].map((userId) => (
          <span onClick={() => setSearchParams({ user: userId })}>
            User: {userId}
          </span>
        ))}
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostsPage;