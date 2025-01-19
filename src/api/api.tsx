import axios from "axios";
import {
  ALL_CREDIT_CARDS,
  ALL_TRANSACTION_DATA,
  BALANCE_HISTORY,
  CARD_DETAILS,
  EXPENSE_STATS,
  RESPONSE_OK,
  USER_PROFILE,
  WEEKLY_ACTIVITY_DATA,
} from "./mockStore/mockData";

// Types for API Data
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

export type CardDetails = {
  id?: number;
  balance: number;
  cardHolderName: string;
  validThru: string;
  maskedCardNumber: string;
};

export type Transaction = {
  id: number;
  date: string;
  amount: number;
  source: string;
};

export type ChartData = {
  month: string;
  value: number;
};

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

// Mock API calls
export const mockAPICalls = () => {
  // Mocking the user endpoint
  axios.interceptors.request.use((config) => {
    if (config.url === mockAPI.fetchUser) {
      config.adapter = () =>
        Promise.resolve({
          data: USER_PROFILE,
          config,
          ...RESPONSE_OK,
        });
    }

    if (config.url === mockAPI.fetchCardDetails) {
      config.adapter = () =>
        Promise.resolve({
          data: CARD_DETAILS,
          config,
          ...RESPONSE_OK,
        });
    }
    if (config.url === mockAPI.fetchAllCards) {
      config.adapter = () =>
        Promise.resolve({
          data: ALL_CREDIT_CARDS,
          config,
          ...RESPONSE_OK,
        });
    }

    if (config.url === mockAPI.fetchTransactions) {
      config.adapter = () =>
        Promise.resolve({
          data: ALL_TRANSACTION_DATA,
          config,
          ...RESPONSE_OK,
        });
    }

    if (config.url === mockAPI.fetchWeeklyActivityData) {
      config.adapter = () =>
        Promise.resolve({
          data: WEEKLY_ACTIVITY_DATA,
          config,
          ...RESPONSE_OK,
        });
    }

    if (config.url === mockAPI.fetchExpenseStat) {
      config.adapter = () =>
        Promise.resolve({
          data: EXPENSE_STATS,
          config,
          ...RESPONSE_OK,
        });
    }
    if (config.url === mockAPI.fetchBalanceHistory) {
      config.adapter = () =>
        Promise.resolve({
          data: BALANCE_HISTORY,
          config,
          ...RESPONSE_OK,
        });
    }

    return config;
  });
};
