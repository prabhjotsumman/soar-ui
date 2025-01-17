import React from "react";

import homeIcon from "../assets/icons/home-icon.svg";
import transferIcon from "../assets/icons/transfer-icon.svg";
import userIcon from "../assets/icons/user-icon.svg";
import investmentIcon from "../assets/icons/economic-investment-icon.svg";
import creditIcon from "../assets/icons/credit-card-icon.svg";
import loanIcon from "../assets/icons/loan-icon.svg";
import serviceIcon from "../assets/icons/service-icon.svg";
import econometricsIcon from "../assets/icons/econometrics-icon.svg";
import settingsSolidIcon from "../assets/icons/settings-solid-icon.svg";

import economicIcon from "../assets/icons/economic-investment-icon.svg";
import financeIcon from "../assets/icons/finance-icon.svg";
import dollarIcon from "../assets/icons/dollar-icon.svg";
import magnifyingIcon from "../assets/icons/magnifying-glass-icon.svg";
import notificationIcon from "../assets/icons/notification-icon.svg";
import paypalIcon from "../assets/icons/paypal-icon.svg";
import settingsIcon from "../assets/icons/settings-icon.svg";
import chipIcon from "../assets/icons/chip-icon.svg";
import chipBlackIcon from "../assets/icons/chip-black-icon.svg";
import ellipseIcon from "../assets/icons/ellipse-icon.svg";
import ellipseGrayIcon from "../assets/icons/ellipse-gray-icon.svg";
import chevronIcon from "../assets/icons/chevron.svg";
import sendIcon from "../assets/icons/send.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";

import LogoIcon from "../assets/icons/logo.svg";

const Icon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
  ...props
}) => {
  const icons: Record<string, JSX.Element> = {
    home: (
      <img
        src={homeIcon}
        className={`fill-current ${className}`}
        alt="home icon"
      />
    ),
    credit: (
      <img
        src={creditIcon}
        className={`fill-current ${className}`}
        alt="credit icon"
      />
    ),
    investment: (
      <img
        src={investmentIcon}
        className={`fill-current ${className}`}
        alt="investment icon"
      />
    ),
    econometrics: (
      <img
        src={econometricsIcon}
        className={`fill-current ${className}`}
        alt="econometrics icon"
      />
    ),
    economic: (
      <img
        src={economicIcon}
        className={`fill-current ${className}`}
        alt="economic icon"
      />
    ),
    finance: (
      <img
        src={financeIcon}
        className={`fill-current ${className}`}
        alt="finance icon"
      />
    ),
    dollar: (
      <img
        src={dollarIcon}
        className={`fill-current ${className}`}
        alt="dollar icon"
      />
    ),
    loan: (
      <img
        src={loanIcon}
        className={`fill-current ${className}`}
        alt="loan icon"
      />
    ),
    magnifying: (
      <img
        src={magnifyingIcon}
        className={`fill-current ${className}`}
        alt="magnifying icon"
      />
    ),
    notification: (
      <img
        src={notificationIcon}
        className={`fill-current ${className}`}
        alt="notification icon"
      />
    ),
    paypal: (
      <img
        src={paypalIcon}
        className={`fill-current ${className}`}
        alt="paypal icon"
      />
    ),
    service: (
      <img
        src={serviceIcon}
        className={`fill-current ${className}`}
        alt="service icon"
      />
    ),
    settings: (
      <img
        src={settingsIcon}
        className={`fill-current ${className}`}
        alt="settings icon"
      />
    ),
    settingsSolid: (
      <img
        src={settingsSolidIcon}
        className={`fill-current ${className}`}
        alt="settings solid icon"
      />
    ),
    transfer: (
      <img
        src={transferIcon}
        className={`fill-current ${className}`}
        alt="transfer icon"
      />
    ),
    user: (
      <img
        src={userIcon}
        className={`fill-current ${className}`}
        alt="user icon"
      />
    ),
    logo: (
      <img
        src={LogoIcon}
        className={`fill-current ${className}`}
        alt="logo icon"
      />
    ),
    chip: (
      <img
        src={chipIcon}
        className={`fill-current ${className}`}
        alt="chip icon"
      />
    ),
    chipBlack: (
      <img
        src={chipBlackIcon}
        className={`fill-current ${className}`}
        alt="chip black icon"
      />
    ),
    ellipse: (
      <img
        src={ellipseIcon}
        className={`fill-current ${className}`}
        alt="chip icon"
      />
    ),
    ellipseGray: (
      <img
        src={ellipseGrayIcon}
        className={`fill-current ${className}`}
        alt="chip icon"
      />
    ),
    chevron: (
      <img
        src={chevronIcon}
        className={`fill-current ${className}`}
        alt="chevron icon"
      />
    ),
    send: (
      <img
        src={sendIcon}
        className={`fill-current ${className}`}
        alt="send icon"
      />
    ),
    hamburger: (
      <img
        src={hamburgerIcon}
        className={`fill-current ${className}`}
        alt="hamburger icon"
      />
    ),
  };

  return (
    <div {...props}>
      {icons[name] || <span>X</span>} {/* Fallback if icon name is invalid */}
    </div>
  );
};

export default Icon;
