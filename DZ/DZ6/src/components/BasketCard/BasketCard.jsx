import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import classes from './BasketCard.module.sass'
import { BasketAction } from '../../redux/slices/BasketSlice.jsx'
import { CountChange } from '../CountChange/CountChange.jsx'


export const BasketCard = ({ item }) => {
    const { basketArray } = useSelector(state => state.basket)
    const [ findProduct, setFindProduct ] = useState(null)
    const dispatch = useDispatch()

    const handleRemove = id => dispatch(BasketAction.removeFromBasket(id))

    useEffect(() => {
        const findItem = basketArray.find((newItem) => newItem.id === item.id)
        findItem ? setFindProduct(findItem) : setFindProduct(null)
    }, [basketArray, handleRemove])

    return (
        <div className={classes.BasketCard}>
            <img src={item.picture} alt='picture'/>
            <div className={classes.info}>
                <h4>{item?.name}</h4>
                <p>price: {item?.price}</p>
                <button onClick={() => handleRemove(item.id)} className={classes.info__remove}>
                    remove
                </button>
                <CountChange
                    findProduct={findProduct}
                    setFindProduct={setFindProduct}
                />
            </div>
        </div>
    )
}