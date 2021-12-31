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
import {
  isValidGame,
  normalizePuzzle,
  normalizeLetters,
  getSolution
} from './HangmanGameEngine';
import './HangmanPage.scss';

const bem = defineBlock('HangmanPage');

const HangmanPage = () => {
  const [loading, setLoading] = useState(false);
  const [puzzle, setPuzzle] = useState('');
  const [incorrectLetters, setIncorrectLetters] = useState('');
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isGameValid = isValidGame(puzzle, incorrectLetters);
  const initiateSolve = () => { setLoading(true); };
  useEffect(() => {
    let result = null;
    if (loading) {
      let timeout = null;
      let isSubscribed = true;
      importWordList(listSize).then(({ default: wordList }) => {
        timeout = setTimeout(() => {
          // TODO: solve
          console.table(getSolution(wordList, puzzle, incorrectLetters));
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
          <HangmanDrawing numIncorrectLetters={incorrectLetters.length} />
          <TextField
            id={bem('puzzle')}
            className={bem('puzzle')}
            label="Puzzle"
            helperText="Enter an underscore for unknown letters"
            value={puzzle}
            variant="filled"
            type="search"
            inputProps={{ spellCheck: 'false' }}
            sx={{ width: 386, input: { backgroundColor: '#ffffff' } }}
            onChange={(event) => { setPuzzle(normalizePuzzle(event.target.value)); }}
          />
          <TextField
            id={bem('incorrect')}
            className={bem('incorrect')}
            label="Incorrect letters"
            value={incorrectLetters}
            variant="filled"
            type="search"
            inputProps={{ spellCheck: 'false' }}
            sx={{ width: 386, input: { backgroundColor: '#ffffff' } }}
            onChange={(event) => { setIncorrectLetters(normalizeLetters(event.target.value)); }}
          />
        </div>
        <div className={bem('spacer')} />
        <div>
          {!isGameValid && (
            <Alert className={bem('invalid')} severity="warning">
              <AlertTitle>Invalid puzzle</AlertTitle>
              Ensure that the game values are valid
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
