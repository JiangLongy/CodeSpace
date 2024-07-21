import List from "./components/List";
import Page from "./components/Page";
import Life from "./components/Life";
import TodoList from "./todoList/TodoList";
const App = props => {
  const colors = [
    {id:1,name:'红色'},
    {id:2,name:'绿色'},
    {id:3,name:'蓝色'}
  ]
  
  return (
    <div>
      <h2>hello react</h2>
      {/* <List colors={colors} /> */}
      {/* <Page /> */}
      {/* <Life /> */}
      <TodoList />
    </div>
  );
};
export default App;