import React from 'react'
import { IconButton} from "@chakra-ui/react"
const BtnSettings = ({icon, handleFunction}) => {
  return (
    <IconButton  
              bg='#2CC8F2'
              color='#FFF'              
              size="sm"
              icon={icon}
              m='5px'
              onClick={()=>{handleFunction()}}
              />
  )
}

export default BtnSettings
