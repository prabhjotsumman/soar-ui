export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const generateRandomTransactionData = (count: number) => {
  const sources = ["card", "paypal", "person"] as const;

  const getRandomSource = () =>
    sources[Math.floor(Math.random() * sources.length)];

  const getRandomAmount = () =>
    (Math.random() > 0.5 ? 1 : -1) *
    parseFloat((Math.random() * 1000).toFixed(2));

  const getRandomDate = () => {
    const randomDate = new Date(
      Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)
    );
    return randomDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return Array.from({ length: count }, () => ({
    id: new Date().getTime(),
    source: getRandomSource(),
    amount: parseFloat(getRandomAmount() as unknown as string),
    date: getRandomDate(),
  }));
};

export const generateRandomCreditCardData = () => {
  // Random cardholder name generator
  const getRandomCardHolderName = () => {
    const firstNames = ["John", "Jane", "Alex", "Chris", "Taylor", "Jordan"];
    const lastNames = ["Smith", "Doe", "Brown", "Johnson", "Davis", "Wilson"];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  };

  // Generate random balance
  const getRandomBalance = () => parseFloat((Math.random() * 10000).toFixed(2));

  // Generate valid thru (MM/YY)
  const getRandomValidThru = () => {
    const currentYear = new Date().getFullYear();
    const year = Math.floor(Math.random() * 5) + (currentYear % 100); // 5 years from the current year
    const month = Math.floor(Math.random() * 12) + 1; // 1 to 12
    return `${month.toString().padStart(2, "0")}/${year}`;
  };

  // Generate masked 12-digit card number
  const getMaskedCardNumber = () => {
    const randomDigits = () => Math.floor(Math.random() * 10);
    return `${randomDigits()}${randomDigits()}${randomDigits()}${randomDigits()} **** **** ${randomDigits()}${randomDigits()}${randomDigits()}${randomDigits()}`;
  };

  // Construct credit card data
  return {
    balance: getRandomBalance(),
    cardHolderName: getRandomCardHolderName(),
    validThru: getRandomValidThru(),
    maskedCardNumber: getMaskedCardNumber(),
  };
};

export const generateRandomNumbersArray = (
  count: number,
  min = 120,
  max = 800
): number[] => {
  const getRandomNumber = () =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const randomNumbers = Array.from({ length: count }, () => getRandomNumber());
  return randomNumbers;
};
