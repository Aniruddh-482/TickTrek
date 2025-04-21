import React, { useState } from "react";

// Types
import Task, { NewTask } from "../types/task";

interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState<NewTask>({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
    priority: "low",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask({ ...task, id: crypto.randomUUID() });
    setTask({
      title: "",
      description: "",
      dueDate: "",
      status: "pending",
      priority: "low",
    });
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Task</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            required
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Description:</label>
          <textarea
            name="description"
            required
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            required
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Status:</label>
            <select
              name="status"
              required
              value={task.status}
              onChange={(e) =>
                setTask({ ...task, status: e.target.value as "pending" | "in-progress" | "completed" })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="pending">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Priority:</label>
            <select
              name="priority"
              required
              value={task.priority}
              onChange={(e) =>
                setTask({ ...task, priority: e.target.value as "low" | "medium" | "high" })
              }
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Task
          </button>
          <button
            type="button"
            onClick={() =>
              setTask({ title: "", description: "", dueDate: "", status: "pending", priority: "low" })
            }
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
