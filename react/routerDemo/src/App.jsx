import React from 'react';
import { BrowserRouter, Link, Routes, Route,useNavigate, useSearchParams,useParams } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            This is Home Page
            <button onClick={() => navigate('/about/100',{replace:true})}>跳去关于</button>
        </div>
        
    )
}
const About = () => {
    // let [params] = useSearchParams();
    // console.log(params.get('id'));
    let parem = useParams();
    console.log(parem.age);
    return(
        <div>This is About Page</div>
    )
}
const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/about/:age" element={<About />} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;