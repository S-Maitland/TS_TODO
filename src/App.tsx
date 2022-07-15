import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';
import TodoTask from './Components/todoTask';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    let uuid = uuidv4();
    const newTask = {taskId: uuid, taskName: task, taskDeadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskIdToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskId !== taskIdToDelete
    }))
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..." 
            name="task" 
            value={task}
            onChange={handleChange} />
          <input 
            type="number" 
            placeholder="Deadline (in Days)..." 
            name="deadline" 
            value={deadline}
            onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div >
  );
};

export default App;
