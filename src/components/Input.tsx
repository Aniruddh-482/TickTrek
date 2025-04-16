import React from "react";

const Input: React.FC = () => {
    return (
        // TODO: Replace with actual logic later
        <div className="flex flex-col">
            <label htmlFor="input" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Input</label>
            <input type="text" id="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter text here..." required />
        </div>
    );
};

export default Input;