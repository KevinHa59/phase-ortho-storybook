import React, { useEffect, useState } from 'react';
import './ChartBarTemplate.css';
export default function ChartBarTemplate({ CADData, CADLocation, label, color, valueColor, chartHeight }) {
  let CADLocationList = CADData.filter((emp) => emp.Location === CADLocation || 'CAD-IMPORT');
  let totalCAD = CADLocationList.reduce((total, curr) => (total = total + curr.Units), 0);
  const [Data, setData] = useState([
    {
      name: 'CAD',
      values: [totalCAD, 50],
    },
    {
      name: 'PRINT',
      values: [55, 30],
    },
    {
      name: 'THERM',
      values: [35, 55],
    },
    {
      name: 'LASER',
      values: [50, 40],
    },
    {
      name: 'MILL',
      values: [55, 40],
    },
    {
      name: 'TUMBLE',
      values: [50, 65],
    },
    {
      name: 'INSPECT',
      values: [35, 30],
    },
    {
      name: 'PACK & SHIP',
      values: [30, 25],
    },
  ]);
  let MaxValue = Data.reduce((max, curr) => {
    max = max < Math.max(curr.values[0], curr.values[1]) ? Math.max(curr.values[0], curr.values[1]) : max;
    return max;
  }, 0);
  if (MaxValue < 50) {
    MaxValue = 50;
  } else if (MaxValue < 100) {
    MaxValue = 100;
  } else {
    let newNum = String(MaxValue).slice(0, MaxValue.toString().length - 2);
    MaxValue = Number(newNum + '00') + 100;
  }
  useEffect(() => {
    CADLocationList = CADData.filter((emp) => emp.Location === CADLocation);
    totalCAD = CADLocationList.reduce((total, curr) => (total = total + curr.Units), 0);

    const newCAD = {
      name: 'CAD',
      values: [totalCAD, 50],
    };
    setData([newCAD, ...Data.slice(1)]);
  }, [CADLocation]);

  const Label = label || ['Label 1', 'Label 2'];
  const Color = color || ['#00818F', '#99F5FF'];
  const ValueColor = valueColor || ['#000', '#000'];
  return (
    <div className="CharBarContainer" style={{ height: chartHeight }}>
      <div className="MainChartContainer">
        <div className="CharBarList">
          <div className="BackgroundMeasure">
            <div className="Line _0">
              <div className="Label">0</div>
            </div>
            <div className="Line _1 SubLine">
              <div className="Label">{(MaxValue * 10) / 100}</div>
            </div>
            <div className="Line _2">
              <div className="Label">{(MaxValue * 20) / 100}</div>
            </div>
            <div className="Line _3 SubLine">
              <div className="Label">{(MaxValue * 30) / 100}</div>
            </div>
            <div className="Line _4">
              <div className="Label">{(MaxValue * 40) / 100}</div>
            </div>
            <div className="Line _5 SubLine">
              <div className="Label">{(MaxValue * 50) / 100}</div>
            </div>
            <div className="Line _6">
              <div className="Label">{(MaxValue * 60) / 100}</div>
            </div>
            <div className="Line _7 SubLine">
              <div className="Label">{(MaxValue * 70) / 100}</div>
            </div>
            <div className="Line _8">
              <div className="Label">{(MaxValue * 80) / 100}</div>
            </div>
            <div className="Line _9 SubLine">
              <div className="Label">{(MaxValue * 90) / 100}</div>
            </div>
            <div className="Line _10">
              <div className="Label">{MaxValue}</div>
            </div>
          </div>
          {Data?.map((item, index) => {
            return (
              <div className="ChartBarItem" key={index}>
                <div className="BarDetail">
                  {item.values?.map((value, index) => {
                    const percent = (value / MaxValue) * 100;
                    return (
                      <div key={index} className="Value" style={{ height: percent + '%', background: Color[index], color: ValueColor[index] }}>
                        <div className="BarValue">{value}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="Label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Note">
        {Label?.map((item, index) => {
          return (
            <div key={index} className="ValueNote">
              <div className={'ColorBox'} style={{ background: Color[index] }} /> {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
