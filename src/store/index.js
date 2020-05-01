import {
  createStore,
} from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



//创建store引入中间键redux-thunk
const store = createStore(reducer);


export default store;