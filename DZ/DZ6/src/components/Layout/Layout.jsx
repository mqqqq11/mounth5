import { Outlet } from 'react-router-dom'

import classes from './Layout.module.sass'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'


export const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}