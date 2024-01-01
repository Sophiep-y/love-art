import "./App.css";
import LoginPage from "./pages/Auth/Login";
import Recommends from "./pages/Home/Recommends";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage";
import ArchivePage from "./pages/Archive/ArchivePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/recommends" element={<Recommends />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
