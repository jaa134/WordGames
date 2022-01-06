import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import defineBlock from '../../../utils/defineBlock';
import HangmanDrawing from './HangmanDrawing';
import './HangmanResults.scss';

const bem = defineBlock('HangmanResults');

const HangmanResults = ({
  puzzle,
  incorrectLetters,
  listSize,
  runTime,
  numWordsExamined,
  numPossibleWords,
  commonExamples,
  letterAnalysis
}) => (
  <div className={bem()}>
    <Typography variant="h4" gutterBottom component="div">
      Results
    </Typography>
    <div className={bem('layout')}>
      <div className={bem('values')}>

        <HangmanDrawing numIncorrectLetters={incorrectLetters.length} />
        <TextField
          id={bem('puzzle')}
          className={bem('puzzle')}
          label="Puzzle"
          value={puzzle}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
        <TextField
          id={bem('incorrect')}
          className={bem('incorrect')}
          label="Incorrect letters"
          value={incorrectLetters}
          variant="filled"
          fullWidth
          InputProps={{ readOnly: true }}
        />
      </div>

      <div className={bem('solution')}>
        <div className={bem('info')}>
          <Typography variant="h6" gutterBottom component="div">
            Stats
          </Typography>
          <div className={bem('stats')}>
            <TextField
              id={bem('list-size')}
              label="List size"
              value={listSize}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('run-time')}
              label="Run time"
              value={`${runTime}ms`}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-words-examined')}
              label="Total word count"
              value={numWordsExamined}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-words-eliminated')}
              label="Words elminated"
              value={numWordsExamined - numPossibleWords}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
            <TextField
              id={bem('num-possible-words')}
              label="Possible word count"
              value={numPossibleWords}
              variant="filled"
              InputProps={{ readOnly: true }}
            />
          </div>
        </div>
        <div className={bem('info')}>
          <Typography variant="h6" gutterBottom component="div">
            Common words
          </Typography>
          {commonExamples.length === 0
            ? (
              <Alert severity="info">
                <AlertTitle>No results</AlertTitle>
                We could not find any common answers for this puzzle
              </Alert>
            )
            : (
              <div className={bem('common-examples')}>
                {commonExamples.map((word) => (
                  <Chip key={word} label={word} />
                ))}
              </div>
            )}
        </div>
      </div>
    </div>

    <div className={bem('analysis')}>
      <Typography variant="h6" gutterBottom component="div">
        Letter analysis
      </Typography>
      {!letterAnalysis
        ? (
          <Alert severity="info">
            <AlertTitle>No results</AlertTitle>
            There is no recommended letter to choose from. The answer to this puzzle is unknown!
          </Alert>
        )
        : (
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ pl: 4, width: 100 }}>
                    Letter
                  </TableCell>
                  <TableCell align="right" sx={{ width: 100 }}>
                    % Correct choice
                  </TableCell>
                  <TableCell align="right" sx={{ width: 170 }}>
                    # Words found
                  </TableCell>
                  <TableCell sx={{ pl: 10, width: 400 }}>
                    Examples
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {letterAnalysis.map((data) => (
                  <Fragment key={data.letter}>
                    <TableRow>
                      <TableCell sx={{ pl: 4 }}>
                        <Typography variant="h6" component="div">
                          {data.letter}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="h6" component="div">
                          {`${Math.ceil(data.appearenceRatio * 100)}%`}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="h6" component="div">
                          {data.numWordsWithLetter}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ pt: 1, pl: 10 }}>
                        <div className={bem('letter-examples')}>
                          {data.examples.map((word) => (
                            <Chip key={word} label={word} />
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </div>

  </div>
);

HangmanResults.propTypes = {
  puzzle: PropTypes.string.isRequired,
  incorrectLetters: PropTypes.string.isRequired,
  listSize: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
  numWordsExamined: PropTypes.number.isRequired,
  numPossibleWords: PropTypes.number.isRequired,
  commonExamples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  letterAnalysis: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    numWordsWithLetter: PropTypes.number.isRequired,
    appearenceRatio: PropTypes.number.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  }))
};

HangmanResults.defaultProps = {
  letterAnalysis: null
};

export default HangmanResults;
