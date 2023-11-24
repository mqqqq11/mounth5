import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'



const initialState = {
  name:'',
  age: ''
}

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NAME':
      return {...state, name: state.name + action.payload };
    case 'AGE':
      return {...state, age: state.age + action.payload };
    default:
      return state
  }
}

const store = createStore(formReducer)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
