import React, { useEffect, useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import Slider from '../../components/Slider/Slider';
import Scroll from '../../components/Scroll/Scroll';
import Home from '../Home/Home';
import RecommendList from '../../components/List/RecommendList';
import { getBannerRequest, getRecommendListRequest } from '../../api/request';
import { forceCheck } from 'react-lazyload';
import Loading from '../../components/Loading/Loading';

function Recommend(props) {
  // const { enterLoading, bannerList, getBannerDataDispatch, getLoading } = props;
  const { enterLoading } = useSelector(state => {
    return state.recommend.enterLoading;
  });
  const store = useStore();
  console.log(store);
  // const dispatch = useDispatch();
  // const setEnterLoading = useCallback(() => {
  //   dispatch({
  //     type: 'CHANGE_ENTER_LOADING',
  //     data: false,
  //   });
  // }, [dispatch]);

  const [bannerList, setBannerList] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
  function getBannerList() {
    getBannerRequest()
      .then(data => {
        setBannerList(data.banners);
        // setEnterLoading();
      })
      .catch(() => {
        console.log('轮播图数据传输错误');
      });
  }

  function getRecommendList() {
    getRecommendListRequest()
      .then(data => {
        setRecommendList(data.result);
      })
      .catch(() => {
        console.log('推荐歌单数据传输错误');
      });
  }
  async function getid(){
    console.log("2222")
  }
  useEffect(() => {
    console.log(enterLoading);
    if (!bannerList.size) {
      getBannerList();
    }
    if (!recommendList.size) {
      getRecommendList();
    }
  }, [getid]);

  return (
    <>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Home></Home>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
      {enterLoading ? <Loading></Loading> : null}
    </>
  );
}

// const mapStateToProps = state => ({
//   bannerList: state.recommend.bannerList,
//   enterLoading: state.recommend.enterLoading,
// });
// //  映射dispatch到props上
// const mapDispatchToProps = dispatch => {
//   return {
//     getBannerDataDispatch() {
//       dispatch(action.getBannerList());
//     },
//     getLoading(boolean) {
//       dispatch(action.changeEnterLoading(boolean));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));
export default React.memo(Recommend);
