import * as actionTypes from './actionType';
import produce from "immer";
const defaultState = {
  Loading: true,
};

export function  AReducer(state = defaultState, action){
  switch(action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      console.log(11111111111)
      return action.data;   
    default:
      return state;
  }
}