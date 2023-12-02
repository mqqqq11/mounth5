import { useDispatch } from 'react-redux';
import data from '../data/products.json';
import { productsActions } from '../store/productsSlice';
import { countActions } from '../store/count';


export const ProductsPage = () => {

  const dispatch = useDispatch()

  const handleBuy = () => {
    dispatch(productsActions.productsId())
    dispatch(countActions.countIncrement(1))
  }
  return (
    <>
      <div className="goods">
        {data.map((dat) => (
          <div key={dat.id} className='dat'>

            <div className='image'>
              <img src={dat.picture} alt="dat tovar" />
            </div>

            <div className='text'>
              <span>{dat.name}</span>
              <span>{dat.price}</span>
            </div>

              <div className="btn">
                  <button onClick={() => handleBuy(dat)}>Купить</button>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};