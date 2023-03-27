import React, { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { useRouter } from "next/router";

interface IProps {
  word: string;
  phonetics: any[];
}

interface IPhoneticObject {
  phonetic: string;
  audioUrl: string;
}

const DictioHeader: React.FC<IProps> = ({ word, phonetics }) => {
  const router = useRouter();

  const [isAudioLoaded, setIsAudioLoaded] = useState<any>();

  const phoneticObject: IPhoneticObject = {
    phonetic: "",
    audioUrl: "",
  };

  for (let index = 0; index < phonetics.length; index++) {
    if (
      phonetics[index].text &&
      phonetics[index].text !== "" &&
      phonetics[index].audio !== ""
    ) {
      phoneticObject.phonetic = phonetics[index].text;
      phoneticObject.audioUrl = phonetics[index].audio;
      break;
    }
  }
  useEffect(() => {
    let audio = new Audio(phoneticObject.audioUrl);
    setIsAudioLoaded(audio);
  }, [router.query.search]);

  const start = () => {
    isAudioLoaded.play();
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl font-bold mb-4">{word}</h2>
        {isAudioLoaded && (
          <div>
            <button
              onClick={() => start()}
              className="cursor-pointer w-14 h-14 rounded-full flex justify-center items-center"
            >
              <BsPlayCircle size={56} color="#00e9a3" />
            </button>
          </div>
        )}
      </div>
      <span className="text-tertiary-color text-xl">
        {phoneticObject.phonetic}
      </span>
    </div>
  );
};

export default DictioHeader;
