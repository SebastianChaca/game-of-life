import React from 'react'
import {Button} from '@chakra-ui/react'
const Btn = ({title, handleFunction, running}) => {
  return (
    <Button
      onClick={()=>{ handleFunction()}} 
      mb='10px' 
      mr='10px' 
      bg='#2CC8F2' 
      color='#FFF' 
      _hover={{bg:'#93D5E7'}}
    >
      {
        title === 'Start' ? running ? "Stop" : "Start" : title
      }
    </Button>
  )
}

export default Btn
