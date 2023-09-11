export default (row, col, bombs) => {
  let field = [];
  let mineLocation = [];

  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      });
    }
    field.push(subCol);
  }

  let bombsCount = 0;
  while (bombsCount < bombs) {
    let x = randomNum(0, row - 1);
    let y = randomNum(0, col - 1);

    if (field[x][y].value === 0) {
      field[x][y].value = "X";
      mineLocation.push([x, y]);
      bombsCount++;
    }
  }

  for (let boderRow = 0; boderRow < row; boderRow++) {
    for (let coll = 0; coll < col; coll++) {
      if (field[boderRow][coll].value === "X") {
        continue;
      }

      if (boderRow > 0 && field[boderRow - 1][coll].value === "X") {
        field[boderRow][coll].value++;
      }

      if (
        boderRow > 0 &&
        coll < col - 1 &&
        field[boderRow - 1][coll + 1].value === "X"
      ) {
        field[boderRow][coll].value++;
      }

      if (coll < col - 1 && field[boderRow][coll + 1].value === "X") {
        field[boderRow][coll].value++;
      }

      if (
        boderRow < row - 1 &&
        coll < col - 1 &&
        field[boderRow + 1][coll + 1].value === "X"
      ) {
        field[boderRow][coll].value++;
      }

      if (boderRow < row - 1 && field[boderRow + 1][coll].value === "X") {
        field[boderRow][coll].value++;
      }

      if (
        boderRow < row - 1 &&
        coll > 0 &&
        field[boderRow + 1][coll - 1].value === "X"
      ) {
        field[boderRow][coll].value++;
      }

      if (coll > 0 && field[boderRow][coll - 1].value === "X") {
        field[boderRow][coll].value++;
      }

      if (
        boderRow > 0 &&
        coll > 0 &&
        field[boderRow - 1][coll - 1].value === "X"
      ) {
        field[boderRow][coll].value++;
      }
    }
  }
  return { field, mineLocation };
};

function randomNum(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
