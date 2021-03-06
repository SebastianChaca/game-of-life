import React from 'react'
import {Box } from '@chakra-ui/react'
import produce from "immer";
const Cell = ({i, j, grid, setGrid}) => {
  return (
    <Box 
      onClick={()=> {
       const newGrid= produce(grid, gridCopy => {
         gridCopy[i][j] = grid[i][j]? 0 : 1
       })        
        localStorage.setItem('grid', JSON.stringify(newGrid))
        setGrid(newGrid)
      }} 
      w='20px' 
      h='20px' 
      m='auto'
      //chequeo si la celula esta viva o muerta y le agrego color 
      bg= {grid[i][j] ? '#2CC8F2' : undefined} 
      border={grid[i][j] ? undefined : '1px'} 
      borderColor='grey' 
      borderRadius='100%'       
      _hover={{transform: "scale(1.2)", borderColor:'black'}} 
      />
  )
}

export default Cell
