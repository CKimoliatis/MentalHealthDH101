// App.jsx (JSX version)
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NarrativePage from "./pages/NarrativePage";
import DataPage from "./pages/DataPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navigation /> {/* no currentPage / setCurrentPage props */}
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
