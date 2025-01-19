import React from "react";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className = "" }: SectionHeadingProps) => {
  return (
    <h2
      id={`${title}-section`}
      className={`text-dashboard-headings text-dashboard-heading-color font-inter leading-dashboard-heading-line-height font-semibold mb-4 ${className}`}
    >
      {title}
    </h2>
  );
};

export default React.memo(SectionHeading);
