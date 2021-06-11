import React, {useState, useEffect} from 'react'
import produce from 'immer'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,  
  Radio, 
  RadioGroup,
  Stack 
} from "@chakra-ui/react"
import {restartGrid ,generatePatternToad, generatePatternBlinker} from '../../Utils/'

const ModalPatterns = ({isOpen, onClose, rows, cols, setGrid}) => {
  //estado del radio button group
  const [value, setValue] = useState(null)
//efecto que depende del estado del button group, dependiendo el valor
//se crea una nueva grilla con el patron correspondiente
  useEffect(()=>{
  setGrid(restartGrid(rows, cols))
   if(value=== '1'){
     setGrid(g => {
       return produce(g, gridCopy => {
         return generatePatternToad(g, rows, cols, gridCopy)
       })      
     });
   }else if(value === '2'){
     setGrid(g => {
         return produce(g, gridCopy => {
           return generatePatternBlinker(g, rows, cols, gridCopy)
         })      
       });
   }else if (value==='3'){
      const rowsArray = [];
      for (let i = 0; i < rows; i++) {
        rowsArray.push(
          Array.from(Array(cols), () => (Math.random() > 0.7 ? 1 : 0))
        );
      }
      setGrid(rowsArray);
   }
   
  },[value])
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
    <ModalOverlay />
    <ModalContent >
      <ModalHeader m='auto'>Patterns</ModalHeader>
      <ModalCloseButton />
      
      <ModalBody w='70%' m='auto'>
          <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">Toad</Radio>
            <Radio value="2">Blinker</Radio>
            <Radio value="3">Random</Radio>
          </Stack>
        </RadioGroup>
      </ModalBody>
      
      <ModalFooter m='auto' w='100%' >
        <Button w='100%' colorScheme="blue" m='auto' onClick={onClose}>
          Close
        </Button>
       
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default ModalPatterns
