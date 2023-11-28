
import { useDispatch, useSelector } from 'react-redux';
import goods from '../data/goods.json';
import { useState } from 'react';


export const StorePage = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.count)
  
  const [selected, setSelected] = useState('');

  const handleBuy = (good) => {
    dispatch({type: 'GOODS_ID', payload: good})
    dispatch({type: 'INCREMENT'})
  }
  return (
    <>
      <div className="title">
        <h1>Корзина: {counter}</h1>
      </div>


      <div className="goods">
        {goods.map((good) => (
          <div key={good.id} className='good'>

            <div className='image'>
              <img src={good.picture} alt="good tovar" />
            </div>

            <div className='text'>
              <span>{good.name}</span>
              <span>{good.price}</span>
            </div>

              <div className="btn">
                  <button onClick={() => {setSelected(selected === good ? '' : good)}}>
                      {selected === good ? 'Скрыть' : 'Подробнее'}
                  </button>

                  <span>{selected === good && good.description}</span>
              </div>

              <div className="btn">
                  <button onClick={() => handleBuy(good)}>Купить</button>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};