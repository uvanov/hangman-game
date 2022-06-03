// Import modules
import React from 'react';

// UI
import {
  Text
} from '@chakra-ui/react';

// Exports
export const Word = () => {

  const words = ['Food', 'Water', 'Keyboard'];

  return (
    <Text
      fontSize='6xl'
      fontWeight='bold'
    >
      {words[0]}
    </Text>
  );
}
