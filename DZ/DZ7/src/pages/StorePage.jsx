import { useDispatch, useSelector } from "react-redux"

import { fetchStore } from "../store/storeSlicer"
import { useEffect } from "react"
export const StorePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.store)
    
    useEffect(() => {
        dispatch(fetchStore())
    },[])

    console.log(products);

    if(products.loading) {
        return <span>Loading...</span>
    }

  return (
    <>
        {products.items.products && products.items.products.map((product) => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>Цена: {product.price}</p>
                <button onClick={() => dispatch()}>Купить</button>
            </div>
        ))}
    </>
  )
}
