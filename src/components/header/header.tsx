import React, { useReducer } from "react";
import "./header.scss"
interface headerState {
  items: string[];
}
interface headerAction {
  type: "FINDER" | "MAP";
}
const initialHeaderState = {
  items: ["Finder", "File", "Edit", "View", "Go", "Window", "Help"],
};
export const headerReducer = (state: headerState=initialHeaderState, action: headerAction) => {
  switch (action.type) {
    case "FINDER":
      return {
        ...state,
        items: ["Finder", "File", "Edit", "View", "Go", "Window", "Help"],
      };
  }
};
export const Header = () => {
  const [headerState, setHeaderState] = useReducer(headerReducer, initialHeaderState)
  return (
    <div className="header">
      <div className="appleicon" />
      {
        headerState?.items.map((item, i) => {
          return i == 0 ? (
            <div className="headerItem" style={{ fontWeight: `bold` }} key={i}>
              {item}
            </div>
          ) : (
            <div className="headerItem" key={i}>
              {item}
            </div>
          );
        })
      }
      <div className="battery" />
      <div className="wifi" />
      <div className="search" />
      <div className="control" />
      <div className="siri" />
      <div className="date" />
    </div>
  );
};
