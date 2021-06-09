import React, {useState, useEffect} from 'react';
import {SimpleGrid, Box, Flex, Spacer, Button, Text} from '@chakra-ui/react'
import {SettingsIcon} from '@chakra-ui/icons'
import Cell from './Components/Cell';
import Btn from './Components/Btn'
import  TextComp from './Components/TextComp';


function App() {
  const restartGrid= ()=>{
    
    const rows = [];
    for (let i = 0; i < rowsNum; i++) {
      rows.push(Array.from(Array(colsNum), () => 0));
    }  
    return rows;
  }
  const [interval, setInterval]=useState(300)
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
    }
  },[])

  return (
    <Box w='1250px' m='auto' pt='20px'>    
      <Flex alignItems='center' >
          <Btn title={'Start'} running={running} setRunning={setRunning}/>
          <Btn title={'Restart'} restartGrid={restartGrid} setGrid={setGrid}/>        
          <TextComp title='Interval' state={interval}/>
          <TextComp title='Generation' state={generation}/>
        <Spacer/>
          <Button bg='#2CC8F2' color='#FFF' _hover={{bg:'#93D5E7'}}>
            <Flex justifyContent='center' alignItems='center'>
              <SettingsIcon/> 
                <Text mb='2px' ml='3px'>Settings</Text>
            </Flex>
          </Button>
      </Flex>
      <SimpleGrid columns={colsNum} spacing='5px' minChildWidth='20px' pt='20px'>      
        {grid.map( (rows, i) =>
          rows.map((col, j) => <Cell i={i} j={j} grid={grid} setGrid={setGrid} key={j + i} />)
        )}
      </SimpleGrid>
    </Box>
  );
}

export default App;
