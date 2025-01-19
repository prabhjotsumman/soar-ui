import { User, CardDetails } from "./types";

// Constants
export const MIN_CARDS = 3;
export const MIN_TRANSACTIONS = 3;
export const WEEK_DAYS = 7;
export const EXPENSE_STATS_COUNT = 4;
export const BALANCE_HISTORY_COUNT = 9;

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
