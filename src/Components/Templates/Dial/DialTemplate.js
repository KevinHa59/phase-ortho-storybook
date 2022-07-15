import React from 'react';
import './DialTemplate.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function DialTemplate({ label, value, max, size, labelSize, colorList }) {
  const _label = label || 'Dial';
  const _value = value ? value : 0;
  const _max = max ? max : 100;
  const percentage = (_value / _max) * 100;
  const extraCircular = Math.floor(value / max);
  const lastCircular = Math.floor(value % max);

  const CircleData = [];
  const _colorList = colorList ? colorList : ['#3FDF62', '#1DAEFF', '#ff7c7c', '#acb2eb', '#9c27b0', '#5a3ff3', '#f33ff3', '#ff5722', '#795548', '#607d8b'];
  for (let i = 0; i < extraCircular; i++) {
    if (i < extraCircular - 1) {
      CircleData.push({
        _percentage: 100,
        _color: _colorList[i + 1],
      });
    } else {
      CircleData.push({
        _percentage: lastCircular,
        _color: _colorList[i + 1],
      });
    }
  }

  return (
    <div className="PerformanceDialContainer" style={{ width: size }}>
      <div className="Header" style={{ fontSize: labelSize }}>
        {_label}
      </div>
      <div className="CircularContainer">
        <CircularProgressbar styles={buildStyles({ pathColor: _colorList[0], textColor: '#000' })} className="Dial" value={percentage} text={`${parseFloat(percentage.toFixed(1))}%`} />
        {CircleData.map((data, index) => {
          return (
            <CircularProgressbar
              key={index}
              styles={buildStyles({ pathColor: data._color, textColor: 'transparent', trailColor: 'transparent' })}
              className="DialOver"
              value={data._percentage}
              text={`${data._percentage.toFixed(0)}%`}
            />
          );
        })}
      </div>
    </div>
  );
}
