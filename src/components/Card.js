import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

const Card = ({ code, name }) => {
  const [colorCode, setColorCode] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColorCode("");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [colorCode]);

  return (
    <>
      <CopyToClipboard
        onCopy={() => {
          setColorCode(code);
        }}
        text={code}
      >
        <div
          style={{ backgroundColor: `${code}` }}
          className={colorCode === "" ? "card" : "card-clicked"}
        >
          <div
            className={colorCode === "" ? "card-bottom" : "card-bottom-clicked"}
          >
            <h4>{code}</h4>
            {colorCode !== "" && <h5 className="copied">Copied {code} </h5>}
            <p
              style={
                colorCode === "" ? { color: `${code}` } : { color: "#000000" }
              }
            >
              {name}
            </p>
          </div>
        </div>
      </CopyToClipboard>
    </>
  );
};
export default Card;
