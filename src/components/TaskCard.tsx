import React from "react";
import Button from "./Button";

// Types
import Task from "../types/task";

const TaskCard: React.FC<Task> = (props) => {
    
    const viewDetails = () => {
        // TODO: Use state management for description
        console.log(props.description); // Just for now
    };

    const borderColor = props.priority === "high" ? "border-red-500" : 
                        props.priority === "medium" ? "border-yellow-500" : "border-green-500";

    return (
        // TODO: Replace with actual logic later
        <div className={`bg-white shadow-sm rounded-xl p-5 border-l-4 ${borderColor} hover:shadow-md transition-shadow`}>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{props.title}</h2>
            <p className="text-gray-600 mb-1">📌 Status: {props.status}</p>
            <p className="text-gray-600 mb-1">📅 Due: {new Date(props.dueDate).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-4">⚡ Priority: {props.priority}</p>

            <div className="flex justify-between items-center gap-2">
                <Button label="View" onClick={viewDetails} />
                <Button label="Edit" />
                <Button label="Delete" />
            </div>
        </div>
    );
};

export default TaskCard;
