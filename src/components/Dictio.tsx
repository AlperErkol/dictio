import React from "react";
import DictioBody from "./DictioBody";
import DictioHeader from "./DictioHeader";
import Line from "./Line";
import Link from "next/link";

interface IProps {
  data: any;
}

const Dictio: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <DictioHeader data={data} />
      <DictioBody data={data.meanings} />
      <Line />
      <div className="mt-2">
        <span className="text-sm text-text-muted-color">Source : </span>
        <Link
          className="text-sm italic hover:text-tertiary-color transition-all"
          href={""}
        >
          {data.sourceUrls[0]}
        </Link>
      </div>
    </div>
  );
};

export default Dictio;
