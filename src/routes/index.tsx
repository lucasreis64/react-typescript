import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/main-page" element={<Dashboard/>} />
            
            <Route path="*" element={<Navigate to="/main-page" />} />
        </Routes>
    );
};
