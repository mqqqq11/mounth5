
import { Outlet } from 'react-router-dom'
import  {Navbar}  from './Navbar'

export const Layout = () => {
  return (
    <>
        <Navbar/>

        <div className="content">
            <Outlet/>
        </div>

        <footer>
            <span>created Azamat</span>
        </footer>
    </>
  )
}
