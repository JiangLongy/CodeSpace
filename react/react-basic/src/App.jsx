import React from "react"
import ExitComponents from "./components/ExitComponents";
import ClassComponents from "./components/ClassComponents";
function HelloReact(){
    const handler = (e)=>{
        console.log('按钮被点击',e);
    }
    return <div>
        <p>这是一个函数组件</p>
        <button onClick={handler}>click me</button>
    </div>
}

class HelloVue extends React.Component{
    render(){
        return <div>这是一个类组件</div>
    }
}

function App(){
    return (
        <div className="app">
            <HelloReact></HelloReact>
            <HelloVue />
            <hr />
            <ExitComponents />
            <ClassComponents />
        </div>
    )
}
export default App