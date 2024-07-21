import React, { Component,createRef } from 'react'

export default class Life extends Component {
    constructor(){
        super()
        console.log('Life 组件开始加载');
        this.state = {
            count : 1
        }
        this.ref = createRef()
    }
    handlerClick =()=>{
        // this.setState({
        //     count:this.state.count+1
        // })
        this.state.count++
        this.forceUpdate()
    }
    componentDidMount(){
        console.log('Life 组件挂载完成',this.ref);
    }
    componentDidUpdate(){
        console.log('Life 组件更新完成');
    }
    componentWillUnmount(){
        console.log('Life 组件卸载');
    }
    render() {
        console.log('Life 组件render被渲染',this.ref);
    return (
      <div>
        <h4 ref={this.ref} onClick={()=>{this.handlerClick()}}>{this.state.count}</h4>
      </div>
    )
  }
}
