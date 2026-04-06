import { useState, useEffect } from "react";
import { useApp } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MonthlyView from "./pages/MonthlyView";
import ComparisonPage from "./pages/ComparisonPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  const { currentUser } = useApp();
  const [page, setPage] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "dark-mode" : "light-mode";

    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!currentUser) return <Login />;

  return (
    <>
      <Navbar setPage={setPage} />

      <Sidebar
        setPage={setPage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="pt-20 px-4 min-h-screen">

        {page === "dashboard" && <Dashboard setPage={setPage} />}
        {page === "monthly" && <MonthlyView />}
        {page === "comparison" && <ComparisonPage />}

      </div>
    </>
  );
}