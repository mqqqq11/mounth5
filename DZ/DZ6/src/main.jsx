import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './assets/styles/core.sass'
import { App } from './App.jsx'
import { store } from './redux/store.jsx'

const root = document.getElementById('root')

createRoot(root).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
