import { LinkHub } from "./components/LinkHub";
import { SiteAutomatico } from "./components/SiteAutomatico";
import { DevAcelerado } from "./components/DevAcelerado";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("/");

  const handleNavigate = (url: string) => {
    setCurrentPage(url);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage("/");
    window.scrollTo(0, 0);
  };

  if (currentPage === "/site-automatico") {
    return <SiteAutomatico onBack={handleBack} />;
  }

  if (currentPage === "/dev-acelerado") {
    return <DevAcelerado onBack={handleBack} />;
  }

  return <LinkHub onNavigate={handleNavigate} />;
}