import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <header>
            <ul>
                <li>
                    <NavLink to='/'>Товары</NavLink>
                </li>
                <li>
                    <NavLink to='/basket'>Корзина</NavLink>
                </li>
            </ul>
        </header>
    </>
  )
}
