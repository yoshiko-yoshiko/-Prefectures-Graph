import React from "react";
import types from "./types";

const Styles: { [key: string]: React.CSSProperties } = {
  checkcardList: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    justifyContent: "flex-start",
    justifySelf: "auto",
  },
  text: { display: "contents", marginLeft: "1em", cursor: "pointer" },
  checkcard: {
    borderRadius: "24px",
    border: "solid 2px",
    textAlign: "center",
    padding: "4px",
    margin: "0.5rem",
  },
};

// 都道府県のチェックボックスのコンポーネント
const CheckField = (prefecture: {
  map: (
    arg0: () => JSX.Element
  ) =>
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  profName: any;
  profCode: string;
}) => {
  return (
    <>
      <div style={Styles.checkcardList}>
        {prefecture.map(() => (
          <div>
            <input
              type="checkbox"
              name="Prefecture"
              onChange={(e) => (prefecture.profName, prefecture.profCode)}
            />
            <label
              style={Styles.text}
              htmlFor={"checkbox" + prefecture.profCode}
            ></label>
          </div>
        ))}
      </div>
    </>
  );
};
export default CheckField;
