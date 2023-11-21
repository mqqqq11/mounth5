import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

import { PostsPage } from './pages/PostsPage'
import { InfoPost } from './pages/InfoPost'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<PostsPage/>}/>
          <Route path='/user/:id' element={<InfoPost/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App