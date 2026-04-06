export default function TransactionList({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-2">
      {data.map((t) => (
        <div key={t.id} className="flex justify-between">
          <span>{t.category}</span>
          <span>₹{t.amount}</span>
        </div>
      ))}
    </div>
  );
}