import React, { useEffect, useRef, useState } from 'react';
import './SearchPanel.css';
import { Employees } from '../../../Data/Employees';
import { MdSearch, MdClose } from 'react-icons/md';
import SearchBoxTemplate from '../Controller/SearchBox/SearchBoxTemplate';
export default function SearchPanel({ EmployeeData, limit, showAvatar }) {
  const Data = EmployeeData || Employees;
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState();
  useEffect(() => {
    let filterList = [];
    const resultList = document.querySelector('.ResultList');

    if (searchText.length > 0) {
      filterList = filterEmployees();

      resultList.classList.add('Active');
    } else {
      resultList.classList.remove('Active');
    }
    console.log(filterList);
    setSearchResult(filterList);
  }, [searchText, limit]);

  function filterEmployees() {
    const newList = Data.filter(
      (employee) =>
        searchText.toLocaleLowerCase() === employee.FirstName.toLowerCase().substring(0, searchText.length) ||
        searchText.toLocaleLowerCase() === employee.LastName.toLowerCase().substring(0, searchText.length) ||
        searchText.toLocaleLowerCase() === (employee.FirstName.toLowerCase() + ' ' + employee.LastName.toLowerCase()).substring(0, searchText.length) ||
        searchText.toLocaleLowerCase() === (employee.FirstName.toLowerCase() + employee.LastName.toLowerCase()).substring(0, searchText.length) ||
        searchText.toUpperCase() === employee.FirstName.toUpperCase().charAt(0) + employee.LastName.toUpperCase().charAt(0)
    );
    return newList.slice(0, limit || 10);
  }

  return (
    <div className="SearchPanelContainer">
      <div className="InputContainer">
        <SearchBoxTemplate placeholder={'Enter...'} value={searchText} setValue={setSearchText} onChange={(value) => setSearchText(value.target.value)} />
        {/* <input type="text" className="Input" placeholder="Enter Name..." value={searchText} onChange={(value) => setSearchText(value.target.value)} />
        {searchText.length === 0 ? (
          <MdSearch className="Icon" />
        ) : (
          <MdClose
            className="Icon"
            onClick={() => {
              setSearchText('');
            }}
          />
        )} */}
      </div>
      <div className="ResultList">
        {searchResult?.map((employee) => {
          return (
            <div className="ResultItem" key={employee.Id} onClick={() => alert(employee.FirstName + ' ' + employee.LastName)}>
              <ManagerIcon isManager={employee.Manager} />
              <Avatar isAvatar={showAvatar || false} employee={employee} />
              <div className="Detail">
                <div className="Name">
                  {employee.FirstName} {employee.LastName}
                </div>
                <div className="Email">{employee.EMail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Avatar({ isAvatar, employee }) {
  return isAvatar === true ? (
    <div className="Avatar">
      <img src={employee.Avatar} alt="" />{' '}
    </div>
  ) : (
    <div className="Initial">
      {employee.FirstName.charAt(0)}
      {employee.LastName.charAt(0)}
    </div>
  );
}

function ManagerIcon({ isManager }) {
  return isManager === '1' && <div className="Manager">M</div>;
}
