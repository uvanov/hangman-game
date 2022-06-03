// Import modules
import React, { useState } from 'react';

// UI
import {
  Input,
  Button,
  Stack
} from '@chakra-ui/react';

// Exports
export const Controls = () => {

  const [inputValue, setInputValue] = useState('');

  const changeHandler = event => setInputValue(event.target.value);

  return (
    <Stack
      justifySelf='flex-end'
      direction='row'
      spacing='10px'
      w='50%'
    >
      <Input
        value={inputValue}
        onChange={changeHandler}
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
    </Stack >
  );
}
