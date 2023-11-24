
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Заполнить форму</Link>
                    </li>
                    <li>
                        <Link to='/data'>Данные</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
