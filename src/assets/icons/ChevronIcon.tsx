import React from 'react';

interface ChevronIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ color = '#718EBF', ...props }) => (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 1L7.5 7.5L1 14" stroke={color} strokeWidth="2"/>
    </svg>
);

export default ChevronIcon;
