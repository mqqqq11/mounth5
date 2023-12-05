import { useDispatch, useSelector } from "react-redux"

import { fetchStore } from "../store/storeReducer"
import { useEffect } from "react"
export const StorePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.store)
    
    useEffect(() => {
        dispatch(fetchStore())
    },[])

  return (
    <>
        {[products.map((product) => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
            </div>
        ))]}
    </>
  )
}
