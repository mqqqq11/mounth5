import './css/Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <header className='navbar_head'>
            <nav>
                <ul className='navbar_ul'>
                    <li className='navbar_li'>
                        <Link to='/' className='link'>Main</Link>
                    </li>
                    <li className='navbar_li'>
                        <Link to='/posts' className='link'>Posts</Link>
                    </li>
                    <li className='navbar_li'>
                        <Link to='/create-post' className='link'>CreatePost</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
