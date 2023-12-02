import { useDispatch } from 'react-redux'

import classes from './CountChange.module.sass'
import { BasketAction } from '../../redux/slices/BasketSlice.jsx'


export const CountChange = ({ setFindProduct, findProduct }) => {
    const dispatch = useDispatch()

    const changeQuantity = (productId, newQuantity) => {
        if (!newQuantity) {
            setFindProduct(null)
            dispatch(BasketAction.removeFromBasket(productId))
        }
        else if (productId && newQuantity) {
            dispatch(BasketAction.editBasketItem({ id: productId, count: newQuantity}))
        }
    }

    return (
        <div className={classes.CountChange}>
            <button onClick={() => changeQuantity(findProduct?.id, findProduct?.count - 1)}>minus</button>
            <p>{findProduct?.count}</p>
            <button onClick={() => changeQuantity(findProduct?.id, findProduct?.count + 1)}>plus</button>
        </div>
    )
}