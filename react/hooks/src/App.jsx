import React, { createContext } from 'react';
import State from './components/State';
import Effect from './components/Effect';
import MyHooks from './components/MyHooks';
import State2 from './components/State2';
import Context from './components/Context';
import Ref from './components/Ref';
import TodoList from './todo/TodoList';
import Con from './_context';
import {Button} from 'antd'
const App = props => {
    return (
        <Con.Provider value={'来自app的数据'}>
            <div>
                {/* <State /> */}
                {/* <Effect /> */}
                {/* <MyHooks /> */}
                {/* <State2 num = {2}/> */}
                {/* <Ref /> */}
                {/* <Context /> */}
                <TodoList />
            </div>
        </Con.Provider>

    );
};
export default App;