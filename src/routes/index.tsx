import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import AppLayout from "../layout/AppLayout";

// Pages
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import TaskDetailsPage from "../pages/TaskDetailsPage";

const Router: React.FC = () => {
  return (
    // TODO: Replace with actual logic later
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks/:taskId" element={<TaskDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;