import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'

import { PostsPage } from './pages/PostsPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<PostsPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App