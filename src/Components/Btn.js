import React from 'react'
import {Button} from '@chakra-ui/react'
const Btn = ({title, running, setRunning, restartGrid, setGrid}) => {
  return (
    <Button
      onClick={()=>{
        if (running != null){
          setRunning(!running)
        }
        else{
          setGrid(restartGrid())
          localStorage.removeItem('grid')
        }
      }} 
      mb='10px' 
      mr='10px' 
      bg='#2CC8F2' 
      color='#FFF' 
      _hover={{bg:'#93D5E7'}}
    >
      {title}
    </Button>
  )
}

export default Btn
