import { createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  category: string;
  description: string;
  type: "income" | "outcome";
  price: number;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
