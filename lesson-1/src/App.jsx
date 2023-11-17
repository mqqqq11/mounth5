
import {Routes, Route} from 'react-router-dom'
import './App.css'


import {MainPage} from './pages/MainPage'
import { PostsPage } from './pages/PostsPage'
import { OnePostPage } from './pages/OnePostPage'
import { Layout } from './components/Layout'
import { LoginPage } from './pages/LoginPage'

export const paths = {
  main: "/",
  posts: "/posts",
  post: "/posts/:id",
  login: "/login",
  profile: "/my-profile",
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}> 
          <Route index element={<MainPage/>}/>
          <Route path='posts' element={<PostsPage/>}/>
          <Route path='posts/:id' element={<OnePostPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
