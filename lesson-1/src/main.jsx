
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  counter: 0
}
// {type: 'INCREASE'}
// {type: 'DECREASE'}

const counterReducer = (state = initialState,action ) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, counter: state.counter + 1}
    case 'DECREASE':
      return {...state, counter: state.counter - 1}
    default:
      return state
  }
}

const store = createStore(counterReducer)


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
)
