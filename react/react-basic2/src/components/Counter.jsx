import React,{Component} from 'react';
class Counter extends Component{
    state = {
        count:0
    }
    setCount = () => {
        this.setState({//触发视图更新
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.setCount}>+</button>
            </div>
        )
    }
}

export default Counter;