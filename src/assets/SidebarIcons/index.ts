import EconometricsIcon from "./EconometricsIcon";
import CreditCardIcon from "./CreditCardIcon";
import EconomicInvestmentIcon from "./EconomicInvestmentIcon";
import FinanceIcon from "./FinanceIcon";
import LoanIcon from "./LoanIcon";
import ServiceIcon from "./ServiceIcon";
import SettingsSolidIcon from "../../components/SettingIcon";
import TransferIcon from "./TransferIcon";
import UserIcon from "./UserIcon";
import HomeIcon from "./HomeIcon";

// Enum for icons
export enum SIDEBAR_ICONS {
  Econometrics = "Econometrics",
  CreditCard = "CreditCard",
  EconomicInvestment = "EconomicInvestment",
  Finance = "Finance",
  Loan = "Loan",
  Service = "Service",
  SettingsSolid = "SettingsSolid",
  Transfer = "Transfer",
  User = "User",
  Home = "Home",
}

// Export icons map
export const Icons: Record<
  SIDEBAR_ICONS,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  [SIDEBAR_ICONS.CreditCard]: CreditCardIcon,
  [SIDEBAR_ICONS.Econometrics]: EconometricsIcon,
  [SIDEBAR_ICONS.EconomicInvestment]: EconomicInvestmentIcon,
  [SIDEBAR_ICONS.Finance]: FinanceIcon,
  [SIDEBAR_ICONS.Loan]: LoanIcon,
  [SIDEBAR_ICONS.Service]: ServiceIcon,
  [SIDEBAR_ICONS.SettingsSolid]: SettingsSolidIcon,
  [SIDEBAR_ICONS.Transfer]: TransferIcon,
  [SIDEBAR_ICONS.Home]: HomeIcon,
  [SIDEBAR_ICONS.User]: UserIcon,
};
