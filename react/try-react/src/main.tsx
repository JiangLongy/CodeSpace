import React from 'react'
//DOM操作 单独为ReactDOM提供
import ReactDOM from 'react-dom/client'
// .vue -> .tsx   .jsx-> .tsx template放在函数里 JSX
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
