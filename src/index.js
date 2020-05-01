import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom'
import App from './App';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
       <App /> 
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
, document.getElementById('root'));
// import * as serviceWorker from './serviceWorker';
// import {
//   Provider
// } from '../src/application/Recommend/myredux/react-redux';
// import {
//   createStore
// } from '../src/application/Recommend/myredux/store';
// import {
//   reducer
// } from '../src/application/Recommend/myredux/reducer'

// let store = createStore(reducer)


// function logger(store) {    
//   let next = store.dispatch    
//   return (action) => {        
//       console.log('logger1')        
//       let result = next(action)        
//       return result    
//   }
// }

// function catchErr(store){
//   let next =store.dispatch;
//   return (action)=>{
//      try{
//       console.error('开始捕获异常!')  
//        return next(action)
//      }catch(err){
//       console.error('捕获一个异常!', err)   
//        throw err;
//      }
//   }
// }

// function applyMiddleware(store, middlewares) {    
//   middlewares = [ ...middlewares ]      
//   middlewares.reverse()     
//   middlewares.forEach(middleware =>      
//       store.dispatch = middleware(store)    
//   )
// }

// applyMiddleware(store, [ logger,catchErr ])


// ReactDOM.render(
//   <Provider store = {
//     createStore(reducer)
//   }>
//   <App />
//   </Provider>,     
//   document.getElementById('root')
// );


