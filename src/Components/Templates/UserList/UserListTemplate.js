import React, { useState, useEffect } from 'react';
import BlankPanel from '../Panel/BlankPanel';
// import { EmployeesData } from '../../../../Data/EmployeesData';
import UserInfoPanelTemplate from '../UserInfoPanel/UserInfoPanelTemplate';
import './UserListTemplate.css';
export default function UserListTemplate({ AvatarVisibility, employeesData }) {
  const [employees, setEmployees] = useState(employeesData);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('first_name_az');
  const [updateList, setUpdateList] = useState(false);

  useEffect(() => {
    SortEmployeesList();
    setUpdateList((value) => !value);
  }, [sortValue]);

  useEffect(() => {
    UpdateEmployeeList();
  }, [searchValue]);

  function UpdateEmployeeList() {
    const newEmployees = employeesData.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        employee.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setEmployees(newEmployees);
  }

  function SortEmployeesList() {
    if (sortValue === 'first_name_az') {
      setEmployees((list) => list.sort((a, b) => a.firstName.localeCompare(b.firstName)));
    }
    if (sortValue === 'first_name_za') {
      setEmployees((list) => list.sort((a, b) => b.firstName.localeCompare(a.firstName)));
    }
    if (sortValue === 'last_name_az') {
      setEmployees((list) => list.sort((a, b) => a.lastName.localeCompare(b.lastName)));
    }
    if (sortValue === 'last_name_za') {
      setEmployees((list) => list.sort((a, b) => b.lastName.localeCompare(a.lastName)));
    }
  }

  return (
    <div className="MainBodyContainer">
      <div className="Header">
        Employee List {employees.length} {updateList}
      </div>
      <BlankPanel className="EmployeeContainer">
        <div className="ListController">
          <div className="Control">
            Search <input className="Input" type="text" onChange={(value) => setSearchValue(value.target.value)} />
          </div>
          <div className="Control">
            <div className="Sort">
              Sort By
              <select
                className="Input"
                onChange={(value) => {
                  setSortValue(value.target.value);
                }}
              >
                <option value="first_name_az">First Name A-Z</option>
                <option value="first_name_za">First Name Z-A</option>
                <option value="last_name_az">Last Name A-Z</option>
                <option value="last_name_za">Last Name Z-A</option>
                {/* <option value="hire_date_latest">Hire Date Latest</option>
                  <option value="hire_date_oldest">Hire Date Oldest</option> */}
              </select>
            </div>
            {/* <div className="Filter">Filter</div> */}
          </div>
        </div>

        <div className="ListBody">
          {employees?.map((item, index) => {
            return <UserInfoPanelTemplate AvatarVisibility={AvatarVisibility} userData={item} />;
          })}
        </div>
      </BlankPanel>
    </div>
  );
}
