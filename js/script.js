function validSolution(fullArray) {
  {
    const yHistory = new Set();
    const xHistory = new Set();

    for (let index = 0; index < 9; index++) {
      const xArray = fullArray[index];

      for (let i = 0; i < 9; i++) {
        const xElement = xArray[i];
        const yElement = fullArray[i][index];

        if (xHistory.has(xElement) || xElement == 0) {
          return false;
        } else {
          xHistory.add(xElement);
        }

        if (yHistory.has(yElement) || yElement == 0) {
          return false;
        } else {
          yHistory.add(yElement);
        }
      }
      xHistory.clear();
      yHistory.clear();
    }
  }

  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      const minArr = [
        fullArray[y][x],
        fullArray[y][x + 1],
        fullArray[y][x + 2],
        fullArray[y + 1][x],
        fullArray[y + 1][x + 1],
        fullArray[y + 1][x + 2],
        fullArray[y + 2][x],
        fullArray[y + 2][x + 1],
        fullArray[y + 2][x + 2],
      ];

      const minHistory = new Set();

      for (let minIndex = 0; minIndex < 9; minIndex++) {
        const element = minArr[minIndex];
        if (minHistory.has(element)) {
          return false;
        } else {
          minHistory.add(element);
        }
      }
    }
  }

  return true;
}

const ansver1 = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]); // => true
console.log(ansver1);

const ansver2 = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]); // => false

console.log(ansver2);
