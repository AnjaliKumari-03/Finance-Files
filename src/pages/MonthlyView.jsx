import { useState } from "react";
import { useApp } from "../context/AppContext";

// ✅ IMPORT PIE COMPONENT
import PieChartComponent from "../components/charts/PieChartComponent";

export default function MonthlyView({ setPage }) {
  const { transactions, currentUser } = useApp();

  const userTransactions = transactions.filter(
    (t) => t.user === currentUser
  );

  const [month, setMonth] = useState("2026-04");

  const filtered = userTransactions.filter((t) =>
    t.date.startsWith(month)
  );

  return (
    <div className="p-6 space-y-6">


      <h2 className="text-xl font-bold">
        Monthly Analysis ({month})
      </h2>

      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="border p-2 rounded"
      />

      <PieChartComponent data={filtered} />

      <div className="bg-white p-4 rounded shadow">
        {filtered.length > 0 ? (
          filtered.map((t) => (
            <div key={t.id} className="flex justify-between py-2">
              <span>{t.category}</span>
              <span>₹{t.amount}</span>
            </div>
          ))
        ) : (
          <p>No data for this month</p>
        )}
      </div>

    </div>
  );
}