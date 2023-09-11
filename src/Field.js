import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import createField from "./createField";
import { revealed } from "./reveal";

const Field = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);

  useEffect(() => {
    function resetField() {
      const newField = createField(10, 10, 10);
      setGrid(newField.field);
      setMineLocations(newField.mineLocation);
      setNonMineCount(10 * 10 - 10);
    }
    resetField();
  }, []);

  const updateFlag = (e, x, y) => {
    e.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  const revealTile = (x, y) => {
    if (grid[x][y].revealed) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("mine found");
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let newRevealedField = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedField.arr);
      setNonMineCount(newRevealedField.newNonMinesCount);
    }
  };

  if (!grid) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <p>Non-Mine Count: {nonMineCount}</p>
      {grid.map((singleRow) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {singleRow.map((singleBlock) => {
              return (
                <Tile
                  details={singleBlock}
                  updateFlag={updateFlag}
                  revealTile={revealTile}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Field;
