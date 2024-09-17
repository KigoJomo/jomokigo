import React from 'react';

const CurvedText = ({
  text,
  width = 300,
  height = 300,
  fontSize = 16,
  fontFamily = 'Cinzel Decorative, serif',
  textColor = 'white',
  lineColor = 'white',
  letterSpacing = 0,
  className = ''
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <defs>
        <path id="curve" d={`M${width/2},${height-20} a${width/2-20},${height/2-20} 0 1,1 0.1,0`} fill="none" />
      </defs>
      
      <text 
        fill={textColor} 
        // fontFamily={fontFamily} 
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        textAnchor="middle"
        className={`uppercase ${className}`}
      >
        <textPath href="#curve" startOffset="50%">
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;