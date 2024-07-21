import React from 'react'
import {BrowserRouter,useRoutes,Navigate} from 'react-router-dom'
import Login from '../pages/login'
import Layout from '../pages/layout'
import Jiang from '../pages/JiangXi'
import Chuan from '../pages/Chuan'
import Yue from '../pages/Yue'
import Xiang from '../pages/Xiang'
// const Jiang = React.lazy(()=>import('../pages/JiangXi'))
// const Chuan = React.lazy(()=>import('../pages/Chuan'))
// const Yue = React.lazy(()=>import('../pages/Yue'))
// const Xiang = React.lazy(()=>import('../pages/Xiang'))

const routerList = [
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/layout',
        element:<Layout/>,
        children:[
            {
                path:'',
                element:<Navigate to='/layout/jiang'/>
            },
            {
                path:'jiang',
                element:<Jiang/>
            },
            {
                path:'chuan',
                element:<Chuan/>
            },
            {
                path:'yue',
                element:<Yue/>
            },
            {
                path:'xiang',
                element:<Xiang/>
           }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
]

function Element(){
    return useRoutes(routerList)
}
function WrapprRoutes(){
    return (
        <BrowserRouter>
            <Element/>
        </BrowserRouter>
    )
}

export default WrapprRoutes