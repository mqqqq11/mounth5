import { useSelector } from 'react-redux';

const Shopping = () => {
  const goodsItems = useSelector((state) => state.goods);

  return (
    <div>
      <h2>Корзина</h2>

      <div className='goods'>
        {goodsItems.map(goodItem => (
          <div key={goodItem.id} className='good'>

            <div className="image">
              <img src={goodItem.picture} alt="good tovar" />
            </div>

            <div className='text'>
              <span>{goodItem.name}</span>
              <span>{goodItem.price}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;