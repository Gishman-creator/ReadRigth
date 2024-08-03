// Admin.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar'; // Ensure this path matches your project structure
import Dashboard from './dashboard/Dashboard';
import Catalog from './catalog/Catalog';
import Editor from './UiElements/Editor';
import NavBar from './components/NavBar';
import { toggleVisibility } from './components/SideBarSlice';
import { useDispatch, useSelector } from 'react-redux';


function Admin() {

    const dispatch = useDispatch();
    const {isExpanded} = useSelector((state) => state.sideBar);

    return (
        <div className="flex bg-[#ecf3e5]">
            <Sidebar />
            <div className={`flex-1 bg-[#ecf3e5] transition-margin duration-300 w-full ${isExpanded ? 'md:ml-[14rem]' : 'md:ml-[4.8rem]'}`}>
            <NavBar />
                <div className="p-4">
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="editor" element={<Editor />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Admin;
