import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './TeamSchedulePageTemplate.css';
import { TeamScheduleData } from '../../../Data/TeamScheduleData';
import { ImCalendar } from 'react-icons/im';
import { MdArrowDropDown } from 'react-icons/md';
export default function TeamSchedulePageTemplate() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTeam, setSelectedTeam] = useState(1);
  const [next7Days, setNext7Days] = useState([]);

  let isInitial = true;
  const sortedList = TeamScheduleData.sort((a, b) => {
    return a.first_name.localeCompare(b.first_name);
  }).filter((item) => {
    return item.team === selectedTeam;
  });

  useEffect(() => {
    let days = [];
    for (var i = 0; i < 7; i++) {
      const current = new Date(selectedDate);
      current.setDate(current.getDate() + (isInitial ? i + 1 : i));
      days.push(current.toLocaleDateString());
    }
    setNext7Days(days);
    
    isInitial = false;
  }, [selectedDate]);

  return (
    <div className="TeamSchedulePageContainer">
      {/* <div className="ControlBar">
        <DatePicker setValue={setSelectedDate} style={{ width: "max-content" }} />
      </div> */}
      <div className="DateListHeader">
        <div className="DateItem EmptyCell">
          <Button_DropDown label={'Team ' + sortedList[0].team} setValue={setSelectedTeam} />
        </div>
        {next7Days?.map((date, index) => {
          var day = new Date(date);
          return <>{index === 0 ? <DatePicker setValue={setSelectedDate} /> : <DatePanel key={index} day={day} date={date} />}</>;
        })}
      </div>
      <div className="DateListBody">
        {sortedList.map((employee, index) => {
          let next7DaysSchedule = employee.working_days.filter((schedule) => {
            return new Date(schedule.date) >= new Date(next7Days[0]) && new Date(schedule.date) <= new Date(next7Days[6]);
          });
          let new7DaysSchedule = [] ;
          next7Days.map((date,index) => {
            if(date < next7DaysSchedule[0]?.date){
              new7DaysSchedule.push({
                date: date,
                location: '',
                color_code: 'transparent',
              });
            }else{
              new7DaysSchedule.push(next7DaysSchedule[0]);
              next7DaysSchedule.shift();
            }
          })
          return (
            <div className="EmployeeDetail" key={index}>
              <EmployeePanel employee={employee} title={employee.team_lead === 1 && 'Leader'} />
  
              {new7DaysSchedule?.map((schedule, index) => {
                return <LocationColorBox key={index} index={index} selectedDate={selectedDate} locationDetail={schedule} />;

              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}


function LocationColorBox({ index, selectedDate, locationDetail }) {
  const dayInText = new Date(locationDetail?.date).toLocaleDateString('en-us', { weekday: 'long' });
  const isWeekend = dayInText === 'Saturday' || dayInText === 'Sunday';

  return (
    locationDetail ? 
    <div key={index} className={isWeekend ? 'ScheduleDate Weekend' : 'ScheduleDate'}>
      {locationDetail?.location !== '' && !isWeekend && (
        <div
          className="Highlight"
          style={{
            borderTopColor: locationDetail?.color_code,
            borderTopWidth: '5px',
            borderTopStyle: 'solid',
            color: locationDetail?.color_code,
            background: locationDetail?.color_code + '49',
          }}
        >
          {locationDetail?.location} 
        </div>
      )}
    </div> : <div className="ScheduleDate"></div>
  );
}

function EmployeePanel({ employee, title }) {
  return (
    <div className="EmployeeName">
      {title && <div className="Title">{title}</div>}
      <div className="Avatar">
        <img src={employee.avatar} alt="" />
      </div>
      <div className="Name">{employee.first_name + ' ' + employee.last_name}</div>
    </div>
  );
}

function DatePanel({ index, day, date }) {
  const dayInText = day.toLocaleDateString('en-us', { weekday: 'long' });
  return (
    <div key={index} className={dayInText === 'Saturday' || dayInText === 'Sunday' ? 'DateItem Weekend' : 'DateItem'}>
      <div className="DateText">{dayInText}</div>
      <div className="DateValue">{date}</div>
    </div>
  );
}

function DatePicker({ setValue, style, className }) {
  const [dateChange, setDateChange] = useState(new Date());
  const [updateDate, setUpdateDate] = useState();
  const calendarRef = useRef();
  let isInitial = true;
  useEffect(() => {
    let newDate = new Date(dateChange);
    newDate.setDate(newDate.getDate() + (isInitial ? 1 : 0));
    setUpdateDate(newDate);
    isInitial = false;
  }, [dateChange]);

  return (
    <div
      className={'CalendarContainer ' + className}
      style={style}
      onClick={() => {
        calendarRef.current.showPicker();
      }}
    >
      <div className="DateInfo">
        {updateDate?.toLocaleDateString('en-us', { weekday: 'long' })}
        <br />
        {updateDate?.toLocaleDateString()}
      </div>
      <ImCalendar className="Icon" />
      <div className="Calendar">
        <input
          type="date"
          ref={calendarRef}
          onChange={(value) => {
            setValue && setValue(value.target.value);
            // setValue(value.target.value);
            setDateChange(value.target.value);
          }}
        />
      </div>
      <div className="EffectBox" />
    </div>
  );
}

function Button_DropDown({ label, setValue }) {
  const ListItem = [1, 2, 3, 4, 5];

  return (
    <div className="Button_DropDown">
      <div className="Selection">
        {label} <MdArrowDropDown className="Icon" />
      </div>
      <div className="ListItem">
        {ListItem.map((item, index) => {
          return (
            <div key={index} className="Item" onClick={() => setValue(item)}>
              Team {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
