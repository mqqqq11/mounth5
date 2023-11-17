
import {NavLink} from 'react-router-dom'

const activeNavLink = ({isActive}) => (isActive ? 'active-navlink' : '')

export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink className={activeNavLink} to='/'>Main</NavLink>
                </li>
                <li>
                    <NavLink className={activeNavLink} to='posts'>Posts</NavLink>
                </li>

                <li>
                   <NavLink className={activeNavLink} to='login'>Login</NavLink> 
                </li>
            </ul>
        </nav>
    </div>
  )
}
