import React from 'react';
import './PlaqueTemplate.css';

export default function PlaqueTemplate({ level, style, label, labelSize, height }) {
  return (
    <div className="Plaque" style={{ height: height }}>
      <div className={'Box ' + style} />
      <div className="Plaque_Text" style={{ fontSize: labelSize ? labelSize : '30px' }}>
        {label}
      </div>
      {level === 1 ? (
        <div className={'Level1 ' + style}>
          <Level1BG />
        </div>
      ) : level === 2 ? (
        <>
          <div className={'Level1 ' + style}>
            <Level1BG />
          </div>
          <div className={'Level2 ' + style}>
            <Level2BG />
          </div>
        </>
      ) : level === 3 ? (
        <div className={'Level3 ' + style} />
      ) : null}
    </div>
  );
}

function Level1BG() {
  return (
    <svg width="100%" height="41" viewBox="0 0 198 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M99 0L197.91 15.5817L160.13 40.7934L37.8703 40.7934L0.090126 15.5817L99 0Z" className="SVG" />
    </svg>
  );
}

function Level2BG() {
  return (
    <svg width="90%" height="41" viewBox="0 0 179 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M89.5 41L0.576219 25.4529L34.5421 0.297118L144.458 0.297127L178.424 25.4529L89.5 41Z" className="SVG" />
    </svg>
  );
}
