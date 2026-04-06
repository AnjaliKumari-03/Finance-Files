import { useApp } from "../context/AppContext";
import logo from "../assets/logo.svg";

export default function Navbar({ setPage }) {
  const { role, setRole, currentUser, logout } = useApp();

  return (
    <div className="fixed top-0 z-50 w-full flex justify-between items-center px-6 py-3 bg-slate-900/95 backdrop-blur-md text-white shadow-md">

      {/* LEFT SIDE (UNCHANGED) */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage("dashboard")}>
        
        <img src={logo} alt="logo" className="w-15 h-10" />

        <div className="leading-tight">
          <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
            Finance Files
          </h1>
          <p className="text-xs text-gray-400">
            Smart Finance Dashboard
          </p>
        </div>

      </div>

      {/* RIGHT SIDE (UPDATED) */}
      <div className="flex items-center mr-10">


        {/* ROLE SWITCHER (UNCHANGED) */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="text-blue-600 px-2 py-1 rounded"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

      </div>

    </div>
  );
}