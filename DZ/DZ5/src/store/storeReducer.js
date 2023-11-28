
// import goods from '../data/goods.json';

const initialState = {
    goods: [],
    count: 0
};

export const storeReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'GOODS_ID':
            return{...state, goods: [...state.goods, action.payload ]}
        case 'INCREMENT':
            return{...state, count: state.count + 1}
        default:
            return state
    }
}
