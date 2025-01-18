import React from 'react';

interface ChipIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const ChipIcon: React.FC<ChipIconProps> = ({ color = 'none', ...props }) => (
    <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <rect width="34.7713" height="34.7713" fill="url(#pattern0_14_1323)" />
        <defs>
            <pattern id="pattern0_14_1323" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_14_1323" transform="scale(0.01)" />
            </pattern>
            <image
                id="image0_14_1323"
                width="100"
                height="100"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export default ChipIcon;
