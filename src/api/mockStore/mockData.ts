import {
  generateRandomCreditCardData,
  generateRandomNumbersArray,
  generateRandomTransactionData,
} from "../../utils";
import { CardDetails, Transaction, User } from "../api";

// DUMMY DATA
export const RESPONSE_OK = {
  status: 200,
  statusText: "OK",
  headers: {},
};

export const USER_PROFILE: User = {
  id: 1,
  name: "Charlene Reed",
  username: "CharleneR",
  email: "charlene@gmail.com",
  password: "password123",
  dob: "1990-01-25",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
};

export const CARD_DETAILS: CardDetails = {
  balance: 5237.49,
  cardHolderName: "Alex Johnson",
  validThru: "08/28",
  maskedCardNumber: "5435 **** **** 9321",
};

// RANDOM GENERATED DATA
const getAllCreditCards = () => {
  const numberOfCards = () => Math.floor(Math.random() * 10) + 3;

  const cards = [];

  for (let i = 0; i <= numberOfCards(); i++) {
    cards.push(generateRandomCreditCardData());
  }
  return cards;
};

export const ALL_CREDIT_CARDS: CardDetails[] = getAllCreditCards();

// GET ALL TRANSACTIONS
const getAllTransactions = () => {
  const numberOfTransactions = () => Math.floor(Math.random() * 10) + 3;

  return generateRandomTransactionData(numberOfTransactions());
};

export const ALL_TRANSACTION_DATA: Transaction[] = getAllTransactions();

export const WEEKLY_DEPOSIT_DATA = generateRandomNumbersArray(7);

export const WEEKLY_WITHDRAW_DATA = generateRandomNumbersArray(7);

export const WEEKLY_ACTIVITY_DATA = {
  deposit: WEEKLY_DEPOSIT_DATA,
  withdraw: WEEKLY_WITHDRAW_DATA,
};

export const EXPENSE_STATS = generateRandomNumbersArray(4, 20,100,100);

export const BALANCE_HISTORY = generateRandomNumbersArray(9);
