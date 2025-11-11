// App.jsx (JSX version)
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// Narrative split into subsections
import LiteraturePage from "./pages/introduction/LiteraturePage";
import BackgroundPage from "./pages/introduction/BackgroundPage";
import TimelinePage from "./pages/introduction/TimelinePage";
import NarrativePresentingPage from "./pages/narrative/NarrativePresentingPage";
import NarrativePreCovidPage from "./pages/narrative/NarrativePreCovidPage";
import NarrativePostCovidPage from "./pages/narrative/NarrativePostCovidPage";
import DataCritiquePage from "./pages/data/DataCritiquePage";
import HomePage from "./pages/HomePage";
import SourcesPage from "./pages/data/SourcesPage";
import TeamPage from "./pages/about/TeamPage";
import BibliographyPage from "./pages/data/BibliographyPage";
import AcknowledgementsPage from "./pages/about/AcknowledgementsPage";
import "./App.css";
import ResultsPage from "./pages/conclusions/ResultsPage";
import LimitationsPage from "./pages/conclusions/LimitationsPage";
import DiscussionsPage from "./pages/conclusions/DiscussionsPage";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    // Always jump to the top when navigating to a new route
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);
  return null;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app">
        <Navigation 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/narrative" element={<Navigate to="/narrative/presenting" replace />} />
          <Route path="/introduction/literature" element={<LiteraturePage />} />
          <Route path="/introduction/background" element={<BackgroundPage />} />
          <Route path="/introduction/timeline" element={<TimelinePage />} />
          <Route path="/narrative/presenting" element={<NarrativePresentingPage />} />
          <Route path="/narrative/pre-covid" element={<NarrativePreCovidPage />} />
          <Route path="/narrative/post-covid" element={<NarrativePostCovidPage />} />
          <Route path="/data" element={<Navigate to="/data-critique" replace />} />
          <Route path="/data-critique" element={<DataCritiquePage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/bibliography" element={<BibliographyPage />} />
          <Route path="/conclusions" element={<Navigate to="/conclusions/results" replace />} />
          <Route path="/conclusions/results" element={<ResultsPage />} />
          <Route path="/conclusions/limitations" element={<LimitationsPage />} />
          <Route path="/conclusions/discussions" element={<DiscussionsPage />} />
          <Route path="/acknowledgements" element={<AcknowledgementsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
