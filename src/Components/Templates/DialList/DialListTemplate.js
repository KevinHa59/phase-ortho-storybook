import React from 'react';
import './DialListTemplate.css';
import DialTemplate from '../Dial/DialTemplate';
export default function DialListTemplate({ data, labelSize, colorList }) {
  const EmployeePerformanceData = data || [
    {
      label: 'CAD',
      value: 25,
      max: 100,
    },
    {
      label: 'PRINT',
      value: 75,
      max: 100,
    },
    {
      label: 'THERM',
      value: 62.5,
      max: 100,
    },
    {
      label: 'LASER',
      value: 87.5,
      max: 100,
    },
    {
      label: 'MILL',
      value: 50,
      max: 100,
    },
    {
      label: 'TUMBLE',
      value: 37.5,
      max: 100,
    },
    {
      label: 'INSPECT',
      value: 12.5,
      max: 100,
    },
    {
      label: 'PACK & SHIP',
      value: 112.5,
      max: 100,
    },
  ];

  const _labelSize = labelSize || '20px';
  const _colorList = colorList || ['#3FDF62', '#1DAEFF', '#ff7c7c', '#acb2eb', '#9c27b0', '#5a3ff3', '#f33ff3', '#ff5722', '#795548', '#607d8b'];
  return (
    <div className="DialListContainer">
      {EmployeePerformanceData.map((data, index) => {
        return <DialTemplate key={index} label={data.label} value={data.value} max={data.max} labelSize={_labelSize} colorList={_colorList} />;
      })}
    </div>
  );
}
