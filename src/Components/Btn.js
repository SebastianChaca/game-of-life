import React from 'react'
import {Button} from '@chakra-ui/react'
const Btn = ({title, handleFunction}) => {
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
        title 
      }
    </Button>
  )
}

export default Btn
