import React from "react";

interface IProps {
  text: string;
  icon: any;
  onClick: any;
}

const ThemeSelector: React.FC<IProps> = ({ text, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center mb-2 cursor-pointer px-4 py-2 hover:text-tertiary-color transition-all"
    >
      {icon}
      <p className="text-base ml-2">{text}</p>
    </div>
  );
};

export default ThemeSelector;
