import React from 'react';

interface EllipseGrayIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const EllipseGrayIcon: React.FC<EllipseGrayIconProps> = ({ color = '#9199AF', ...props }) => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="15" cy="15" r="15" fill={color} fillOpacity="0.5" />
    </svg>
);

export default EllipseGrayIcon;