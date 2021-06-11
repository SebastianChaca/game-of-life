import React from 'react'
import {Flex,Button, Text, useDisclosure} from '@chakra-ui/react'
import {SettingsIcon} from '@chakra-ui/icons'

const Settings = ({onOpen}) => {
  return (
    <Button bg='#2CC8F2' color='#FFF' _hover={{bg:'#93D5E7'}} onClick={()=>onOpen()}>    
    <Flex justifyContent='center' alignItems='center'>
      <SettingsIcon/> 
        <Text mb='2px' ml='3px'>Settings</Text>
    </Flex>
  </Button>
  )
}

export default Settings
