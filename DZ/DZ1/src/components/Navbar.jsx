
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Main</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link to='/create-post'>CreatePost</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
