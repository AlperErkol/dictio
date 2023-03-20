import { IQuery, IQueryError } from "../type";

const error: IQueryError = {
  query: "",
};

const wordRegex = /^[a-zA-Z]+$/i;

const validateSearchInput = ({ query }: IQuery) => {
  if (!query) error.query = "Can not be empty!";
  else if (!wordRegex.test(query)) error.query = "Invalid syntax!";
  else error.query = "";
  return error;
};

export { validateSearchInput };
