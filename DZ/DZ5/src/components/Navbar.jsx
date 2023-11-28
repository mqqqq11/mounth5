
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Товары</Link>
                    </li>
                    <li>
                        <Link to='/shopping'>Корзина</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
