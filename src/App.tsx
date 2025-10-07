import './App.css';
import React from 'react';
import { tasksCollection } from './data';
import type { Task } from "./Task";
import {v4 as uuidv4} from "uuid";


function App() {
    const [count, setCount] = React.useState(0);
    const [tasks, setTasks] = React.useState<Task[]>(tasksCollection);
    const handleIncrease = () => {
        setCount(count + 1);
    };
    
    const addNewTask = (content: string) =>{
      const newTask: Task ={
        id: uuidv4(), 
        content : content,
        createdAT: new Date(),
        completedAt:new Date(),
        status:"todo", 
        
      };
      setTasks([newTask, ...tasks]);
    }
    const handleClick = () =>{
      setCount(count +1);
      const content = prompt("Entrez une nouvelle tâche :");
      if (content && content.trim() !== "") {
        addNewTask(content.trim());
      } else{
        alert("Vous devez saisir un contenu valide !");
      }
  }
    
    return (
        <>
            <h1>Todo List</h1>
            <p>Nombre de tâches : {tasks.length}</p>
            <button type="button" onClick={handleClick}>
                    Nouvelle tâche
                </button>
            <div>
              <ul>
                {tasks.map((task) => (
                        <li key={task.id}>
                            {task.content}
                        </li>
                ))}
              </ul>
                <button type="button" onClick={handleIncrease}>
                    Increase
                </button>

                <div>Count Value: {count}</div>
                
            </div>
        </>
    );
  }

export default App;
