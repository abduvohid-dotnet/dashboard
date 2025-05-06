import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
// import Login from './pages/Login'; // misol uchun

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* boshqa routelar */}
            </Routes>
        </Router>
    );
};

export default App;
