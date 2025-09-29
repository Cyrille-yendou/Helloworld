import './App.css';
import {tasksCollection} from "./data"

function App(){
    const tasks = tasksCollection;
  return(
    <>
      <h1>Todo List</h1>
      <p>Nombre de tâches: 5</p>
    </>
  )
}
export default App