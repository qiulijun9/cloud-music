import * as actionTypes from './actionType';
import produce from "immer";
const defaultState = {
  bannerList: [],
  recommendList: [],
  enterLoading: true,
};

export function recommendReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return produce(state, (draft) => {
        draft.bannerList = action.data;
      })
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return action.data;
    case actionTypes.CHANGE_ENTER_LOADING:
      console.log(action.data)
      return action.data;
    default:
      return state;
  }
}