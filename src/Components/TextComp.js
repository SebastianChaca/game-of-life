import React from 'react'
import {Text} from '@chakra-ui/react'
const TextComp = ({state, title}) => {
  return (
    <Text mb='10px' mr='10px' fontSize='18px'> {title} : {state}  {title === 'Interval' && 'ms'} </Text>
  )
}
export default TextComp
