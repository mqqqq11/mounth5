
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>MainPage</Link>
                </li>
                <li>
                    <Link to='posts'>Posts</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
