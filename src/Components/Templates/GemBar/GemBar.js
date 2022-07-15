import React, { useState } from 'react';
import './GemBar.css';
import { FaGem } from 'react-icons/fa';
import { useEffect } from 'react';
export default function GemBar({ value, max }) {
  const _value = value <= max ? value : max;
  // const percentage = (_value / max) * 100;
  const Data = {
    currentLevel: 1,
    currentValue: 0,
    levelValue: [
      {
        level: 1,
        maxValue: 100,
      },
      {
        level: 2,
        maxValue: 200,
      },
      {
        level: 3,
        maxValue: 300,
      },
      {
        level: 4,
        maxValue: 400,
      },
    ],
  };

  const [UserData, setUserData] = useState(Data);
  const [adjustData, setAdjustData] = useState(0);

  // useEffect(() => {
  //   const newCurrentValue = Data.currentValue + adjustData;
  //   if (newCurrentValue > Data.levelValue[Data.currentLevel - 1].maxValue) {
  //     setUserData({
  //       ...UserData,
  //       currentLevel: UserData.currentLevel < UserData.levelValue.length - 1 ? UserData.currentLevel + 1 : UserData.currentLevel,
  //       currentValue: UserData.currentLevel < UserData.levelValue.length - 1 ? newCurrentValue - Data.levelValue[Data.currentLevel - 1].maxValue : Data.levelValue[Data.currentLevel - 1].maxValue,
  //     });
  //   } else {
  //     setUserData({
  //       ...UserData,
  //       currentValue: newCurrentValue,
  //     });
  //   }
  // }, [adjustData]);

  // let getGemQuantity = Data.currentLevel - 1;
  // let getCurrentValue = Data.currentValue;
  // if (Data.currentLevel === Data.levelValue.length && Data.currentValue >= Data.levelValue[Data.currentLevel - 1].maxValue) {
  //   getGemQuantity = Data.levelValue.length;
  // }
  // if (Data.currentLevel === Data.levelValue.length && Data.currentValue > Data.levelValue[Data.currentLevel - 1].maxValue) {
  //   getCurrentValue = Data.levelValue[Data.currentLevel - 1].maxValue;
  // }

  // let getMaxCurrentValue = Data.levelValue[Data.currentLevel - 1].maxValue;
  // let percentage = (getCurrentValue / getMaxCurrentValue) * 100;

  // function AddValue(value){
  //   setAdjustData(adjustData + value);
  // }

  return (
    <div className="GemBarContainer">
      <div className="BarMain">
        <div className="BarBackInside">
          <div className="LoadingBar" style={{ right: 100 - 30 + '%' }}>
            {/* <div className="Shine" /> */}
          </div>
        </div>
      </div>
      <div className="GemContainer">
        <div className="ValueController">
          <button>Deduct</button>
          <input type="text" />
          <button>Add</button>
        </div>
        <div className="GemList">
          {Array.from(Array(UserData.currentLevel - 1), (v, index) => {
            return <FaGem key={index} className="Icon" />;
          })}
        </div>
      </div>
    </div>
  );
}
