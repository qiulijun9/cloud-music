import {
  createStore,
} from 'redux'
import reducer from './reducer'
// 捕获Redux Action异常的中间件
export const reduxCatch = (errorHandler) => (store) => (next) => (action) => {
  try {
    // 异步Action被标记为出错时手动抛出异常
    if (action.error) {
      throw action.payload;
    }
    return next(action);
  } catch (err) {
    // 自定义的异常处理函数
    errorHandler(err, store.getState, action, store.dispatch);
    return err;
  }
}


let store = createStore(reducer)

// export const logger = () => {
//   let next = store.dispatch;
//   store.dispatch = function dispatchLog(action) {
//     console.log('dispatch', action);
//     next(action);
//     console.log("update", store.getState())
//   }
// };

let next = store.dispatch
export function logger(store) {

  return (action) => {
    console.log('logger1')
    // let result = next(action)
    // return result
  }
}