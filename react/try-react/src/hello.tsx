// 单纯的UI组件 连状态都没有 性能优化 不需要更新
// store
import * as React from "react"; // FC类型的声明
// 声明一个Props接口
interface Props{
    userName:string;
}
// Function Component 声明这是一个函数组件
// props 参数对象
const Hello:React.FC<Props> = (props) => {
    return (
        <>
        <div>
            <h1>Hello {props.userName}</h1>
        </div>
        </>
    );
}

export default Hello;