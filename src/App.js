import React, {useState, useEffect} from 'react';
import produce from "immer";
import {SimpleGrid, Box, Flex, Spacer,  useDisclosure} from '@chakra-ui/react'
import Settings from './Components/Settings/Settings';
import Cell from './Components/Cell';
import Btn from './Components/Btn'
import TextComp from './Components/TextComp';
import ModalSetting from './Components/Settings/ModalSetting';
import ModalPatterns from './Components/Patterns/ModalPatterns'
import {generateGrid, restartGrid,} from './Utils/'


function App() {  
  //estado decantidad de intervalos en cada iteracion
  const [intervalLoop, setIntervalLoop]=useState(1000)
  //estado que cuenta la cantidad de iteraciones realizadas
  const [generation, setGeneration]=useState(0)
  //estado para iniciar o detener el juego
  const [running, setRunning]=useState(false)
  //estados de las filas y columnas
  const [rowsNum, setRows]=useState(25)
  const [colsNum, setCols]=useState(50)
  //estado de la grilla
  const [grid, setGrid] = useState(() => {
    return restartGrid(rowsNum, colsNum)
  });
  //estado para abrir o cerrar el modal de chakra, esta funcion viene con chakra
  const { isOpen, onOpen, onClose } = useDisclosure()
  //estado para abrir modal de chakra, hice uno aparte para tener los dos modales
  //en este archivo y evitar mas prop drilling
  const [modalPatterns, setModalPatterns]=useState(false)
 
 //efecto que chequea si hay una grid guardada en local storage y de ser así genera una con esos datos almacenados
  useEffect(()=>{
    const getGrid= localStorage.getItem('grid') ? JSON.parse(localStorage.getItem('grid')): null
    if (getGrid){
      setGrid(getGrid)
      setGeneration(0)
    }
  },[])
  //funcion que maneja un solo paso del algoritmo del juego
  const handleStep=()=>{
    setGrid(g => {
       //la funcion produce de immer recibe el estado de la grilla sin mutarlo y 
        //genera un nuevo estado  con los nuevos valores
        //https://immerjs.github.io/immer/produce      
      return produce(g, gridCopy => {
        return generateGrid(g, rowsNum, colsNum, gridCopy)
      })
        
    });
    setGeneration((generation)=> generation + 1)   
  }

//efecto que chequea el estado de running para disparar una funcion de intervalos 
//que dispara el agoritmo del juego
  useEffect(()=>{
  let interval=null
   if(running){
    interval=setInterval(()=>{
     handleStep()     
    }, intervalLoop)
   }
   return ()=>{
     clearInterval(interval)
   }
  },[running])    
  
  // distintos handelers para estados
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
          <Btn title='x1' handleFunction={handleStep} />  
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
      {/* div que contiene la grid, su width es dinamico dependiendo el numero de columnas */}
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
