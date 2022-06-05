// Import modules
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// Local modules
import { Controls } from './components/Controls';
import { Word } from './components/Word';

// UI
import {
  Flex,
  Center,
} from '@chakra-ui/react';

// Constants
const COLORS = {
  CONTAINER: {
    DEFAULT: '#7FC14D',
    ERROR: '#CD4343'
  }
}

// Exports
export const App = () => {

  const [containerBackgroundColor, setContainerBackgroundColor] = useState(COLORS.CONTAINER.DEFAULT);
  const guessErrorHandler = () => {
    setContainerBackgroundColor(COLORS.CONTAINER.ERROR);
    setTimeout(() => {
      setContainerBackgroundColor(COLORS.CONTAINER.DEFAULT)
    }, 800)
  }

  useEffect(() => {
    window.addEventListener('guess-error', guessErrorHandler);
  }, [])

  return (
    <Center h='100%'>
      <Flex
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        w='60%'
        h='80%'
        bg={containerBackgroundColor}
        boxShadow='2xl'
        borderRadius='20px'
        pb={10}
        transition='background-color .3s'
      >
        <div />
        <Word />
        <Controls />
      </Flex>
    </Center>
  );
}
