import  {counterReducer} from './counterReducer'

import { legacy_createStore as createStore, combineReducers } from "redux";

export const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(counterReducer);
