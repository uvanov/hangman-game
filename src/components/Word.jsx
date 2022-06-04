// Import modules
import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';

// Local modules
import { wordSlice } from '../store/slices/wordSlice';
import { addSpoilersToWord } from '../utils/utils';

// UI
import { Text } from '@chakra-ui/react';

// Exports
export const Word = () => {

  const dispatch = useDispatch();
  const currentWord = useSelector(state => state.word.currentWord)
  const spoilererdWord = addSpoilersToWord(currentWord);

  const { changeCurrentWord } = wordSlice.actions;

  useEffect(() => {
    dispatch(changeCurrentWord())
  }, [])

  return (
    <Text
      fontSize='6xl'
      fontWeight='bold'
    >
      {/* {currentWord} */}
      {spoilererdWord}
    </Text>
  );
}
