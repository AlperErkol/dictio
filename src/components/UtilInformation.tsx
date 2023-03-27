import React from "react";
import Badge from "./Badge";

interface IProps {
  title: string;
  data: any[];
}

const UtilInformation: React.FC<IProps> = ({ title, data }) => {
  return (
    <div className="mb-4">
      <span className="underline block mb-2 text-text-muted-color">
        {title}
      </span>
      <div>
        {data.map((item: string, idx: number) => (
          <Badge key={idx} text={item} />
        ))}
      </div>
    </div>
  );
};

export default UtilInformation;
