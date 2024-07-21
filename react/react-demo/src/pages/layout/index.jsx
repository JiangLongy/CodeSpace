import React from 'react';
import { Layout, Flex } from 'antd';
import './index.css';
import { Outlet,useNavigate,useLocation } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;


const LayoutWrap = () => {
    const data = [
        {id:1,title:'江西菜',path:'/layout/jiang'},
        {id:2,title:'粤菜',path:'/layout/yue'},
        {id:3,title:'川菜',path:'/layout/chuan'},
        {id:4,title:'湘菜',path:'/layout/xiang'}
    ]
    const navigate = useNavigate();
    const {pathname} = useLocation();
    return (
        <div className='layout'>
            <Layout>
                <Header className='hd'>
                    <h2>女友点菜后台管理系统</h2>
                    <p>欢迎,admin!</p>
                </Header>
                <Layout>
                    <Sider width="200px" className='side'>
                        <ul>
                            {
                                data.map(item=>{
                                    // return <li key={item.id} className={['aside-item',item.path === pathname ? 'active':''].join(' ')} onClick={()=>navigate(item.path)}>{item.title}</li>
                                    return <li key={item.id} className='aside-item active' onClick={()=>navigate(item.path)}>{item.title}</li>
                                })
                            }
                        </ul>
                    </Sider>
                    <Content >
                         <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutWrap;