export default function DashboardCards({ data }) {
  let income = 0;
  let expense = 0;

  data.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <Card title="Income" value={income} />
      <Card title="Balance" value={balance} />
      <Card title="Expense" value={expense} />
    </div>
  );
}

function Card({ title, value }) {
  let bg = "bg-gray-100";

  if (title === "Income") bg = "bg-green-300";
  if (title === "Expense") bg = "bg-red-300";
  if (title === "Balance") bg = "bg-blue-300";

  return (
    <div className={`${bg} p-5 rounded-xl shadow hover:scale-105 transition`}>
      <p className="text-gray-600">{title}</p>
      <h2 className="text-xl font-bold">₹ {value}</h2>
    </div>
  );
}