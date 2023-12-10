import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add'>Add post</NavLink>
                    </li>
                    <li>
                        <NavLink to='/edit'>Edit posts</NavLink>
                    </li>
                </ul>
            </nav>
        </header> 
    </>
  )
}
