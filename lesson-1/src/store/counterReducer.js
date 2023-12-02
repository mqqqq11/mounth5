const initialState = {
    counter: 100,
  };
  
  // {type: "INCREASE"}
  // {type: "DECREASE"}
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREASE":
        return { ...state, counter: state.counter + action.payload };
      case "DECREASE":
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  

  // const increaseCounter = (payload) => {
  //   return {type: 'INCREASE', payload}
  // }
