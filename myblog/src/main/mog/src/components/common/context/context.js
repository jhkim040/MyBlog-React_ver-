import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = true;

export const OPEN_MENU = "OPEN_MENU";
export const HIDE_MENU = "HIDE_MENU";

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return true;
    case HIDE_MENU:
      return false;
    default:
      return false;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
