// Import modules
import React, { useCallback, useEffect, useState } from 'react';
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
      console.log('Submit Handler Valid', { current: currentWord, input: inputValue });
    } else {
      console.log('invalid');
      setIsWordValid(false);
      setTimeout(() => setIsWordValid(true), 3000)
      console.log('Submit Handler Invalid', { current: currentWord, input: inputValue });
    }
  };

  const keyDownHandler = useCallback(event => {
    if (event.key === 'Enter') {
      sumbitHandler();
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    }
  }, [currentWord, inputValue]);

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
