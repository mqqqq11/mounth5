
import {Routes, Route} from 'react-router-dom'
import './App.css'


import {MainPage} from './pages/MainPage'
import { PostsPage } from './pages/PostsPage'
import { OnePostPage } from './pages/OnePostPage'
import { Layout } from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}> 
          <Route index element={<MainPage/>}/>
          <Route path='posts' element={<PostsPage/>}/>
          <Route path='posts/:id' element={<OnePostPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
