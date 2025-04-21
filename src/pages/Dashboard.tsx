import React, { useState } from "react";

// Data
import { tasks as mockTasks } from "../data/mockData";

// Components
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";
import Task from "../types/task";

const Dashboard: React.FC = () => {

  const [tasks, setTasks] = useState(mockTasks);

  function handleAddTask(newTask: Task) {
    const withId = { ...newTask, id: crypto.randomUUID() };
    setTasks([...tasks, withId]);
  };  

  return (
    // TODO: Replace with actual logic later
    <div className="bg-gray-100 min-h-screen px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-700">Dashboard</h1>
        <p className="mb-6 text-gray-500">Welcome to the dashboard!</p>

        <AddTaskForm onAddTask={handleAddTask} />

        <h3 className="text-2xl font-semibold mb-4 text-gray-600">All Tasks:</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tasks.map((task) => (
            <TaskCard 
              key={task.id}
              id={task.id} 
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              status={task.status as 'pending' | 'in-progress' | 'completed'}
              priority={task.priority as 'low' | 'medium' | 'high'} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
