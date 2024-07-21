import React,{useState} from 'react';

const State = () => {
    const [count,setCount] = useState(10)//[xx,xxfn]
    const [title,setTitle] = useState('title')
    const add = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            <h4>title:{title}</h4>
            <button onClick={()=>add()}>{count}</button>
        </div>
    );
};

export default State;