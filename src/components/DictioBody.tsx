import React from "react";
import Badge from "./Badge";
import Line from "./Line";
import Link from "next/link";

interface IProps {
  data: any;
}

const DictioBody: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      {data.map((item: any) => (
        <div className="mb-4">
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
              {item.definitions.map((item: any) => (
                <li className="mb-4">
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
              <div>
                <span className="underline block mb-2">Synonyms</span>
                {item.synonyms.map((synonym: string) => (
                  <Link href={`/?search=${synonym}`}>
                    <Badge text={synonym} />
                  </Link>
                ))}
              </div>
            )}
            {item.antonyms.length > 0 && (
              <div>
                <span className="underline block mb-2">Antonyms</span>
                {item.antonyms.map((antonym: string) => (
                  <Link href={`/?search=${antonym}`}>
                    <Badge text={antonym} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DictioBody;
