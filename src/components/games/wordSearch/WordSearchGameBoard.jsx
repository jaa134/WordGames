import React from 'react';
import PropTypes from 'prop-types';
import defineBlock from '../../../utils/defineBlock';
import {
  EMPTY_GAME_CHAR,
  getPuzzleGrid
} from './WordSearchGameEngine';
import './WordSearchGameBoard.scss';

const bem = defineBlock('WordSearchGameBoard');

const CELL_SIZE = 24;
const BORDER_SIZE = 2;
const getPosition = (pos) => (
  BORDER_SIZE + (CELL_SIZE / 2) + (pos * CELL_SIZE)
);

const WordSearchGameBoard = ({
  puzzle,
  path
}) => (
  <div className={bem()}>
    {!!path && (
      <svg className={bem('path')}>
        <line
          x1={getPosition(path[0].col)}
          y1={getPosition(path[0].row)}
          x2={getPosition(path[path.length - 1].col)}
          y2={getPosition(path[path.length - 1].row)}
        />
      </svg>
    )}
    {getPuzzleGrid(puzzle).map((row, i) => (
      <div
        key={`${row.str}-${i}`}
        className={bem('row')}
        style={{ gridTemplateColumns: `repeat(${row.arr.length}, 1fr)` }}
      >
        {row.arr.map((letter, k) => {
          const isEmptyCell = letter === EMPTY_GAME_CHAR;
          return (
            <div
              key={`${letter}-${k}`}
              className={bem('cell', { empty: isEmptyCell })}
            >
              {!isEmptyCell && letter}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

WordSearchGameBoard.propTypes = {
  puzzle: PropTypes.string.isRequired,
  path: (
    PropTypes.arrayOf(
      PropTypes.shape({
        row: PropTypes.number.isRequired,
        col: PropTypes.number.isRequired
      }).isRequired
    )
  )
};

WordSearchGameBoard.defaultProps = {
  path: null
};

export default WordSearchGameBoard;
