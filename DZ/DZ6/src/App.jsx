import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout.jsx'
import { ProductsPage } from './pages/ProductsPage/ProductsPage.jsx'
import { BasketPage } from './pages/BasketPage/BasketPage.jsx'


export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<ProductsPage/>}/>
                <Route path={'/basket'} element={<BasketPage/>}/>
            </Route>
        </Routes>
    )
}