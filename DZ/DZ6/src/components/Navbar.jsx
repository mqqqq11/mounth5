import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
export const Navbar = () => {
    const counter = useSelector(state => state.count.count)
    return (
        <>
            <header>
                <ul>
                    <li>
                        <NavLink to='/'>Товары</NavLink>
                    </li>
                    <li>
                        <NavLink to='/basket'>Корзина {counter}</NavLink>
                    </li>
                </ul>
            </header>
        </>
  )
}
