import React,{useEffect,useState} from 'react';

const Effect = () => {
    const [count,setCount] = useState(0);
    const [name, setName] = useState('Tom');
    useEffect(()=>{
        // console.log(`当前点击了${count}次`);
        const timer = setInterval(()=>{
            setCount(count+1);
        },1000)
        return ()=>{
            //清除副作用
            clearInterval(timer);
        }
    },[count])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
            <button onClick={()=>setName('Jerry')}>{name}</button>
        </div>
    );
};

export default Effect;