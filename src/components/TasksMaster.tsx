import '../App.css';
import React from 'react';
import { tasksCollection } from '../data';
import type { Task } from "../Task";
import {v4 as uuidv4} from "uuid";
import TaskPreview from "./TaskPreview";

export default function TasksMaster(){
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
          setTasks([ ...tasks,newTask]);
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
        const handleChange = (id: string) => {
          setTasks(
            tasks.map((task) =>
              task.id === id ? { ...task, status: "done" } : task
            )
          );
        };
        const handleDelete = (id: string) => {
            const taskToDelete = tasks.find(task => task.id === id);
            if (!taskToDelete) return;

            const confirmDelete = window.confirm(
                `Voulez-vous vraiment supprimer la tâche : "${taskToDelete.content}" ?`
            );

            if (confirmDelete) {
                setTasks(tasks.filter(task => task.id !== id));
            }
        };
        
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
                        <div>
                            <TaskPreview key={task.id} task={task} valider={handleChange} onDelete={handleDelete}/>
                        </div>     
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