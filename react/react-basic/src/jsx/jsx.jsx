// 根组件
import './App.css'
const songs = [
  {id:1,name:'反方向的钟'},
  {id:2,name:'dasda'},
  {id:3,name:'dasdaawda'}
]
const flag = true
const styleObj = {
  color:'blue'
}
function App() {
  return(
    <div className="app">
      <h2>Hello </h2>
      <ul>
        {
          songs.map(item=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
      <h3>{flag?'react true':'react false'}</h3>
      {/* {flag && <a href="#">哈哈哈哈哈</a>} */}
      <h2 style={styleObj}>红色字体</h2>
      <h2 className='green'>字体</h2>

    </div>
  )
}

export default App;