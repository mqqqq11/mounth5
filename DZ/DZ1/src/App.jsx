import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

import { MainPage } from './pages/MainPage'
import { PostsPage } from './pages/PostsPage'
import { CreatePost } from './pages/CreatePost'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/posts' element={<PostsPage/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
