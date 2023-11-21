
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li className='li'>
                        <NavLink to='/'>Posts</NavLink>
                        <NavLink to='/user/:id'>ddd</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}