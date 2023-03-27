import React from "react";

interface IProps {
  text: string;
}

const Badge: React.FC<IProps> = ({ text }) => {
  return (
    <span className="inline-block text-sm bg-input-color mb-1 mr-1 text-white rounded-md py-1 px-2 hover:text-tertiary-color cursor-default">
      {text}
    </span>
  );
};

export default Badge;
