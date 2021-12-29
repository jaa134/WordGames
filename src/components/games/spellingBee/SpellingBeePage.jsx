import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
import WordListFileSelect, { listSizes, importWordList } from '../../common/WordListFileSelect';
import SpellingBeeGameEngine from './SpellingBeeGameEngine';
import SpellingBeeHowToPlay from './SpellingBeeHowToPlay';
import SpellingBeeResults from './SpellingBeeResults';
import {
  DEFAULT_CHAR,
  RequiredLetterInput,
  OptionalLetterInput
} from './SpellingBeeLetterInput';
import './SpellingBeePage.scss';

const bem = defineBlock('SpellingBeePage');

const SpellingBeePage = () => {
  const [loading, setLoading] = useState(false);
  const [requiredLetter, setRequiredLetter] = useState(DEFAULT_CHAR);
  const [optionalLetters, setOptionalLetters] = useState(Array(6).fill(DEFAULT_CHAR));
  const [listSize, setListSize] = useState(listSizes.SMALL);
  const [results, setResults] = useState(null);
  const isGameValid = SpellingBeeGameEngine
    .isGameValid(DEFAULT_CHAR, requiredLetter, optionalLetters);
  const solve = () => {
    setLoading(true);
    const importPromise = importWordList(listSize);
    if (importPromise) {
      importPromise
        .then(({ default: wordList }) => {
          setResults({
            requiredLetter,
            optionalLetters,
            listSize,
            matches: SpellingBeeGameEngine.getMatches(wordList, requiredLetter, optionalLetters)
          });
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  return (
    <PageBase className={bem()}>
      <PageTitle text="NYT Spelling Bee" />
      {loading && <PageLoading />}
      <SpellingBeeHowToPlay />
      <div className={bem('game')}>
        <div className={bem('grid')}>
          <ul className={bem('grid-row')} lang="es">
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={0}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={1}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
          </ul>
          <ul className={bem('grid-row')} lang="es">
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={2}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
            <li className={bem('grid-cell')}>
              <RequiredLetterInput
                requiredLetter={requiredLetter}
                setRequiredLetter={setRequiredLetter}
              />
            </li>
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={3}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
          </ul>
          <ul className={bem('grid-row')} lang="es">
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={4}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
            <li className={bem('grid-cell')}>
              <div className={bem('input-wrapper')}>
                <OptionalLetterInput
                  i={5}
                  optionalLetters={optionalLetters}
                  setOptionalLetters={setOptionalLetters}
                />
              </div>
            </li>
          </ul>
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
              onClick={solve}
            >
              Solve
            </Button>
          </div>
        </div>
      </div>
      {results && (
        <>
          <Divider />
          <SpellingBeeResults {...results} />
        </>
      )}
    </PageBase>
  );
};

export default SpellingBeePage;
