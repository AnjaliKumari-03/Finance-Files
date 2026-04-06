import { useApp } from "../context/AppContext";

export default function Sidebar({ setPage, isOpen, setIsOpen, theme, setTheme }) {
  const { logout } = useApp();
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* TOGGLE BUTTON (RIGHT SIDE) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-3 py-2 rounded shadow"
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 mt-15 h-60 w-40 bg-gray-900 text-white p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40 shadow-lg`}
      >

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-4">

          <button
            onClick={() => {
              setPage("dashboard");
              setIsOpen(false);
            }}
            className="text-left hover:text-blue-400"
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              setPage("monthly");
              setIsOpen(false);
            }}
            className="text-left hover:text-blue-400"
          >
            Monthly View
          </button>

          <button
            onClick={() => {
              setPage("comparison");
              setIsOpen(false);
            }}
            className="text-left hover:text-blue-400"
          >
            Month Comparison
          </button>

          <button
            onClick={toggleTheme}
            className="text-left hover:text-blue-400"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="text-left text-red-400 hover:text-red-500"
          >
            Logout
          </button>

        </div>
      </div>
    </>
  );
}