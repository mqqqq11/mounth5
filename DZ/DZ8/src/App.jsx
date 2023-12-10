import { Routes ,Route } from "react-router-dom"
import { Layout } from "./componnets/Layout"
import { PostsPage } from "./pages/PostsPage"
import { AddPostPage } from "./pages/AddPostPage"
import {EditPostsPage} from "./pages/EditPostsPage"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<PostsPage/>}/>
          <Route path="add" element={<AddPostPage/>}/>
          <Route path="edit" element={<EditPostsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
