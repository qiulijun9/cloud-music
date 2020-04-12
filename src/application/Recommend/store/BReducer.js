import * as actionTypes from './actionType';
import produce from "immer";
const defaultState = {
  Loading: true,
};

export function  BReducer(state = defaultState, action){
  switch(action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return action.data;   
    default:
      return state;
  }
}