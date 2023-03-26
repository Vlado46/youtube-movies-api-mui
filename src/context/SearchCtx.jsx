import { createContext } from "react";

const SearchCtx = createContext({
  search: "",
  onSearch: () => {},
});
export default SearchCtx;
