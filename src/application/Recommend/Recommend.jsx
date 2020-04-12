import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from "react-redux";
import Slider from '../../components/Slider/Slider';
import Scroll from '../../components/Scroll/Scroll';
import Home from '../Home/Home';
import RecommendList from '../../components/List/RecommendList';
import * as action from './store/action';
import { Content } from './style';
import { getBannerRequest, getRecommendListRequest } from '../../api/request';
import { forceCheck } from 'react-lazyload';
import Loading from '../../components/Loading/Loading'
function Recommend(props) {
    const { enterLoading,getBannerDataDispatch,getLoading} = props;
    
  //  const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

  // const { enterLoading } = useSelector(state => {
  //   return state;
  // });

  console.log(4444,enterLoading,getLoading);
  console.log(props)

  // console.log(bannerList)

  // const dispatch = useDispatch();
  // const setCurrentProjectInfo = useCallback(
  //   projectInfo => {
  //     dispatch({
  //       type: 'CHANGE_BANNER',
  //       data: projectInfo
  //     });
  //   },
  //   [dispatch]
  // );

  const [bannerList, setBannerList] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
  function getBannerList() {
    getBannerRequest()
      .then(data => {
        // console.log(data.banners);
        // getLoading(false);
        // setTimeout(() => {
        //   console.log(666,enterLoading)
        // }, 1000);
        // setBannerList(data.banners);
        // console.log(555,getLoading)
        // changeEnterLoading(false)
       
      })
      .catch(() => {
        console.log('轮播图数据传输错误');
      });
  }

  function getRecommendList() {
    getRecommendListRequest()
      .then(data => {
        console.log(data);
        setRecommendList(data.result);
       
      })
      .catch(() => {
        console.log('推荐歌单数据传输错误');
      });
  }

  useEffect(() => {
    getLoading({
      type: 'CHANGE_ENTER_LOADING',
      data: true
     });
    // console.log(dispatch)
   //{
    //type: 'CHANGE_ENTER_LOADING',
   // data: false
  //}
    // if (!bannerList.size) {
    //   getBannerList();
    // }
    // if (!recommendList.size) {
    //   getRecommendList();
    // }
  }, []);

  //mock 数据
  // const newbannerList = [1, 2, 3, 4].map(item => {
  //   return {
  //     imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
  //   };
  // });

  // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
  //   return {
  //     id: 1,
  //     picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
  //     playCount: 17171122,
  //     name: '朴树、许巍、李健、郑钧、老狼、赵雷',
  //   };
  // });
  return (
    <Content>
    <Scroll className="list" onScroll ={forceCheck}>
      <div>
        {enterLoading+3333}
        <Home></Home>
        <Slider bannerList={bannerList}></Slider>
        <RecommendList recommendList={recommendList} />
      </div>
    </Scroll>
    { enterLoading ? <Loading></Loading> : null }
   </Content>
  );
}
const mapStateToProps = (state) => ({
  bannerList: state.recommend.bannerList,
  enterLoading: state.recommend.enterLoading

});
// // 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch () {
      dispatch(action.changeBannerList());
    },
    getLoading(data){
     return   dispatch(data)
    }
  }
};

 export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));
// export default React.memo(Recommend);
