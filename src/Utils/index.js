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

 export const generatePatternToad=(g, rowsNum, colsNum, gridCopy)=>{
  g.map((rows, i)=>
  rows.map((cols, j)=>{
    if(  i === Math.trunc(rowsNum / 2)  && j === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i === Math.trunc(rowsNum / 2)  && j + 1 === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i === Math.trunc(rowsNum / 2)  && j + 2 === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i + 1=== Math.trunc(rowsNum / 2)  && j + 1 === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i +1  === Math.trunc(rowsNum / 2)  && j  === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i +1  === Math.trunc(rowsNum / 2)  && j - 1 === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
  })
)
}
export const generatePatternBlinker=(g, rowsNum, colsNum, gridCopy)=>{
  g.map((rows, i)=>
  rows.map((cols, j)=>{
    if(  i === Math.trunc(rowsNum / 2)  && j === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i === Math.trunc(rowsNum / 2)  && j + 1 === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
    if(  i === Math.trunc(rowsNum / 2)  && j + 2 === Math.trunc(colsNum / 2)   ){
      gridCopy[i][j] = 1
    }
  
  })
)
}


// export const generatePatternPulsar=(g, rowsNum, colsNum, gridCopy)=>{
//   g.map((rows, i)=>
//   rows.map((cols, j)=>{
//     if(  i - 2 === Math.trunc(rowsNum / 2)   && j + 5 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i - 2  === Math.trunc(rowsNum / 2)  && j + 4 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i - 2  === Math.trunc(rowsNum / 2)  && j + 3 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2 - 2  === Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 3 - 2  === Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 4 - 2  === Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i +5 - 2  === Math.trunc(rowsNum / 2)   && j + 5 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i +5 - 2  === Math.trunc(rowsNum / 2)  && j + 4 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i  +5 - 2 === Math.trunc(rowsNum / 2)  && j + 3 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2 - 2 === Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 4 - 2  === Math.trunc(rowsNum / 2)   && j + 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 3 - 2  === Math.trunc(rowsNum / 2)   && j + 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2 - 2  === Math.trunc(rowsNum / 2)   && j + 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }


//     if(  i + 5 === Math.trunc(rowsNum / 2)   && j + 5 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i  + 5 === Math.trunc(rowsNum / 2)  && j + 4 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i+ 5 === Math.trunc(rowsNum / 2)  && j + 3 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2  + 5=== Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 3 + 5 === Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 4 + 5=== Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i +5 + 5 === Math.trunc(rowsNum / 2)   && j + 5 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i +5 + 5 === Math.trunc(rowsNum / 2)  && j + 4 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i  +5 + 5=== Math.trunc(rowsNum / 2)  && j + 3 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2  + 5=== Math.trunc(rowsNum / 2)   && j + 7 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
   
//     if(  i + 3 + 5 === Math.trunc(rowsNum / 2)   && j + 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2  + 5 === Math.trunc(rowsNum / 2)   && j + 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i + 2  +4 === Math.trunc(rowsNum / 2)   && j + 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
    


//     if(  i  + 10=== Math.trunc(rowsNum / 2)   && j - 1 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i  + 10 === Math.trunc(rowsNum / 2)   && j - 2 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i  + 10 === Math.trunc(rowsNum / 2)   && j - 3 === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }
//     if(  i  + 8 === Math.trunc(rowsNum / 2)   && j  === Math.trunc(colsNum / 2)   ){
//       gridCopy[i][j] = 1
//     }


//   })
// )
// }

