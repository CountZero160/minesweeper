import React from "react";

export default function Tile({ details, updateFlag, revealTile }) {
  return (
    <div
      className="tile"
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealTile(details.x, details.y)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        border: "1px solid black",
        background: "grey",
      }}
    >
      {details.revealed ? details.value : ""}
    </div>
  );
}

const chexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#aad751";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#a2d249";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#a2d249";
  } else {
    return "#aad751";
  }
};

const bombChexPattern = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c29f";
  } else if (x % 2 === 0 && y % 2 !== 0) {
    return "#d7b899";
  } else if (x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c29f";
  }
};

const numColorCode = (num) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#1976d2";
  } else if (num === 6) {
    return "#1976d2";
  } else {
    return "white";
  }
};
