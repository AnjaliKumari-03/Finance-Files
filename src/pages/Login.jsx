import { useApp } from "../context/AppContext";

export default function Login() {
  const { login, transactions } = useApp();

  const users = [...new Set(transactions.map(t => t.user))];

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="bg-white p-6 rounded-xl shadow w-80 space-y-4">
        <h2 className="text-lg font-semibold text-center">
          Select User
        </h2>

        {users.map((user) => (
          <button
            key={user}
            onClick={() => login(user)}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {user}
          </button>
        ))}
      </div>
    </div>
  );
}