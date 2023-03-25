interface IQuery {
  query: string;
}
interface IQueryError {
  error: boolean;
  errorMessage: string;
}

export { IQuery, IQueryError };
