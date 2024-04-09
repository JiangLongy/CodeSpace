import React, { Component,createRef } from 'react'

// 受控表单组件 ---- input框自己的value状态被react组件状态所控制
export default class InputComponent2 extends Component {
    msgRef = createRef()
    changeHandler = ()=>{
        console.log(this.msgRef.current.value)
    }
    render() {
    return (
      <div>
        <input type="text" ref={this.msgRef}/>
        <button onClick={this.changeHandler}>提交</button>
      </div>
    )
  }
}
