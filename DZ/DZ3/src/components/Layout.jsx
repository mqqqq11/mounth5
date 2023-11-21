
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>

        <div className="content">
            <Outlet/>
        </div>

        <footer>
            <span>created Azamat</span>
        </footer>
    </>
  )
}