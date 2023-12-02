import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.sass'

export const Header = () => {
    const { basketArray } = useSelector(state => state.basket)

    const quantity = basketArray.reduce((acc, item) => acc + item?.count, 0)

    return (
        <>
            <div className={classes.Header}>
                <div className={'container'}>
                    <div className={classes.Header__inner}>
                        Header
                        <ul>
                            <li>
                                <NavLink to='/'>Товары</NavLink>
                            </li>
                            <li>
                                <NavLink to='/basket'>Корзина: {quantity}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.Header__divider}></div>
        </>
    )
}