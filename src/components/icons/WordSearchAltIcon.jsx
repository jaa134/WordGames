import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const puzzleBoxStyle = {
  fill: '#ffffff',
  fillOpacity: '0.2',
  stroke: '#000000',
  strokeWidth: '3px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '4px',
  strokeDasharray: 'none',
  strokeDashoffset: '0px',
  strokeOpacity: '1'
};

const puzzleBackgroundStyle = {
  fill: '#000080',
  fillOpacity: '1'
};

const puzzleTextStyle = {
  fontSize: '31.68px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textAlign: 'start',
  textAnchor: 'start',
  fill: '#000000',
  fillOpacity: '1',
  stroke: 'none',
  strokeWidth: '1px',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeOpacity: '1',
  fontFamily: 'monospace'
};

const answerBoxStyle = {
  fill: '#87cdde',
  fillOpacity: '0.2',
  stroke: '#000000',
  strokeWidth: '3px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '4px',
  strokeDasharray: 'none',
  strokeDashoffset: '0px',
  strokeOpacity: '1'
};

const answerTextStyle = {
  fontSize: '31.68px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  textAlign: 'start',
  textAnchor: 'start',
  fill: '#000080',
  fillOpacity: '1',
  stroke: 'none',
  strokeWidth: '1px',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
  strokeOpacity: '1'
};

const answerStyle = {
  fill: 'none',
  fillOpacity: '1',
  stroke: '#ff0000',
  strokeWidth: '3px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '4px',
  strokeDasharray: 'none',
  strokeDashoffset: '0px',
  strokeOpacity: '1'
};

const WordSearchAltIcon = (props) => (
  <SvgIcon {...props} viewBox="70 28 200 200">
    <g transform="translate(-63.999992,-371.86218)">
      <rect
        width="219"
        height="425"
        x="468.5"
        y="379.36218"
        style={answerBoxStyle}
      />
      <rect
        width="397"
        height="425"
        x="71.499992"
        y="379.36218"
        style={puzzleBoxStyle}
      />
      <g transform="translate(2.2060641,0.5622673)">
        <text
          x="86.713188"
          y="418.20963"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="418.20963"
          >
            W V E R T I C A L L
          </tspan>
        </text>
        <text
          x="86.713188"
          y="459.23718"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="459.23718"
          >
            R O O A F F L S A B
          </tspan>
        </text>
        <text
          x="86.713188"
          y="500.26471"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="500.26471"
          >
            A C R I L I A T O A
          </tspan>
        </text>
        <text
          x="86.713188"
          y="541.29224"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="541.29224"
          >
            N D O D K O N W D C
          </tspan>
        </text>
        <text
          x="86.713188"
          y="582.31982"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="582.31982"
          >
            D R K E S O O D D K
          </tspan>
        </text>
        <text
          x="86.713188"
          y="623.34735"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="623.34735"
          >
            O E E P Z E G L I W
          </tspan>
        </text>
        <text
          x="86.713188"
          y="664.37488"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="664.37488"
          >
            M S I I H O A E R A
          </tspan>
        </text>
        <text
          x="86.713188"
          y="705.4024"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="705.4024"
          >
            A L R K R R I R E R
          </tspan>
        </text>
        <text
          x="86.713188"
          y="746.42999"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="746.42999"
          >
            K O D I D E D R C D
          </tspan>
        </text>
        <text
          x="86.713188"
          y="787.45752"
          style={puzzleTextStyle}
        >
          <tspan
            x="86.713188"
            y="787.45752"
          >
            H E L W S L E U T H
          </tspan>
        </text>
      </g>
      <g
        transform="translate(390.72508,0.5622673)"
        style={puzzleBackgroundStyle}
      >
        <text
          x="86.713188"
          y="418.20963"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="418.20963"
          >
            Seek
          </tspan>
        </text>
        <text
          x="86.713188"
          y="459.23718"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="459.23718"
          >
            Find
          </tspan>
        </text>
        <text
          x="86.713188"
          y="500.26471"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="500.26471"
          >
            Random
          </tspan>
        </text>
        <text
          x="86.713188"
          y="541.29224"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="541.29224"
          >
            Sleuth
          </tspan>
        </text>
        <text
          x="86.713188"
          y="582.31982"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="582.31982"
          >
            Backward
          </tspan>
        </text>
        <text
          x="86.713188"
          y="623.34735"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="623.34735"
          >
            Vertical
          </tspan>
        </text>
        <text
          x="86.713188"
          y="664.37488"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="664.37488"
          >
            Diagonal
          </tspan>
        </text>
        <text
          x="86.713188"
          y="705.4024"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="705.4024"
          >
            Wikipedia
          </tspan>
        </text>
        <text
          x="86.713188"
          y="746.42999"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="746.42999"
          >
            Horizontal
          </tspan>
        </text>
        <text
          x="86.713188"
          y="787.45752"
          style={answerTextStyle}
        >
          <tspan
            x="86.713188"
            y="787.45752"
          >
            Word Search
          </tspan>
        </text>
      </g>
      <rect
        width="34.056107"
        height="550.67548"
        ry="17.028053"
        x="-224.03519"
        y="341.3866"
        transform="matrix(0.7304425,-0.6829742,0.6829742,0.7304425,0,0)"
        style={answerStyle}
      />
    </g>
  </SvgIcon>
);

export default WordSearchAltIcon;
