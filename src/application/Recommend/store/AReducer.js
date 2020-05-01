import * as actionTypes from './actionType';
const defaultState = {
  Loading: true,
};

export function AReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ENTER_LOADING:
      return action.data;
    default:
      return state;
  }
}