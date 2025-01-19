import axios from "axios";
import { useState, useEffect } from "react";
import {
  User,
  mockAPI,
  CardDetails,
  Transaction,
  mockAPICalls,
} from "../api/api";

const useStore = () => {
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [allCards, setAllCards] = useState<CardDetails[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [weeklyActivity, setWeeklyActivity] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const [balanceHistory, setBalanceHistory] = useState(null);

  // Fetch Data from Mock API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [
          userRes,
          cardDetailsRes,
          allCardsRes,
          transactionsRes,
          weeklyActivityRes,
          expensesStatRes,
          balanceHistoryRes,
        ] = await Promise.all([
          axios.get<User>(mockAPI.fetchUser),
          axios.get<CardDetails>(mockAPI.fetchCardDetails),
          axios.get<CardDetails[]>(mockAPI.fetchAllCards),
          axios.get(mockAPI.fetchTransactions),
          axios.get(mockAPI.fetchWeeklyActivityData),
          axios.get(mockAPI.fetchExpenseStat),
          axios.get(mockAPI.fetchBalanceHistory),
        ]);
        setUserProfile(userRes.data);
        setCardDetails(cardDetailsRes.data);
        setAllCards(allCardsRes.data);
        setTransactions(transactionsRes.data);
        setWeeklyActivity(weeklyActivityRes.data);
        setExpenses(expensesStatRes.data);
        setBalanceHistory(balanceHistoryRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Initialize mock API calls
    mockAPICalls();
    fetchData();
  }, []);

  return {
    loading,
    userProfile,
    cardDetails,
    allCards,
    transactions,
    weeklyActivity,
    expenses,
    balanceHistory,
  };
};

export default useStore;
