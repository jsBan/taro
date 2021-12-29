import Taro from '@tarojs/taro'
import { Component , useEffect} from 'react'
import './app.less'

const  App = (props) =>  {

  // componentDidMount () {}
  // // 将状态栏高度挂载全局
  // componentDidShow () {
  // }

  // componentDidHide () {}

  // componentDidCatchError () {}

  useEffect(() => {
    Taro.getSystemInfo({}).then((res) => {
      (Taro as any).$navBarMarginTop = res.statusBarHeight || 0
    })
  })
  

  // this.props.children 是将要会渲染的页面
  return props.children
  // render () {
    
  //   return this.props.children
  // }
}

export default App
