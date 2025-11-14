import { LinkHub } from "./components/LinkHub";
import { SiteAutomatico } from "./components/SiteAutomatico";
import { DevAcelerado } from "./components/DevAcelerado";
import { Consultoria } from "./components/Consultoria";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    // Initialize from hash
    const hash = window.location.hash.replace("#", "");
    return hash || "/";
  });

  useEffect(() => {
    // Listen for hash changes (e.g., back button)
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "/";
      setCurrentPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (url: string) => {
    setCurrentPage(url);
    window.location.hash = url === "/" ? "" : url;
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage("/");
    window.location.hash = "";
    window.scrollTo(0, 0);
  };

  if (currentPage === "/site-automatico") {
    return <SiteAutomatico onBack={handleBack} />;
  }

  if (currentPage === "/dev-acelerado") {
    return <DevAcelerado onBack={handleBack} />;
  }

  if (currentPage === "/consultoria") {
    return <Consultoria onBack={handleBack} />;
  }

  return <LinkHub onNavigate={handleNavigate} />;
}