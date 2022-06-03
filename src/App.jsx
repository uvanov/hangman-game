// Import modules
import React from 'react';
import styled from '@emotion/styled';

// Local modules
import { Controls } from './components/Controls';
import { Word } from './components/Word';

// UI
import {
  Flex,
  Center,
} from '@chakra-ui/react';

// Exports
export const App = () => {
  return (
    <Center h='100%'>
      <Flex
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        w='60%'
        h='80%'
        bg='#7FC14D'
        boxShadow='2xl'
        borderRadius='20px'
        pb={10}
      >
        <div />
        <Word />
        <Controls />
      </Flex>
    </Center>
  );
}
