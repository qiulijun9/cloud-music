import React from 'react'
import PropTypes from 'prop-types'
export class Provider extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }

  // 需要声明静态属性childContextTypes来指定context对象的属性,是context的固定写法  
  static childContextTypes = {
    store: PropTypes.object //类型检查
  }

  // 实现getChildContext方法,返回context对象,也是固定写法  
  getChildContext() {
    return {
      store: this.store
    }
  }

  render() {
    return this.props.children
  }
}

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (Component) {
    class Connect extends React.Component {
      componentDidMount() { //从context获取store并订阅更新          
        this.context.store.subscribe(this.handleStoreChange.bind(this));
      }
      handleStoreChange() {
        // 重新渲染         
        this.forceUpdate()
      }
      render() {
        return ( 
          <Component
          { ...this.props }
          { ...mapStateToProps(this.context.store.getState())}
          { ...mapDispatchToProps(this.context.store.dispatch)}/>          
        )
      }
    }

    //接收context的固定写法      
    Connect.contextTypes = {
      store: PropTypes.object
    }
    return Connect
  }
}