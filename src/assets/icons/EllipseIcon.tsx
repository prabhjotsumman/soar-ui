import React from 'react';

interface EllipseIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const EllipseIcon: React.FC<EllipseIconProps> = ({ color = "#9199AF", ...props }) => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="15" cy="15" r="15" fill="white" fillOpacity="0.5" />
    </svg>
);

export default EllipseIcon;
