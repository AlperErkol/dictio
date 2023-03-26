import React from "react";
import { BsPlayFill } from "react-icons/bs";

interface IProps {
  data: any;
}

const DictioHeader: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex justify-between items-center my-12">
      <div className="flex flex-col">
        <h2 className="text-6xl font-bold">{data.word}</h2>
        <span className="text-tertiary-color text-xl">
          {data.phonetic ? data.phonetic : data.phonetics[1].text}
        </span>
      </div>
      <div className="cursor-pointer w-20 h-20 bg-red-500 rounded-full flex justify-center items-center">
        <BsPlayFill size={56} color="#00e9a3" />
      </div>
    </div>
  );
};

export default DictioHeader;
