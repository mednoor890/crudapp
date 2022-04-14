import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProjectList from "./pages/ProjectList"
import ProjectCreate from "./pages/ProjectCreate"
import ProjectEdit from "./pages/ProjectEdit"
import ProjectShow from "./pages/ProjectShow"

function Main() {
    return (
        <Router>
            <Routes>
                <Route  path="/" exact element={<ProjectList/>} />
                <Route path="/create"  element={<ProjectCreate/>} />
                <Route path="/edit/:id"  element={<ProjectEdit/>} />
                <Route path="/show/:id"  element={<ProjectShow/>} />
            </Routes>
        </Router>
    );
}

export default Main;
const container = document.getElementById('app');
const root = createRoot(container);
if (document.getElementById('app')) {
    root.render(<Main />);
}