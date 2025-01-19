import {
  generateRandomCreditCardData,
  generateRandomNumbersArray,
  generateRandomTransactionData,
} from "./utils";

import { MIN_CARDS, MIN_TRANSACTIONS, WEEK_DAYS, EXPENSE_STATS_COUNT, BALANCE_HISTORY_COUNT } from "./constants";

import { CardDetails, Transaction } from "./types";

// Helper Functions
const getRandomCount = (min: number) => Math.floor(Math.random() * 10) + min;

const generateCreditCards = (count: number): CardDetails[] => 
  Array.from({ length: count }, generateRandomCreditCardData);

const generateTransactions = (count: number): Transaction[] => 
  generateRandomTransactionData(count);

// RANDOM GENERATED DATA
export const ALL_CREDIT_CARDS: CardDetails[] = generateCreditCards(getRandomCount(MIN_CARDS));

export const ALL_TRANSACTION_DATA: Transaction[] = generateTransactions(getRandomCount(MIN_TRANSACTIONS));

export const WEEKLY_DEPOSIT_DATA = generateRandomNumbersArray(WEEK_DAYS);

export const WEEKLY_WITHDRAW_DATA = generateRandomNumbersArray(WEEK_DAYS);

export const WEEKLY_ACTIVITY_DATA = {
  deposit: WEEKLY_DEPOSIT_DATA,
  withdraw: WEEKLY_WITHDRAW_DATA,
};

export const EXPENSE_STATS = generateRandomNumbersArray(EXPENSE_STATS_COUNT, 20, 100, 100);

export const BALANCE_HISTORY = generateRandomNumbersArray(BALANCE_HISTORY_COUNT);
