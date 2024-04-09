import React, { Component } from 'react'

// 受控表单组件
export default class InputComponents extends Component {
    state = {
        message:'床前明月光'
    }
    changeHandler = (e)=>{
        this.setState({
            message:e.target.value
        })
    }
    render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}
