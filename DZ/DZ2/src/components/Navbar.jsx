
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    const navActive = ({isActive}) => (isActive ? 'navActive' : '')
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className={navActive} to='/'>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink className={navActive} to='/create-post'>CreatePost</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}