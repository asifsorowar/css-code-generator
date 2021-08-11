import { useContext, useReducer, createContext } from "react";

const initialState = {
  bgColor: "",
  fontFamily: "",
  fontColor: "",
};

export const actionType = {
  bgColor: "BG_COLOR",
  fontFamily: "FONT_FAMILY",
  fontColor: "FONT_COLOR",
  reset: "RESET",
};

const reducer = (state, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case actionType.bgColor:
      return { ...state, bgColor: action.payload };

    case actionType.fontFamily:
      return { ...state, fontFamily: action.payload };

    case actionType.fontColor:
      return { ...state, fontColor: action.payload };

    case actionType.reset:
      return initialState;

    default:
      return state;
  }
};

const reducerContext = createContext();

export const ReducerWrapper = ({ children }) => {
  return (
    <reducerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </reducerContext.Provider>
  );
};

export const useReducerValue = () => useContext(reducerContext);
