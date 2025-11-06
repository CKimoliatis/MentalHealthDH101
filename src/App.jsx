// App.jsx (JSX version)
import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NarrativePage from "./pages/NarrativePage";
import DataPage from "./pages/DataPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HashRouter>
      <div className="app">
        <Navigation 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <Routes>
          <Route path="/" element={<Navigate to="/narrative" replace />} />
          <Route path="/narrative" element={<NarrativePage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/narrative" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}