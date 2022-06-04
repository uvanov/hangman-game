// Import modules
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Local modules
import { wordSlice } from '../store/slices/wordSlice';

// UI
import {
  Input,
  Button,
  Stack
} from '@chakra-ui/react';

// Exports
export const Controls = () => {

  const dispatch = useDispatch();
  const { changeCurrentWord } = wordSlice.actions;

  const currentWord = useSelector(state => state.word.currentWord);
  const [inputValue, setInputValue] = useState('');
  const [isWordValid, setIsWordValid] = useState(true);

  const changeHandler = event => setInputValue(event.target.value);

  const sumbitHandler = () => {
    if (currentWord.toLowerCase() === inputValue.trim().toLowerCase()) {
      setIsWordValid(true);
      dispatch(changeCurrentWord());
    } else {
      setIsWordValid(false);
      setTimeout(() => setIsWordValid(true), 3000)
    }
  };

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
        isInvalid={!isWordValid}
        placeholder='Word'
        size='lg'
        bg='white'
        boxShadow='lg'
      />
      <Button
        colorScheme='teal'
        size='lg'
        onClick={sumbitHandler}
      >
        Submit
      </Button>
    </Stack >
  );
}
