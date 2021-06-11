import React, {useState, useEffect} from 'react';
import produce from "immer";
import {SimpleGrid, Box, Flex, Spacer,  useDisclosure, Button} from '@chakra-ui/react'
import Settings from './Components/Settings/Settings';
import Cell from './Components/Cell';
import Btn from './Components/Btn'
import TextComp from './Components/TextComp';
import ModalSetting from './Components/Settings/ModalSetting';
import ModalPatterns from './Components/Patterns/ModalPatterns'
import {generateGrid, restartGrid,} from './Utils/'


function App() {  
  const [intervalLoop, setIntervalLoop]=useState(1000)
  const [generation, setGeneration]=useState(0)
  const [running, setRunning]=useState(false)
  const [rowsNum, setRows]=useState(25)
  const [colsNum, setCols]=useState(50)
  const [grid, setGrid] = useState(() => {
    return restartGrid(rowsNum, colsNum)
  });
  const [modalPatterns, setModalPatterns]=useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
 
 
  useEffect(()=>{
    const getGrid= localStorage.getItem('grid') ? JSON.parse(localStorage.getItem('grid')): null
    if (getGrid){
      setGrid(getGrid)
      setGeneration(0)
    }
  },[])

  useEffect(()=>{
  let interval=null
   if(running){
    interval=setInterval(()=>{
      setGrid(g => {
        return produce(g, gridCopy => {
          return generateGrid(g, rowsNum, colsNum, gridCopy)
        })
          
      });
      setGeneration((generation)=> generation + 1)       
    }, intervalLoop)
   }
   return ()=>{
     clearInterval(interval)
   }
  },[running])    
  
  const handleRunning=()=>{
    setRunning(!running);   
  }
  
  const handleReset=()=>{
    localStorage.removeItem('grid')
    setGrid(restartGrid(rowsNum, colsNum))
    setGeneration(0)
   
  }
  const handlePatternsModal=()=>{
    setModalPatterns(!modalPatterns)
  }
  return (
    <Box   m='auto' p='20px'>    
      <Flex alignItems='center' display={{base:'block', sm:'block', md:'flex', lg:'flex'}} >
          <Btn title={running ? 'Stop' : 'Start'} handleFunction={handleRunning} />
          <Btn title='Restart' handleFunction={handleReset}/>        
          <TextComp title='Interval' state={intervalLoop}/>
          <TextComp title='Generation' state={generation}/>
        <Spacer/>
          <ModalSetting 
            isOpen={isOpen} 
            onClose={onClose} 
            rows={rowsNum} 
            cols={colsNum}
            intervalLoop={intervalLoop}
            setIntervalLoop={setIntervalLoop} 
            setRows={setRows} 
            setCols={setCols}
            setGrid={setGrid}                        
          />
          <ModalPatterns 
            isOpen={modalPatterns} 
            onClose={handlePatternsModal} 
            setRows={setRows} 
            setCols={setCols}
            setGrid={setGrid}
            rows={rowsNum} 
            cols={colsNum}
           
          />
          <Btn title={'Patterns'} handleFunction={handlePatternsModal}/>
          <Settings onOpen={onOpen}/>
      </Flex>
      <Box m='auto'  w={25 * colsNum}>
        <SimpleGrid columns={colsNum} spacing='5px' minChildWidth='20px' pt='20px' mb='20px'>      
          {grid.map( (rows, i) =>
            rows.map((col, j) => <Cell i={i} j={j} grid={grid} setGrid={setGrid} key={j + i} />)
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default App;
