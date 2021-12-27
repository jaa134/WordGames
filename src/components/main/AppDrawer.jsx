import React, { useState, useEffect, Fragment } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { paths } from '../../constants';
import defineBlock from '../../utils/defineBlock';
import BlackJackIcon from '../icons/BlackJackIcon';
import CheckersIcon from '../icons/CheckersIcon';
import ChessIcon from '../icons/ChessIcon';
import ConnectFourIcon from '../icons/ConnectFourIcon';
import GoIcon from '../icons/GoIcon';
import HangmanIcon from '../icons/HangmanIcon';
import HeartsIcon from '../icons/HeartsIcon';
import MancalaIcon from '../icons/MancalaIcon';
import OthelloIcon from '../icons/OthelloIcon';
import ScrabbleIcon from '../icons/ScrabbleIcon';
import SpellingBeeIcon from '../icons/SpellingBeeIcon';
import TexasHoldemIcon from '../icons/TexasHoldemIcon';
import WordLaddersIcon from '../icons/WordLaddersIcon';
import WordSearchIcon from '../icons/WordSearchIcon';
import WordscapesIcon from '../icons/WordscapesIcon';
import AppNavList from './AppNavList';

export const bem = defineBlock('AppDrawer');

const categories = [
  {
    type: 'word',
    displayText: 'Word games',
    menuItems: [
      {
        name: 'Hangman',
        icon: <HangmanIcon />,
        href: paths.HANGMAN
      },
      {
        name: 'NYT Spelling Bee',
        icon: <SpellingBeeIcon />,
        href: paths.NYT_SPELLING_BEE
      },
      {
        name: 'Scrabble',
        icon: <ScrabbleIcon />,
        href: paths.SCRABBLE
      },
      {
        name: 'Word Ladders',
        icon: <WordLaddersIcon />,
        href: paths.WORD_LADDERS
      },
      {
        name: 'Word Search',
        icon: <WordSearchIcon />,
        href: paths.WORD_SEARCH
      },
      {
        name: 'Wordscapes',
        icon: <WordscapesIcon />,
        href: paths.WORDSCAPES
      }
    ]
  },
  {
    type: 'board',
    displayText: 'Board games',
    menuItems: [
      {
        name: 'Checkers',
        icon: <CheckersIcon />,
        href: paths.CHECKERS
      },
      {
        name: 'Chess',
        icon: <ChessIcon />,
        href: paths.CHESS
      },
      {
        name: 'Connect Four',
        icon: <ConnectFourIcon />,
        href: paths.CONNECT_FOUR
      },
      {
        name: 'Go',
        icon: <GoIcon />,
        href: paths.GO
      },
      {
        name: 'Mancala',
        icon: <MancalaIcon />,
        href: paths.MANCALA
      },
      {
        name: 'Othello',
        icon: <OthelloIcon />,
        href: paths.OTHELLO
      }
    ]
  },
  {
    type: 'card',
    displayText: 'Card games',
    menuItems: [
      {
        name: 'Black Jack',
        icon: <BlackJackIcon />,
        href: paths.BLACK_JACK
      },
      {
        name: 'Hearts',
        icon: <HeartsIcon />,
        href: paths.HEARTS
      },
      {
        name: 'Texas Hold\'em',
        icon: <TexasHoldemIcon />,
        href: paths.TEXAS_HOLDEM
      }
    ]
  }
];

const drawerWidth = 260;

const AppDrawer = () => {
  const [filterText, setFilterText] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  useEffect(() => {
    let result = categories;
    if (filterText) {
      result = [];
      categories.forEach((category) => {
        const filteredClone = { ...category };
        filteredClone.menuItems = category.menuItems
          .filter(({ name }) => name.toLowerCase().includes(filterText));
        if (filteredClone.menuItems.length) {
          result.push(filteredClone);
        }
      });
    }
    const handler = setTimeout(() => setFilteredCategories(result), 250);
    return () => clearTimeout(handler);
  }, [filterText]);
  return (
    <Drawer
      className={bem()}
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
      }}
    >
      <Toolbar />
      <TextField
        id="main-menu-search"
        label="Search"
        type="search"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={(event) => { setFilterText(event.target.value); }}
      />
      <Box sx={{ overflow: 'auto' }}>
        {filteredCategories.length === 0 && (
          <div>No items</div>
        )}
        {filteredCategories.map((category, i) => (
          <Fragment key={category.type}>
            {i !== 0 && <Divider />}
            <AppNavList
              type={category.type}
              subheader={category.displayText}
              entries={category.menuItems}
            />
          </Fragment>
        ))}
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
