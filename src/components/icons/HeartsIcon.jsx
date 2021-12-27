import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const cardStyle = {
  fill: '#ffffff',
  fillOpacity: '1',
  fillRule: 'evenodd',
  stroke: '#000000',
  strokeWidth: '6px',
  strokeOpacity: '1',
  storkeLinecap: 'butt',
  storkeLinejoin: 'miter',
  storkeMiterLimit: '4px',
  strokeDasharray: 'none'
};

const letterWrapperStyle = {
  fontSize: '32px',
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  fontStretch: 'normal',
  textAlign: 'center',
  lineHeight: '125%',
  textAnchor: 'middle',
  fill: '#cd3b3e',
  fillOpacity: '1',
  stroke: '#cd3b3e',
  strokeWidth: '1px',
  strokeOpacity: '1',
  storkeLinecap: 'butt',
  storkeLinejoin: 'miter'
};

const letterStyle = {
  fontSize: '60px',
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  fontStretch: 'normal',
  textAlign: 'center',
  lineHeight: '125%',
  textAnchor: 'middle',
  fill: '#cd3b3e',
  fillOpacity: '1',
  stroke: '#cd3b3e',
  strokeOpacity: '1'
};

const heartStyle = {
  fill: '#cd3b3e',
  fillOpacity: '1',
  fillRule: 'evenodd',
  stroke: '#cd3b3e',
  strokeWidth: '1px',
  strokeOpacity: '1',
  storkeLinecap: 'butt',
  storkeLinejoin: 'miter'
};

const HeartsIcon = (props) => (
  <SvgIcon {...props} viewBox="-26 -4 256 256">
    <g>
      <path
        style={cardStyle}
        d="M 199,10 C 199,5 195,1 190,1 L 10,1 C 5,1 1,5 1,10 L 1,240 C 1,245 5,249 10,249 L 190,249 C 195,249 199,245 199,240 L 199,10 z "
      />
      <text
        xmlSpace="preserve"
        style={letterWrapperStyle}
      >
        <tspan
          x="30"
          y="55"
          style={letterStyle}
        >
          A
        </tspan>
      </text>
      <path
        style={heartStyle}
        transform="translate(-187, -233) scale(2)"
        d="M 177.3155,205.4 C 177.3155,206.6 175.3155,209 173.3155,209 C 171.3155,209 169.3155,207.4 169.3155,204.6 C 169.3155,200.2 175.7155,193 177.3155,191 C 178.9155,193 185.3155,200.2 185.3155,204.6 C 185.3155,207.4 183.3155,209 181.3155,209 C 179.30552,209 177.3155,206.6 177.3155,205.4 z "
      />
      <path
        style={heartStyle}
        transform="translate(-13, -20) scale(2)"
        d="M 21.3155,47.1 C 21.3155,45.9 19.3155,43.5 17.3155,43.5 C 15.3155,43.5 13.3155,45.1 13.3155,47.9 C 13.3155,52.3 19.7155,59.5 21.3155,61.5 C 22.9155,59.5 29.3155,52.3 29.3155,47.9 C 29.3155,45.1 27.3155,43.5 25.3155,43.5 C 23.30552,43.5 21.3155,45.9 21.3155,47.1 z "
      />
      <text
        xmlSpace="preserve"
        style={letterWrapperStyle}
        transform="scale(-1,-1)"
      >
        <tspan
          x="-167"
          y="-197"
          style={letterStyle}
        >
          A
        </tspan>
      </text>
      <path
        style={heartStyle}
        transform="translate(10, 20) scale(0.9)"
        d="M 99.5,99.75 C 99.5,93.75 89.5,81.75 79.5,81.75 C 69.5,81.75 59.5,89.75 59.5,103.75 C 59.5,125.75 91.5,161.75 99.5,171.75 C 107.5,161.75 139.5,125.75 139.5,103.75 C 139.5,89.75 129.5,81.75 119.5,81.75 C 109.45012,81.75 99.5,93.75 99.5,99.75 z "
      />
    </g>
  </SvgIcon>
);

export default HeartsIcon;
