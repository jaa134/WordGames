import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
import WordListFileSelect, { listSizes, importWordList } from '../../common/WordListFileSelect';
import HangmanHowToPlay from './HangmanHowToPlay';
import HangmanDrawing from './HangmanDrawing';
import './HangmanPage.scss';

const bem = defineBlock('HangmanPage');

const nonPuzzleChars = /[^a-z_]/g;
const nonLetterChars = /[^a-z]/g;
const normalizeValue = (event, charsToRemove) => event.target.value.toLowerCase().replace(charsToRemove, '');

const HangmanPage = () => {
  const [loading, setLoading] = useState(false);
  const [puzzle, setPuzzle] = useState('');
  const [guessedLetters, setGuessedLetters] = useState('');
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isGameValid = puzzle.includes('_');
  const numIncorrectGuesses = guessedLetters.length;
  const initiateSolve = () => { setLoading(true); };
  useEffect(() => {
    let result = null;
    if (loading) {
      let timeout = null;
      let isSubscribed = true;
      importWordList(listSize).then(({ default: wordList }) => {
        timeout = setTimeout(() => {
          // TODO: solve
          if (isSubscribed) {
            // TODO: set results
            setLoading(false);
          }
        }, 250);
      });
      result = () => {
        clearTimeout(timeout);
        isSubscribed = false;
      };
    }
    return result;
  }, [loading]);
  return (
    <PageBase className={bem()}>
      <PageTitle text="Hangman" />
      {loading && <PageLoading />}
      <HangmanHowToPlay />
      <div className={bem('game')}>
        <div className={bem('board')}>
          <HangmanDrawing numIncorrectGuesses={numIncorrectGuesses} />
          <TextField
            id={bem('puzzle')}
            className={bem('puzzle')}
            label="Puzzle"
            helperText="Enter an underscore for unknown letters"
            value={puzzle}
            type="search"
            variant="filled"
            sx={{ width: 382, input: { backgroundColor: '#ffffff' } }}
            onChange={(event) => { setPuzzle(normalizeValue(event, nonPuzzleChars)); }}
          />
          <TextField
            id={bem('guessed')}
            className={bem('guessed')}
            label="Guessed letters"
            value={guessedLetters}
            type="search"
            variant="filled"
            sx={{ width: 382, input: { backgroundColor: '#ffffff' } }}
            onChange={(event) => { setGuessedLetters(normalizeValue(event, nonLetterChars)); }}
          />
        </div>
        <div className={bem('spacer')} />
        <div>
          {!isGameValid && (
            <Alert className={bem('invalid')} severity="warning">
              <AlertTitle>Invalid word values</AlertTitle>
              Ensure both word values abide by game rules
            </Alert>
          )}
          <div className={bem('inputs')}>
            <WordListFileSelect
              value={listSize}
              onChange={(event) => { setListSize(event.target.value); }}
            />
            <Button
              className={bem('solve')}
              disabled={!isGameValid}
              variant="contained"
              size="large"
              onClick={initiateSolve}
            >
              Solve
            </Button>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default HangmanPage;
