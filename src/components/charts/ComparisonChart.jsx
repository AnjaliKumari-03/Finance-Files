import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function MonthComparisonChart({ data }) {

  const monthMap = {};

  data.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM

    if (!monthMap[month]) {
      monthMap[month] = { month, expense: 0 };
    }

    if (t.type === "expense") {
      monthMap[month].expense += t.amount;
    }
  });

  const chartData = Object.values(monthMap);

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Monthly Expenses</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="expense" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function IncomeExpenseChart({ data }) {

  let income = 0;
  let expense = 0;

  data.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const chartData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense }
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-2">Income vs Expense</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}