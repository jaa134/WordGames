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
import BoggleHowToPlay from './BoggleHowToPlay';
import BogglePuzzleInput from './BogglePuzzleInput';
import BoggleResults from './BoggleResults';
import {
  EMPTY_GAME_CHAR,
  getPuzzleGrid,
  isValidGame,
  getSolution
} from './BoggleGameEngine';
import './BogglePage.scss';

const bem = defineBlock('BogglePage');

const BogglePage = () => {
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
          const solution = getSolution(wordList, puzzle);
          console.log(solution);
          if (isSubscribed) {
            /*
            setResults({
              puzzle,
              listSize,
              ...solution
            });
            */
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
      <PageTitle text="Boggle" />
      {loading && <PageLoading />}
      <BoggleHowToPlay />
      <div className={bem('game')}>
        <div>
          {puzzle.length > 0 && (
            <div className={bem('grid')}>
              {getPuzzleGrid(puzzle).map((row, i) => (
                <div
                  key={`${row.str}-${i}`}
                  className={bem('grid-row')}
                  style={{ gridTemplateColumns: `repeat(${row.arr.length}, 1fr)` }}
                >
                  {row.arr.map((letter, k) => {
                    const isEmptyCell = letter === EMPTY_GAME_CHAR;
                    return (
                      <div
                        key={`${letter}-${k}`}
                        className={bem('grid-cell', { empty: isEmptyCell })}
                      >
                        {!isEmptyCell && letter}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
          <BogglePuzzleInput
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
          <BoggleResults {...results} />
        </>
      )}
    </PageBase>
  );
};

export default BogglePage;
