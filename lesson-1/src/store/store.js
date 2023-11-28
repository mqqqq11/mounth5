import  {counterReducer} from './counterReducer'

import { legacy_createStore as createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(counterReducer);
