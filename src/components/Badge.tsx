import React from "react";

interface IProps {
  text: string;
}

const Badge: React.FC<IProps> = ({ text }) => {
  return (
    <span className="text-sm bg-tertiary-color mr-2 rounded-md py-1 px-2 text-black">
      {text}
    </span>
  );
};

export default Badge;
