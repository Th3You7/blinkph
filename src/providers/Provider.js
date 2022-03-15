import { createContext, useReducer, useState, useEffect } from "react";
import { LOG_IN, SELECT } from "../assets/constants";

export const MainContext = createContext();

const Provider = ({ children }) => {
  const initialState = {
    user: "",
    answer: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          user: action.payload,
        };

      case SELECT:
        return {
          ...state,
          answer: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;
