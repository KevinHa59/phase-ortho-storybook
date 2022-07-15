import React from 'react';
import './CalendarPanelTemplate.css';
export default function CalendarPanelTemplate({ data }) {
  const Data = data || [
    {
      date: '06/01/2022',
      hours: 7,
    },
    {
      date: '06/02/2022',
      hours: 3,
    },
    {
      date: '06/03/2022',
      hours: 0,
    },
    {
      date: '06/04/2022',
      hours: 7,
    },
    {
      date: '06/05/2022',
      hours: 3,
    },
    {
      date: '06/06/2022',
      hours: 7,
    },
    {
      date: '06/07/2022',
      hours: 9,
    },
    {
      date: '06/08/2022',
      hours: 1,
    },
    {
      date: '06/09/2022',
      hours: 3,
    },
    {
      date: '06/10/2022',
      hours: 3,
    },
    {
      date: '06/11/2022',
      hours: 4,
    },
    {
      date: '06/12/2022',
      hours: 4,
    },
    {
      date: '06/13/2022',
      hours: 5,
    },
    {
      date: '06/14/2022',
      hours: 4,
    },
    {
      date: '06/15/2022',
      hours: 7,
    },
    {
      date: '06/16/2022',
      hours: 1,
    },
    {
      date: '06/17/2022',
      hours: 5,
    },
    {
      date: '06/18/2022',
      hours: 6,
    },
    {
      date: '06/19/2022',
      hours: 2,
    },
    {
      date: '06/20/2022',
      hours: 7,
    },
    {
      date: '06/21/2022',
      hours: 0,
    },
    {
      date: '06/22/2022',
      hours: 2,
    },
    {
      date: '06/23/2022',
      hours: 7,
    },
    {
      date: '06/24/2022',
      hours: 5,
    },
    {
      date: '06/25/2022',
      hours: 9,
    },
    {
      date: '06/26/2022',
      hours: 2,
    },
    {
      date: '06/27/2022',
      hours: 4,
    },
    {
      date: '06/28/2022',
      hours: 4,
    },
    {
      date: '06/29/2022',
      hours: 1,
    },
    {
      date: '06/30/2022',
      hours: 3,
    },
  ];
  return (
    <div className="CalenderPanelContainer">
      <div className="label">Days worked this Month</div>
      <div className="CalendarContainer">
        {Data.map((item) => {
          return <DateBox date={item.date} hours={item.hours} />;
        })}
      </div>
    </div>
  );
}

function DateBox({ data, date, hours }) {
  return (
    <div className={'DateBox _' + hours}>
      <div className="DetailBox">
        <div className="Date">Date: {date}</div>
        <div className="Hours">Work hour: {hours}</div>
      </div>
    </div>
  );
}
