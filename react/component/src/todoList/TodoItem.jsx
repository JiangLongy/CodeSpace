import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
        <ul>
            {this.props.list.map(item => <li key={item}>{item} <button onClick={()=>this.props.fn(item)}>x</button></li>)}
        </ul>
    )
  }
}
