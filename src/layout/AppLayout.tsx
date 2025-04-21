import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

const AppLayout: React.FC = () => {
    return (
        // TODO: Replace with actual logic later
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AppLayout;