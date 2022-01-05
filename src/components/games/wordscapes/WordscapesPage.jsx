import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
import WordListFileSelect, { listSizes, importWordList } from '../../common/WordListFileSelect';
import WordscapesGameEngine from './WordscapesGameEngine';
import WordscapesHowToPlay from './WordscapesHowToPlay';
import WordscapesResults from './WordscapesResults';
import './WordscapesPage.scss';

const bem = defineBlock('WordscapesPage');

const getInputPositions = (numLetters) => {
  const circleRadius = 120;
  const circleOffset = 119;
  const increase = (2 * Math.PI) / numLetters;
  let angle = Math.PI / -2;
  return [...Array(numLetters)].map(() => {
    const pos = {};
    pos.left = `${circleRadius * Math.cos(angle) + circleOffset}px`;
    pos.top = `${circleRadius * Math.sin(angle) + circleOffset}px`;
    angle += increase;
    return pos;
  });
};

const WordscapesPage = () => {
  const [loading, setLoading] = useState(false);
  const [puzzle, setPuzzle] = useState('');
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isGameValid = WordscapesGameEngine.isGameValid(puzzle);
  const displayPuzzle = WordscapesGameEngine.getDisplayPuzzle(puzzle);
  const inputPositions = getInputPositions(displayPuzzle.length);
  const initiateSolve = () => { setLoading(true); };
  useEffect(() => {
    let result = null;
    if (loading) {
      let timeout = null;
      let isSubscribed = true;
      importWordList(listSize).then(({ default: wordList }) => {
        timeout = setTimeout(() => {
          const matches = WordscapesGameEngine.getMatches(wordList, puzzle);
          if (isSubscribed) {
            setResults({
              puzzle,
              listSize,
              numWordsExamined: wordList.length,
              matches
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
      <PageTitle text="Wordscapes" />
      {loading && <PageLoading />}
      <WordscapesHowToPlay />
      <div className={bem('game')}>
        <div>
          <div className={bem('grid')}>
            {displayPuzzle.split('').map((letter, i) => (
              <div
                key={`${letter}-${i}`}
                className={bem('input-wrapper')}
                style={inputPositions[i]}
              >
                {letter}
              </div>
            ))}
          </div>
          <TextField
            id={bem('puzzle')}
            className={bem('puzzle')}
            label="Puzzle"
            value={puzzle}
            variant="filled"
            type="search"
            inputProps={{ spellCheck: 'false' }}
            sx={{ width: 382, input: { backgroundColor: '#ffffff' } }}
            onChange={(event) => {
              setPuzzle(WordscapesGameEngine.normalizePuzzle(event.target.value));
            }}
          />
        </div>
        <div className={bem('spacer')} />
        <div>
          {!isGameValid && (
            <Alert className={bem('invalid')} severity="warning">
              <AlertTitle>Invalid game board</AlertTitle>
              Make sure all inputs have values
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
          <WordscapesResults {...results} />
        </>
      )}
    </PageBase>
  );
};

export default WordscapesPage;
