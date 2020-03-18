import productReducer from './productReducer'
import cartReducer from './cartReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    productReducer, cartReducer
})

export default rootReducer