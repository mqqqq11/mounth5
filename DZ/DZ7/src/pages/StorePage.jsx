import { useDispatch, useSelector } from "react-redux"

import { fetchStore } from "../store/storeSlicer"
import { useEffect } from "react"
import { basketActions } from "../store/basketSlicer"
export const StorePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.store)
    
    useEffect(() => {
        dispatch(fetchStore())
    },[])

    if(products.loading) {
        return <span>Loading...</span>
    }

    const handleBuy = (product) => {
        dispatch(basketActions.addItem(product))
    }

  return (
    <>
        {products.items.products && products.items.products.map((product) => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>Цена: {product.price}</p>
                <button onClick={() => handleBuy(product)}>Купить</button>
            </div>
        ))}
    </>
  )
}
