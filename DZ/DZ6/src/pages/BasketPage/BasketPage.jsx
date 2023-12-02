import { useSelector } from 'react-redux'

import classes from './BasketPage.module.sass'
import { BasketCard } from '../../components/BasketCard/BasketCard.jsx'


export const BasketPage = () => {
    const { basketArray } = useSelector(state => state.basket)

    return (
        <div className={classes.BasketPage}>
            <div className={'container'}>
                <div className={classes.BasketPage__inner}>
                    <div className={classes.productsList}>
                        {basketArray?.map(item =>
                            <BasketCard key={item.id} item={item}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}