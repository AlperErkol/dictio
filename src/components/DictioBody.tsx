import React from "react";
import Badge from "./Badge";
import Line from "./Line";
import Link from "next/link";
import UtilInformation from "./UtilInformation";

interface IProps {
  data: any;
}

const DictioBody: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      {data.map((item: any, idx: number) => (
        <div key={idx} className="mb-4">
          <div className="flex items-center mb-2">
            <span className="mr-2 italic font-semibold text-2xl">
              {item.partOfSpeech}
            </span>
            <Line />
          </div>
          <div>
            <span className="mb-4 block underline text-lg text-text-muted-color">
              Meanings
            </span>
            <ul className="list-disc marker:text-tertiary-color ml-6">
              {item.definitions.map((item: any, idx: number) => (
                <li key={idx} className="mb-4">
                  <span className="text-text-color">{item.definition}</span>
                  {item.example && (
                    <q className="block text-text-muted-color text-lg">
                      {item.example}
                    </q>
                  )}
                </li>
              ))}
            </ul>
            {item.synonyms.length > 0 && (
              <UtilInformation title="Synonyms" data={item.synonyms} />
            )}
            {item.antonyms.length > 0 && (
              <UtilInformation title="Antonyms" data={item.antonyms} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DictioBody;
