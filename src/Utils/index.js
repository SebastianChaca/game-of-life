// funcion que crea un array basado en el numero de filas
//que a su vez en cada elemento se crea otro array basado en el numero de columnas
//que luego al ser mapeado en el componente grid crea la grilla del juego
export const restartGrid= (rowsNum, colsNum)=>{    
  return Array.from({length: rowsNum}).map(() => Array.from({length: colsNum}).fill(0))
 }

//operaciones que se le agregan a los index i y j para chequear el valor de sus vecinos
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
//hacer circular la grilla
const countNeighbors = (grid, x, y, rowsNum, colsNum) => {
  return operations.reduce((acc, [i, j]) => {
    const row = (x + i + rowsNum) % rowsNum;
    const col = (y + j + colsNum) % colsNum;
    acc += grid[row][col];
    return acc;
  }, 0);
};

export const generateGrid=(g, rowsNum, colsNum, gridCopy)=>{
    g.map((rows, i)=>
    rows.map((cols, j)=>{
      let neighbors = countNeighbors(g, i, j, rowsNum, colsNum)       
      
      if (neighbors < 2 || neighbors > 3) {
        gridCopy[i][j] = 0;
      //si la celula esta muerta y tiene mas de 3 vecinos se reproduce
      } else if (g[i][j] === 0 && neighbors === 3) {
        gridCopy[i][j] = 1;
      }
    })
  )
 }


// patrones predeterminados
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


