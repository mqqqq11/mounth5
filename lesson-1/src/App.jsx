
import {Routes, Route} from 'react-router-dom'
import './App.css'


import {MainPage} from './pages/MainPage'

import { OnePostPage } from './pages/OnePostPage'
import { Layout } from './components/Layout'
import { LoginPage } from './pages/LoginPage'
import { PrivatePath } from './components/PrivatePath'
import { ParentPage } from './pages/ParentPage'




export const paths = {
  main: "/",
  posts: "/posts",
  post: "/posts/:id",
  login: "/login",
  profile: "/my-profile",
  privatePath: '/private'
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}> 
          <Route index element={<MainPage/>}/>

          <Route path='login' element={<LoginPage/>}>
            <Route path='private' element={<PrivatePath/>}/>
          </Route>

          {/* <Route path='counter' element={<CounterPage/>}/> */}
          <Route path='posts' element={<OnePostPage/>}/>
          <Route path='parent' element={<ParentPage/>}/>


        </Route>
      </Routes>
    </>
  )
}

export default App
