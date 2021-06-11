import React, {useEffect} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,  
  Flex,
  Spacer, 
} from "@chakra-ui/react"
import {AddIcon, MinusIcon} from '@chakra-ui/icons'
import TextComp from '../TextComp'
import BtnSettings from './BtnSettings'
import {restartGrid} from '../../Utils/'
const ModalSetting = ({isOpen, onClose, rows, cols,intervalLoop, setIntervalLoop, setRows, setCols, setGrid}) => {

  const add=(set, state, title)=>{
    if(title === 'Interval'){
      set(state + 100)
    }else {
      set(state +1)
    }
  }
  const sub=(set, state, title)=>{
    if(title === 'Interval'){
      set(state - 100)
    }else {
      set(state - 1)
    }
  }
  useEffect(()=>{
    setGrid(restartGrid(rows, cols)) 
  },[rows, cols])
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <ModalOverlay />
    <ModalContent >
      <ModalHeader>Settings</ModalHeader>
      <ModalCloseButton />
      
      <ModalBody>
      <Flex alignItems='center'>     
          <TextComp title={'Rows'} state={rows}/>
          <Spacer/>
          <BtnSettings icon={<AddIcon/>} handleFunction={()=>add(setRows, rows)}/>
          <BtnSettings icon={<MinusIcon/>} handleFunction={()=>sub(setRows, rows)}/>              
      </Flex>
      <Flex alignItems='center'>     
          <TextComp title={'Columns'} state={cols}/>
          <Spacer/>
          <BtnSettings icon={<AddIcon/>}  handleFunction={()=>add(setCols, cols)}/>
          <BtnSettings icon={<MinusIcon/>} handleFunction={()=>sub(setCols, cols)} />              
      </Flex>
      <Flex alignItems='center'>     
          <TextComp title={'Interval'} state={intervalLoop}/>
          <Spacer/>
          <BtnSettings icon={<AddIcon/>} handleFunction={()=>add(setIntervalLoop, intervalLoop, 'Interval')}/>
          <BtnSettings icon={<MinusIcon/>}  handleFunction={()=>sub(setIntervalLoop, intervalLoop, 'Interval')}/>              
      </Flex>
      </ModalBody>
      
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default ModalSetting
