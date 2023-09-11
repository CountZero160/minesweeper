import React from "react";

export default function Tile({ details, updateFlag, revealTile }) {
  return (
    <div
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
