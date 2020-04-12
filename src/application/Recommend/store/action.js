import * as actionTypes from './actionType';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data
});

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then(data => {
        dispatch(changeBannerList (data.banners));
       console.log(5555,data.banners)
       dispatch(changeEnterLoading (false));// 改变 loading
        
      })
      .catch((data) => {
        console.log(5555,data)
        console.log('轮播图数据传输错误');
      });
   }
};
// export const getRecommendList = () => {
//   return (dispatch) => {
//     getRecommendListRequest().then(data => {
//       dispatch(changeRecommendList(data.result));
//       dispatch(changeEnterLoading(false));//改变loading
//     }).catch(() => {
//       console.log("推荐歌单数据传输错误");
//     });
//   }
// };