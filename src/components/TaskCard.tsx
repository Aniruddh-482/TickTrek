import React from "react";

const TaskCard: React.FC = () => {
    return (
        // TODO: Replace with actual logic later
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Task Title</h2>
            <p className="text-gray-700">Task description goes here.</p>
            <div className="flex justify-between mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;