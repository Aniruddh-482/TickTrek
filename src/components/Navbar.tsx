import React from "react";

const Navbar: React.FC = () => {
    return (
        // TODO: Replace with actual logic later
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">{"{ / } tickTrek"}</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="/dashboard" className="text-white hover:text-gray-300">Dashboard</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;