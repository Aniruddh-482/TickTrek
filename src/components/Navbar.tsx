import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        // TODO: Replace with actual logic later
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">{"{ / } tickTrek"}</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/tasks/:taskId" className="text-white hover:text-gray-300">Tasks</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Login/Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;