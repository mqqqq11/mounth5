import { useSelector } from "react-redux"

export const BasketPage = () => {
    const basket = useSelector(state => state.basket)
    console.log(basket);
  return (
    <>
        <h1>Корзина</h1>
        {basket.items.map(item => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
            </div>
        ))}
    </>
  )
}
