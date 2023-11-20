
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
                </ul>
            </nav>
        </header>
    </>
  )
}