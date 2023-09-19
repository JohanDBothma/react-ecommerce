import React  from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from "./routes/home/home.component";

const Navigation = () => {
    return (
        <div>
            <div>
                <h1>I am nav</h1>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home/>} />
            </Route>
        </Routes>
    );
}

export default App;
