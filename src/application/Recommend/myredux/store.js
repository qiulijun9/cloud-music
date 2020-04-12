 import {
   reducer
 } from './reducer';


 // const initState = {
 //   count: 0
 // }

 // function reducer(state = initState, action) {

 //   switch (action.type) {
 //     case 'add':
 //       return {
 //         ...state, count: state.count + 1
 //       };
 //     case 'delete':
 //       return {
 //         ...state, count: state.count - 1
 //       };
 //     default:
 //       return initState;
 //   }
 // }

 export const createStore = () => {
   let state = {};
   //观察者队列
   let obsever = []

   function getState() {
     return state;
   }
   //setState
   function dispatch(action) {
     state = reducer(state, action);

     //通知
     obsever.forEach(fn => fn())
   }
   //广播
   function subscribe(fn) {
     obsever.push(fn)
   }

   //初始化store数据 
   dispatch({
     type: '@@REDUX_INIT'
   })
   return {
     getState,
     dispatch,
     subscribe,
   };
 };
 const store = createStore();
 store.subscribe(() => {
   console.log("状态变了")
 })

 // 改值的时候触发通知
 store.dispatch({
   type: 'add',
 });
 console.log(store.getState());