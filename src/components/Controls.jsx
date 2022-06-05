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

// Constants
const GUESS_ERROR_EVENT = new CustomEvent('guess-error');

// Exports
export const Controls = () => {

  const dispatch = useDispatch();
  const { changeCurrentWord } = wordSlice.actions;

  const currentWord = useSelector(state => state.word.currentWord);
  const [inputValue, setInputValue] = useState('');

  const changeHandler = event => setInputValue(event.target.value);

  const submitHandler = () => {
    // console.log('Submit Handler');
    if (currentWord.toLowerCase() === inputValue.trim().toLowerCase()) {
      dispatch(changeCurrentWord());
      setInputValue('')
      console.log('Submit Handler Valid', { current: currentWord, input: inputValue });
    } else {
      window.dispatchEvent(GUESS_ERROR_EVENT);
      console.log('Submit Handler Invalid', { current: currentWord, input: inputValue });
    }
  };

  const keyDownHandler = useCallback(event => {
    if (event.key === 'Enter') {
      submitHandler();
    }
  }, [currentWord, inputValue]);

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    }
  }, [keyDownHandler]);

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
        onClick={submitHandler}
      >
        Submit
      </Button>
    </Stack >
  );
}
