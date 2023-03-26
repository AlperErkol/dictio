import axios from "axios";
import { IQuery } from "../../../type";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const WORD_OF_THE_DAY = "caveat";

const getDictionaryResult = async ({ query }: IQuery) => {
  const result = await axios.get(`${BASE_URL}/${query}`);
  return result;
};

export { getDictionaryResult, WORD_OF_THE_DAY };
