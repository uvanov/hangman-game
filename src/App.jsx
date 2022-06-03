// Import modules
import React from 'react';
import styled from '@emotion/styled';

// UI
import {
  Flex,
  Center,
  Input,
  Button,
  Stack
} from '@chakra-ui/react';

// Exports
export const App = () => {
  return (
    <Center h='100%'>
      <Flex
        justifyContent='center'
        alignItems='center'
        w='60%'
        h='80%'
        bg='#7FC14D'
        boxShadow='2xl'
        borderRadius='20px'
        pb={10}
      >
        <Stack
          alignSelf='flex-end'
          direction='row'
          spacing='10px'
          w='50%'
        >
          <Input
            placeholder='Word'
            size='lg'
            bg='white'
            boxShadow='lg'
          />
          <Button
            colorScheme='teal'
            size='lg'
          >
            Submit
          </Button>
        </Stack>
      </Flex>
    </Center>
  );
}
