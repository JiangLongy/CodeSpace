import React, { Component,createRef } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    msgref = createRef()
    state={
        list:['html','css']
    }
    handler = ()=>{
        console.log(this.msgref.current.value);
        this.state.list.push(this.msgref.current.value)
        this.forceUpdate()
        
    }
    del = (content)=>{
        this.state.list.splice(this.state.list.indexOf(content),1)
        this.forceUpdate()
    }
    render() {
    return (
      <div>
        <header>
            <input type="text" ref={this.msgref}/>
            <button onClick={this.handler}>提交</button>
            <TodoItem list={this.state.list} fn= {this.del}/>
        </header>
        <section>

        </section>
      </div>
    )
  }
}
