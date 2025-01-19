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
