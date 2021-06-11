import React from 'react'
import {Box } from '@chakra-ui/react'
const Cell = ({i, j, grid, setGrid}) => {
  return (
    <Box 
      onClick={()=> {
        //copio el estado en una variable nueva
        const newGrid=[...grid]
        //chequeo si en la posicion donde se encuentro la celula esta viva o muerta. 0 === muerta, 1 === viva
        //y la cambio a su valor opuesto
        newGrid[i][j]= grid[i][j] ? 0 : 1
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
