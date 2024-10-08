import React from "react";

const CheckmarkIcon = ({ className = "w-6 h-6 text-green-500" }) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 19.4L4.2 14.7a1 1 0 1 1 1.4-1.4l3.4 3.4 9.2-9.2a1 1 0 0 1 1.4 1.4L9 19.4z" />
    </svg>
  );
};

export default CheckmarkIcon;
