import "./App.css";
import LoginPage from "./pages/Auth/Login";
import Recommends from "./pages/Home/Recommends";
import React from "react";
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage";
import ArchivePage from "./pages/Archive/ArchivePage";
import ContactPage from "./pages/ContactPage/ContactPage";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path="/recommends" element={<Recommends/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/archive" element={<ArchivePage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
