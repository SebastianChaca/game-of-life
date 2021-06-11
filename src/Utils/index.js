export const restartGrid= (rowsNum, colsNum)=>{    
  return Array.from({length: rowsNum}).map(() => Array.from({length: colsNum}).fill(0))
 }


const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]
export const generateGrid=(g, rowsNum, colsNum, gridCopy)=>{
    g.map((rows, i)=>
    rows.map((cols, j)=>{
      let neighbors = 0 
      operations.forEach(([x, y]) => {
        const newI = i + x;
        const newJ = j + y;
        if (newI >= 0 && newI < rowsNum && newJ >= 0 && newJ < colsNum) {
          neighbors += g[newI][newJ];
        }
      });

      if (neighbors < 2 || neighbors > 3) {
        gridCopy[i][j] = 0;
      } else if (g[i][j] === 0 && neighbors === 3) {
        gridCopy[i][j] = 1;
      }
    })
  )
 }