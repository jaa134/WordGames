import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
import WordListFileSelect, { listSizes, importWordList } from '../../common/WordListFileSelect';
import WordSearchHowToPlay from './WordSearchHowToPlay';
import WordSearchGameBoard from './WordSearchGameBoard';
import WordSearchPuzzleInput from './WordSearchPuzzleInput';
import WordSearchResults from './WordSearchResults';
import { isValidGame, getSolution } from './WordSearchGameEngine';
import './WordSearchPage.scss';

const bem = defineBlock('WordSearchPage');

const WordSearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [puzzle, setPuzzle] = useState('');
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isGameValid = isValidGame(puzzle);
  const initiateSolve = () => { setLoading(true); };
  useEffect(() => {
    let result = null;
    if (loading) {
      let timeout = null;
      let isSubscribed = true;
      importWordList(listSize).then(({ default: wordList }) => {
        timeout = setTimeout(() => {
          const startTime = window.performance.now();
          const solution = getSolution(wordList, puzzle);
          const endTime = window.performance.now();
          if (isSubscribed) {
            setResults({
              puzzle,
              listSize,
              runTime: Math.round(endTime - startTime),
              numWordsExamined: wordList.length,
              foundWords: solution
            });
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
      <PageTitle text="Word Search" />
      {loading && <PageLoading />}
      <WordSearchHowToPlay />
      <div className={bem('game')}>
        <div className={bem('puzzle-def')}>
          {puzzle.length > 0 && (
            <div className={bem('board')}>
              <WordSearchGameBoard puzzle={puzzle} />
            </div>
          )}
          <WordSearchPuzzleInput
            value={puzzle}
            setValue={(value) => { setPuzzle(value); }}
          />
        </div>
        <div className={bem('spacer')} />
        <div>
          {!isGameValid && (
            <Alert className={bem('invalid')} severity="warning">
              <AlertTitle>Invalid puzzle grid</AlertTitle>
              Ensure the puzzle grid abides by game rules
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
      {results && (
        <>
          <Divider />
          <WordSearchResults {...results} />
        </>
      )}
    </PageBase>
  );
};

export default WordSearchPage;
