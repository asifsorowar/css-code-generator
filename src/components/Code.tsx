import React from "react";
import "../style/code.css";
import { useReducerValue } from "../reducer/reducerContext";

const Code = () => {
  const [{ bgColor, fontFamily, fontColor }] = useReducerValue();
  return (
    <div className="code">
      <p>Code:</p>
      <div className="code-div">
        {!bgColor && !fontFamily && !fontColor && (
          <p>Css code will be showed here........</p>
        )}

        {(bgColor || fontFamily || fontColor) && (
          <>
            <p className="bracket">&#x0007B;</p>
            {bgColor && <p>&#x00009;background-color: {bgColor};</p>}
            {fontFamily && <p>&#x00009;font-family: {fontFamily};</p>}
            {fontColor && <p>&#x00009;color: {fontColor};</p>}
            <p className="bracket">
              <p className="bracket">&#x0007D;</p>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Code;
