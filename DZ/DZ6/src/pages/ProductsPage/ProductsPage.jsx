import { useSelector } from 'react-redux'

import classes from './ProductsPage.module.sass'
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx'


export const ProductsPage = () => {
    const { productsArray } = useSelector(state => state.products)

    return (
        <div className={classes.ProductsPage}>
            <div className={'container'}>
                <div className={classes.ProductsPage__inner}>
                    <div className={classes.productsList}>
                        {productsArray && productsArray.map(item =>
                            <ProductCard key={item.id} item={item}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}