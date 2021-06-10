import React, {useState, useEffect} from 'react';
import produce from "immer";
import {SimpleGrid, Box, Flex, Spacer, Button, Text} from '@chakra-ui/react'
import {SettingsIcon} from '@chakra-ui/icons'
import Cell from './Components/Cell';
import Btn from './Components/Btn'
import  TextComp from './Components/TextComp';
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

function App() {
  const restartGrid= ()=>{    
   return Array.from({length: rowsNum}).map(() => Array.from({length: colsNum}).fill(0))
  }
  const [intervalLoop, setIntervalLoop]=useState(1000)
  const [generation, setGeneration]=useState(0)
  const [running, setRunning]=useState(false)
  const [rowsNum, setRows]=useState(25)
  const [colsNum, setCols]=useState(50)
  const [grid, setGrid] = useState(() => {
    return restartGrid()
  });

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
          for (let i = 0; i <rowsNum; i++) {
            for (let k = 0; k < colsNum; k++) {
              let neighbors = 0;
              operations.forEach(([x, y]) => {
                const newI = i + x;
                const newK = k + y;
                if (newI >= 0 && newI < rowsNum && newK >= 0 && newK < colsNum) {
                  neighbors += g[newI][newK];
                }
              });
  
              if (neighbors < 2 || neighbors > 3) {
                gridCopy[i][k] = 0;
              } else if (g[i][k] === 0 && neighbors === 3) {
                gridCopy[i][k] = 1;
              }
            }
          }
        });
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
    setGrid(restartGrid())
    setGeneration(0)
    localStorage.removeItem('grid')
  }
  
  

  return (
    <Box w='1250px' m='auto' pt='20px'>    
      <Flex alignItems='center' >
          <Btn title='Start' running={running} handleFunction={handleRunning} />
          <Btn title='Restart' handleFunction={handleReset}/>        
          <TextComp title='Interval' state={intervalLoop}/>
          <TextComp title='Generation' state={generation}/>
        <Spacer/>
          <Button bg='#2CC8F2' color='#FFF' _hover={{bg:'#93D5E7'}}>
            <Flex justifyContent='center' alignItems='center'>
              <SettingsIcon/> 
                <Text mb='2px' ml='3px'>Settings</Text>
            </Flex>
          </Button>
      </Flex>
      <SimpleGrid columns={colsNum} spacing='5px' minChildWidth='20px' pt='20px' mb='20px'>      
        {grid.map( (rows, i) =>
          rows.map((col, j) => <Cell i={i} j={j} grid={grid} setGrid={setGrid} key={j + i} />)
        )}
      </SimpleGrid>
    </Box>
  );
}

export default App;
