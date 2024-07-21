import React, { useEffect, useRef, useState } from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';
import Con from '../_context';

// 父组件
const TodoList = () => {
  const inputRef = useRef();
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  const [data1, setData1] = useState(data)
  const handler = () => {
    setData1(
      [...data1, inputRef.current.input.value]
    )
  }
  const del = (index)=>{
    setData1(data1.splice(index,1))
  }
  return (
    <Con.Provider value={{del}}>
      <div style={{ width: '400px' }}>

        <header style={{ display: 'flex' }}>
          <Input placeholder="Basic usage" ref={inputRef} />
          <Button onClick={() => { handler() }}>提交</Button>
        </header>

        <section>
          <TotoItem data={data1}></TotoItem>
        </section>

      </div>
    </Con.Provider>

  );
};

export default TodoList;