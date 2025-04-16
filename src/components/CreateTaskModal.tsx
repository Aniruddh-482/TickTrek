import React from "react";

const CreateTaskModal: React.FC = () => {
    return (
        // TODO: Replace with actual logic later
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Create New Task</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="task-name" className="block text-sm font-medium text-gray-700">Task Name</label>
                        <input type="text" id="task-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="task-description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="task-description" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Create Task</button>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskModal;