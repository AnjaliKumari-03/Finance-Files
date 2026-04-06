import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function TransactionModal({ onClose }) {
  const { addTransaction } = useApp();

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const now = new Date();
  const currentMonth = now.toISOString().slice(0, 7);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      amount: Number(amount),
      category,
      date,
      type: "expense",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-80 space-y-4">

        <h2 className="text-lg font-semibold">Add Expense</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="date"
            value={date}
            min={`${currentMonth}-01`}
            max={`${currentMonth}-31`}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Add
          </button>

        </form>

        <button
          onClick={onClose}
          className="text-sm text-gray-500"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}