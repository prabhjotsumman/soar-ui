import axios from "axios";
import { CARD_DETAILS, RESPONSE_OK, USER_PROFILE } from "./constants";

import { ALL_CREDIT_CARDS, ALL_TRANSACTION_DATA, WEEKLY_ACTIVITY_DATA, EXPENSE_STATS, BALANCE_HISTORY } from "./mockData";

// Mocked API Endpoints
export const mockAPI = {
  fetchUser: "/api/user",
  fetchCardDetails: "/api/card-details",
  fetchAllCards: "/api/all-cards",
  fetchTransactions: "/api/transactions",
  fetchWeeklyActivityData: "/api/weekly-activity-data",
  fetchExpenseStat: "/api/expenses",
  fetchBalanceHistory: "/api/balanceHistory",
};

// Mock API data mapping
const mockDataMap: { [key: string]: unknown } = {
  [mockAPI.fetchUser]: USER_PROFILE,
  [mockAPI.fetchCardDetails]: CARD_DETAILS,
  [mockAPI.fetchAllCards]: ALL_CREDIT_CARDS,
  [mockAPI.fetchTransactions]: ALL_TRANSACTION_DATA,
  [mockAPI.fetchWeeklyActivityData]: WEEKLY_ACTIVITY_DATA,
  [mockAPI.fetchExpenseStat]: EXPENSE_STATS,
  [mockAPI.fetchBalanceHistory]: BALANCE_HISTORY,
};

// Mock API calls
export const mockAPICalls = () => {
  axios.interceptors.request.use((config) => {
    const mockData = mockDataMap[config.url!];
    if (mockData) {
      config.adapter = () =>
        Promise.resolve({
          data: mockData,
          config,
          ...RESPONSE_OK,
        });
    }
    return config;
  });
};
