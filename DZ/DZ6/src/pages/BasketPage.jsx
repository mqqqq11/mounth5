import { useSelector } from "react-redux"

export const BasketPage = () => {
    const products = useSelector(state => state.products.products)
  return (
    <>
      <div>
        {products.map(product => (
          <div key={product.id}>

            <div>
              <img src={product.picture} alt="pr tovar" />
            </div>
            <div>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}
