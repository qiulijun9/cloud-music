
import React from "react";
import { NavLink } from "react-router-dom";
import {Top,Tab,TabItem} from "./style"
function Home (props){
  return (
    <div>
    <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
    </Top>
    <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem>推荐</TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem>歌手</TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem>排行榜</TabItem></NavLink>
    </Tab>
  </div>
  )
}

export default React.memo(Home)