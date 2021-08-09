import{createStore, combineReducers, applyMiddleware}from 'redux'
import thunk from'redux-thunk'
import{composeWithDevTools} from 'redux-devtools-extension'
import { robotsListReducer } from './reducers/robotReducers'


const reducer = combineReducers({
    robotsList:robotsListReducer,
  })
const initialState={
    robotsList:{robots:[]},
}


const middleware=[thunk]
const store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store