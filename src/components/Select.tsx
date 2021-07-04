import React from "react";
import "../style/select.css";
import { useReducerValue, actionType } from "../reducer/reducerContext";

const Select = () => {
  const [{}, dispatch] = useReducerValue();

  const handleClick = (e: any) => {
    let name = e.target.name;

    if (name == "bgBlue")
      dispatch({ type: actionType.bgColor, payload: "#185ADB" });

    if (name == "bgGreen")
      dispatch({ type: actionType.bgColor, payload: "#66DE93" });

    if (name == "bgRed")
      dispatch({ type: actionType.bgColor, payload: "#CD113B" });

    if (name == "fontUbuntu")
      dispatch({ type: actionType.fontFamily, payload: "Ubuntu" });

    if (name == "fontRoboto")
      dispatch({ type: actionType.fontFamily, payload: "Roboto" });

    if (name == "fontCourier")
      dispatch({
        type: actionType.fontFamily,
        payload: "Courier New",
      });

    if (name == "cyan")
      dispatch({ type: actionType.fontColor, payload: "##00FFFF" });

    if (name == "purple")
      dispatch({ type: actionType.fontColor, payload: "#FF94CC" });

    if (name == "black")
      dispatch({ type: actionType.fontColor, payload: "#171717" });

    if (name == "reset") dispatch({ type: actionType.reset });
  };

  return (
    <div className="select">
      <div>
        <p>Background Color:</p>
        <button className="bg-blue" onClick={handleClick} name="bgBlue">
          Blue
        </button>
        <button className="bg-green" onClick={handleClick} name="bgGreen">
          Green
        </button>
        <button className="bg-red" onClick={handleClick} name="bgRed">
          Red
        </button>
      </div>
      <div>
        <p>Font Family:</p>
        <button className="bg-black" onClick={handleClick} name="fontUbuntu">
          ubuntu
        </button>
        <button className="bg-black" onClick={handleClick} name="fontRoboto">
          roboto
        </button>
        <button className="bg-black" onClick={handleClick} name="fontCourier">
          courier new
        </button>
      </div>
      <div>
        <p>Font Color:</p>
        <button className="bordered cyan" onClick={handleClick} name="cyan">
          cyan
        </button>
        <button className="bordered purple" onClick={handleClick} name="purple">
          purple
        </button>
        <button className="bordered black" onClick={handleClick} name="black">
          black
        </button>
      </div>
      <button name="reset" className="reset bg-yellow" onClick={handleClick}>
        reset
      </button>
    </div>
  );
};

export default Select;
