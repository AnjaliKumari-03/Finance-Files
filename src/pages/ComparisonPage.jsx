import { useApp } from "../context/AppContext";
import { MonthComparisonChart } from "../components/charts/ComparisonChart";
import PieChartComponent from "../components/charts/PieChartComponent";

export default function ComparisonPage() {
  const { transactions, currentUser } = useApp();

  const userTransactions = transactions.filter(
    (t) => t.user === currentUser
  );

  // ✅ MONTH-WISE EXPENSE CALCULATION
  const monthMap = {};

  userTransactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthMap[month]) monthMap[month] = 0;

    if (t.type === "expense") {
      monthMap[month] += t.amount;
    }
  });

  const monthData = Object.entries(monthMap).map(([month, amount]) => ({
    month,
    amount
  }));

  // ✅ FIND HIGHEST MONTH
  const maxMonth = monthData.reduce(
    (max, curr) => (curr.amount > max.amount ? curr : max),
    { month: "", amount: 0 }
  );

  // ✅ CATEGORY TOTALS
  const categoryMap = {};

  userTransactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const categoryData = Object.entries(categoryMap).map(
    ([category, amount]) => ({
      category,
      amount
    })
  );

  // ✅ HIGHEST CATEGORY
  const maxCategory = categoryData.reduce(
    (max, curr) => (curr.amount > max.amount ? curr : max),
    { category: "", amount: 0 }
  );

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-xl font-bold">
        Monthly Comparison
      </h2>

      {/* 📊 BAR CHART */}
      <MonthComparisonChart data={userTransactions} />

      {/* 📌 MONTH INSIGHTS */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">
          Month-wise Expenses
        </h3>

        {monthData.map((m, index) => (
          <div key={index} className="flex justify-between py-1">
            <span>{m.month}</span>
            <span>₹{m.amount}</span>
          </div>
        ))}

        <div className="mt-3 font-semibold text-red-500">
          Highest Spending Month: {maxMonth.month} (₹{maxMonth.amount})
        </div>
      </div>

      {/* 🥧 CATEGORY PIE */}
      <PieChartComponent data={userTransactions} />

      {/* 📌 CATEGORY INSIGHTS */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">
          Category-wise Expenses
        </h3>

        {categoryData.map((c, index) => (
          <div key={index} className="flex justify-between py-1">
            <span>{c.category}</span>
            <span>₹{c.amount}</span>
          </div>
        ))}

        <div className="mt-3 font-semibold text-red-500">
          Highest Expense Category: {maxCategory.category} (₹{maxCategory.amount})
        </div>
      </div>

    </div>
  );
}