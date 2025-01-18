import {
  CreditCardIcon,
  EconometricsIcon,
  EconomicInvestmentIcon,
  HomeIcon,
  LoanIcon,
  ServiceIcon,
  SettingsSolidIcon,
  TransferIcon,
  UserIcon,
} from "../../assets/icons";

export const MENU_ITEMS = [
  { label: "Dashboard", link: "/", Icon: HomeIcon },
  { label: "Transactions", link: "/transaction", Icon: TransferIcon },
  { label: "Accounts", link: "/accounts", Icon: UserIcon },
  {
    label: "Investments",
    link: "/investments",
    Icon: EconomicInvestmentIcon,
  },
  { label: "Credit Cards", link: "/credit-cards", Icon: CreditCardIcon },
  { label: "Loans", link: "/loand", Icon: LoanIcon },
  { label: "Services", link: "/services", Icon: ServiceIcon },
  { label: "My Privileges", link: "/my-privileges", Icon: EconometricsIcon },
  { label: "Setting", link: "/settings", Icon: SettingsSolidIcon },
];
