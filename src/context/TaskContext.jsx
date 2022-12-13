import {createContext, useState, useEffect} from "react";
import { tasks as data} from "../data/tasks";


export const TaskContext = createContext()
    

export function TaskContextProvider(props){
    const [tasks, setTasks] = useState([]);

    function createTask(task){
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length + 1,
          description: task.description
        }]) //Una vez tengas el nuevo arreglo asignalo 
    }

    function deleteTask(taskId){
        // console.log(tasks)
        // console.log(taskId)
        setTasks(tasks.filter(task => task.id != taskId))//Por cada tarea revisar si es igual al id que le estamos pasando el id almacenado que sea igual al id pasado pues quedara eliminado y se establece al estado.
    }

    useEffect(() => {
        setTasks(data)
    }, [])
    return(
       <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
       }}>
        {props.children}
       </TaskContext.Provider>
    )
}

