import React from "react";

interface IMinusIconProps {
  disabled: boolean;
}

const MinusIcon: React.FC<IMinusIconProps> = ({ disabled }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.055 13C18.5651 13 19 12.5526 19 12C19 11.4561 18.5651 11 18.055 11H5.94504C5.45161 11 5 11.4561 5 12C5 12.5526 5.45161 13 5.94504 13H18.055Z"
        fill={disabled ? "#7b8e98" : "#1A1A1A"}
      />
    </svg>
  );
};

export default MinusIcon;
