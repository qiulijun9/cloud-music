import React, { Suspense } from 'react';
import {GlobalStyle} from './style'
import { IconStyle } from './assets/iconfont/iconfont';
import { Switch,Route,Redirect} from 'react-router-dom';
import Home from './application/Home/Home';
const Recommend =  React.lazy(()=>import('./application/Recommend/Recommend'));
const Singers = React.lazy(()=>import('./application/Singers/Singers'));
const Rank = React.lazy(()=>import('./application/Rank/Rank'));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/recommend" component={Recommend} />
        <Route path="/singers" component={Singers} />
        <Route path="/rank" component={Rank} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Suspense>
  );
}

export default App;



// import React from 'react'
// import {
//   connect
// } from '../src/application/Recommend/myredux/react-redux'

// const addCountAction = {
//   type: 'add'
// }

// const mapStateToProps = state => {
//   return {
//     count: state.count
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addCount: () => {
//       dispatch(addCountAction)
//     }
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//        <div className = "App" > 
//        {this.props.count}
//        <button onClick = {
//         () => this.props.addCount()} > 增加 </button>   
//       </div >
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)