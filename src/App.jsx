// App.jsx (JSX version)
import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// Narrative split into subsections
import NarrativeIntroductionPage from "./pages/narrative/NarrativeIntroductionPage";
import NarrativeLiteraturePage from "./pages/narrative/NarrativeLiteraturePage";
import NarrativeSignificancePage from "./pages/narrative/NarrativeSignificancePage";
import NarrativeMap2Page from "./pages/narrative/NarrativeMap2Page";
import NarrativeVisualizationPage from "./pages/narrative/NarrativeVisualizationPage";
import NarrativeConclusionPage from "./pages/narrative/NarrativeConclusionPage";
import NarrativeFuturePage from "./pages/narrative/NarrativeFuturePage";
import DataCritiquePage from "./pages/data/DataCritiquePage";
import HomePage from "./pages/HomePage";
import SourcesPage from "./pages/data/SourcesPage";
import TeamPage from "./pages/about/TeamPage";
import BibliographyPage from "./pages/data/BibliographyPage";
import AcknowledgementsPage from "./pages/about/AcknowledgementsPage";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/narrative" element={<Navigate to="/narrative/introduction" replace />} />
          <Route path="/narrative/introduction" element={<NarrativeIntroductionPage />} />
          <Route path="/narrative/literature" element={<NarrativeLiteraturePage />} />
          <Route path="/narrative/significance" element={<NarrativeSignificancePage />} />
          <Route path="/narrative/map2" element={<NarrativeMap2Page />} />
          <Route path="/narrative/visualization" element={<NarrativeVisualizationPage />} />
          <Route path="/narrative/conclusion" element={<NarrativeConclusionPage />} />
          <Route path="/narrative/future" element={<NarrativeFuturePage />} />
          <Route path="/data" element={<Navigate to="/data-critique" replace />} />
          <Route path="/data-critique" element={<DataCritiquePage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/bibliography" element={<BibliographyPage />} />
          <Route path="/acknowledgements" element={<AcknowledgementsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
