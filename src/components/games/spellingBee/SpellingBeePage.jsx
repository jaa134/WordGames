import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import defineBlock from '../../../utils/defineBlock';
import PageBase from '../../common/PageBase';
import PageLoading from '../../common/PageLoading';
import PageTitle from '../../common/PageTitle';
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
  const [results, setResults] = useState(null);
  const isBoardValid = optionalLetters.every((letter) => !!letter && letter !== DEFAULT_CHAR);
  const solve = () => {
    setLoading(true);
    import(/* webpackChunkName: 'wordList' */ '../../../assets/json/wordList.json')
      .then(({ default: wordList }) => {
        setResults({
          requiredLetter,
          optionalLetters,
          matches: SpellingBeeGameEngine.getMatches(wordList, requiredLetter, optionalLetters)
        });
        setLoading(false);
      });
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
        <Button
          className={bem('solve')}
          disabled={!isBoardValid}
          variant="contained"
          size="large"
          onClick={solve}
        >
          Solve
        </Button>
        {!isBoardValid && (
          <Alert className={bem('invalid')} severity="warning">
            <AlertTitle>Invalid game board</AlertTitle>
            Make sure all inputs have values
          </Alert>
        )}
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
