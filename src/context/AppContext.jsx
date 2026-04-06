import { createContext, useContext, useState, useEffect } from "react";
import { dummyData } from "../data/dummyData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : dummyData;
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem("currentUser") || null;
  });

  const [role, setRole] = useState("viewer");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const login = (user) => {
    localStorage.setItem("currentUser", user);
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const addTransaction = (tx) => {
    setTransactions((prev) => [
      ...prev,
      {
        ...tx,
        id: Date.now(),
        user: currentUser,
      },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        currentUser,
        login,
        logout,
        role,
        setRole,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);