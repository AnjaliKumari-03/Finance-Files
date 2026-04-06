import { useState } from "react";
import TransactionModal from "../transactions/TransactionModal";
import { useApp } from "../context/AppContext";
import DashboardCards from "../dashboard/DashboardCards";
import TransactionList from "../transactions/TransactionList";
import LineChartComponent from "../components/charts/LineChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import { exportToCSV, exportToJSON } from "../utils/exportData";

export default function Dashboard({ setPage }) {

  const { role } = useApp();
  const [showModal, setShowModal] = useState(false);
  const { transactions, currentUser } = useApp();

  const userTransactions = transactions.filter(
    (t) => t.user === currentUser
  );

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthData = userTransactions.filter((t) => {
    const d = new Date(t.date);
    return (
      d.getMonth() === currentMonth &&
      d.getFullYear() === currentYear
    );
  });

  return (
    <div className="p-6 space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {currentUser}'s Dashboard
        </h2>
        <div className="flex gap-3 mb-4">

          <button
            onClick={() => exportToCSV(currentMonthData)}
            className="bg-blue-600 text-white px-3 py-2 rounded"
          >
            Export CSV
          </button>

          <button
            onClick={() => exportToJSON(currentMonthData)}
            className="bg-gray-700 text-white px-3 py-2 rounded"
          >
            Export JSON
          </button>

</div>
        {role === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-4 py-2 rounded mb-4"
          >
            + Add Transaction
          </button>
        )}
      </div>

      <DashboardCards data={currentMonthData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <LineChartComponent data={currentMonthData} />

        <PieChartComponent data={currentMonthData} />

      </div>
 

      <TransactionList data={currentMonthData} />

      {showModal && (
        <TransactionModal onClose={() => setShowModal(false)} />
      )}

    </div>
  );
}