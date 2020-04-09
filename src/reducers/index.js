import productReducer from './productReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import alertsReducer from './alertsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    productReducer, cartReducer, userReducer, alertsReducer
})

export default rootReducer