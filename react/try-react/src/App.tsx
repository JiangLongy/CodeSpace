// facebook JS Way 不用学那么多API
// react哲学 能用js表达的就不要用API
// 函数就是组件！
// 返回一段template的就是组件
// hooks驱动
// 最简单的组件？
import React from 'react';
import Hello from './hello'
import NameEditComponent from './nameEditComponent'
function App() {
  // reactive hooks函数
  // name是状态的名字 setName调用可以修改值 响应式的
  // react 函数式
  const [name,setName] = React.useState('坤坤')
  const obj = {a:1};//model

  // <T> 
  const setUsernameState = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value)
  }
  // JS
  // HTML
  // JSX 是react表示模板的创新写法 在前端在JS里写HTML
  // HTML是表示UI界面最直接 最简单
  return (
    //view
    <>
      <div>
        App
        {obj.a}
        <Hello userName={name}/>
        <NameEditComponent userName={name} onChange={setUsernameState}/>
      </div>
    </>
  )
}
export default App
