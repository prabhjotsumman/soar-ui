import React from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
    label: string;
    link?: string;
    Icon: React.ElementType;
    isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    link = "/",
    Icon,
    isActive = false,
}) => (
    <li
        className={`flex items-center p-2 md:p-2.5 lg:p-2.5 hover:text-sidebar-text-selected`}
        role="menuitem"
        aria-current={isActive ? "page" : undefined}
    >
        <Icon
            color={isActive ? "black" : undefined}
            className={`hover:text-black ${isActive ? "text-black" : ""}`}
            aria-hidden="true"
        />
        <Link
            to={link}
            className={`ml-4 text-sm lg:text-lg font-normal font-inter ${
                isActive ? "text-black font-medium" : ""
            }`}
            aria-label={label}
        >
            {label}
        </Link>
    </li>
);

export default SidebarItem;
