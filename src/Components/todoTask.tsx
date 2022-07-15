import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskIdToDelete: any): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.taskDeadline}</span>
      </div>
      <button 
        onClick={() => {
          completeTask(task.taskId);
        }}
      >
        X
      </button>
    </div>
    )
}

export default TodoTask;