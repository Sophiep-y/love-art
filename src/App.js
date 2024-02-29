import "./App.css";
import LoginPage from "./pages/Auth/Login";
import Recommends from "./pages/Home/Recommends";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage";
import ArchivePage from "./pages/Archive/ArchivePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ArtistPortfolio from "./pages/ArtistPortfolio/ArtistPortfolio";
import SingleArt from "./pages/Art/SingleArt";
import { AnimatePresence } from "framer-motion";
import { APP_ROUTES } from "./utils/app-routes";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path={APP_ROUTES.forgot_password} element={<ForgotPassword />} />
      <Route path={APP_ROUTES.reset_password} element={<ResetPassword />} />
      <Route path={APP_ROUTES.recommend} element={<Recommends />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/archive" element={<ArchivePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/artist/:id" element={<ArtistPortfolio />}></Route>
      <Route path="/artwork/:id" element={<SingleArt />}></Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
