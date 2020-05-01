import * as actionTypes from './actionType';
const defaultState = {
  Loading: true,
};

export function BReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      // console.log(2222222)
      return action.data;
    default:
      return state;
  }
}