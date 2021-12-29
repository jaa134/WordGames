import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
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
import WordLaddersGameEngine from './WordLaddersGameEngine';
import './WordLaddersPage.scss';

const bem = defineBlock('WordLaddersPage');

const WordLaddersPage = () => {
  const [loading, setLoading] = useState(false);
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [excludedWords, setExcludedWords] = useState('');
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const isGameValid = WordLaddersGameEngine.isValidGame(word1, word2);
  const solve = () => {
    setLoading(true);
    const importPromise = importWordList(listSize);
    if (importPromise) {
      importPromise
        .then(({ default: wordList }) => {
          // TODO set results
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
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
              onClick={solve}
            >
              Solve
            </Button>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default WordLaddersPage;
