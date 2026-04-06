import { useApp } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useApp();

  const expenses = transactions.filter(t => t.type === "expense");

  const map = {};
  expenses.forEach(t => {
    map[t.category] = (map[t.category] || 0) + t.amount;
  });

  const top = Object.entries(map).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="bg-blue-100 p-4 rounded-xl">
      <p className="text-blue-700">Top Spending Category</p>
      <h2 className="font-bold text-lg">
        {top ? `${top[0]} (₹${top[1]})` : "No Data"}
      </h2>
    </div>
  );
}