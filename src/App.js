import React from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from './style'
import { IconStyle } from './assets/iconfont/iconfont';
// import { renderRoutes } from 'react-router-config';
// import routes from './routers/index';
import { HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import Home from './application/Home/Home';
import Recommend from './application/Recommend/Recommend';
import Singers from './application/Singers/Singers';
import Rank from './application/Rank/Rank';
import store from './store/index';
function App() {
  return (
    <>
     <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          <Switch>
              <Route path="/home" component={Home} />
              <Route path="/recommend" component={Recommend} />
              <Route path="/singers" component={Singers} />
              <Route path="/rank" component={Rank} />
              <Redirect from="/" to="/home" />
          </Switch>
      </HashRouter>
  </Provider>
  </>
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