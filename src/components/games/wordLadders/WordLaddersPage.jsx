import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
import WordListFileSelect, { listSizes, importWordList } from '../../common/WordListFileSelect';
import WordLaddersHowToPlay from './WordLaddersHowToPlay';
import WordLaddersWordInput from './WordLaddersWordInput';
import WordLaddersExcludedInput from './WordLaddersExcludedInput';
import WordLaddersResults from './WordLaddersResults';
import WordLaddersGameEngine from './WordLaddersGameEngine';
import './WordLaddersPage.scss';

const bem = defineBlock('WordLaddersPage');

const WordLaddersPage = () => {
  const [loading, setLoading] = useState(false);
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [excludedWords, setExcludedWords] = useState('');
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isGameValid = WordLaddersGameEngine.isValidGame(word1, word2);
  const initiateSolve = () => { setLoading(true); };
  useEffect(() => {
    let result = null;
    if (loading) {
      let timeout = null;
      let isSubscribed = true;
      importWordList(listSize).then(({ default: wordList }) => {
        timeout = setTimeout(() => {
          const startTime = window.performance.now();
          const excludedArr = excludedWords.split('\n').filter((word) => !!word);
          const solution = WordLaddersGameEngine.getSolution(wordList, word1, word2, excludedArr);
          const endTime = window.performance.now();
          if (isSubscribed) {
            setResults({
              word1,
              word2,
              excludedWords,
              listSize,
              runTime: Math.round(endTime - startTime),
              ...solution
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
      <PageTitle text="Word Ladders" />
      {loading && <PageLoading />}
      <WordLaddersHowToPlay />
      <div className={bem('game')}>
        <div className={bem('words')}>
          <WordLaddersWordInput
            index={1}
            value={word1}
            setValue={(value) => { setWord1(value); }}
          />
          <div className={bem('arrows')}>
            <ArrowDownwardIcon />
            <ArrowUpwardIcon />
          </div>
          <WordLaddersWordInput
            index={2}
            value={word2}
            setValue={(value) => { setWord2(value); }}
          />
          <WordLaddersExcludedInput
            value={excludedWords}
            setValue={(value) => { setExcludedWords(value); }}
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
      {results && (
        <>
          <Divider />
          <WordLaddersResults {...results} />
        </>
      )}
    </PageBase>
  );
};

export default WordLaddersPage;
