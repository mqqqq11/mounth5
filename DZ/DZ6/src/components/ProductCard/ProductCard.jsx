import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import classes from './ProductCard.module.sass'
import { BasketAction } from '../../redux/slices/BasketSlice.jsx'
import { CountChange } from '../CountChange/CountChange.jsx'


export const ProductCard = ({ item }) => {
    const { basketArray } = useSelector(state => state.basket)
    const [ findProduct, setFindProduct ] = useState(null)
    const dispatch = useDispatch()

    const handleBuy = item => dispatch(BasketAction.addToBasket({...item, count: 1}))

    useEffect(() => {
        const findItem = basketArray.find((newItem) => newItem.id === item.id)
        findItem ? setFindProduct(findItem) : setFindProduct(null)
    }, [basketArray, handleBuy])

    return (
        <div className={classes.ProductCard}>
            <img src={item?.picture} alt="picture"/>
            <div className={classes.info}>
                <h4>{item?.name}</h4>
                <p>price: {item?.price}</p>
                {findProduct
                    ? <CountChange findProduct={findProduct} setFindProduct={setFindProduct}/>
                    : <button className={classes.info__buy} onClick={() => handleBuy(item)}>Купить</button>
                }
            </div>
        </div>
    )
}