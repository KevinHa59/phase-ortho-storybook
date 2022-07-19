import React, { useState } from 'react';
import './Design.css';
import EmployeeSearch from '../Templates/EmployeeSearch/EmployeeSearch';
import { Employees } from '../../Data/Employees';
import TeamSchedulePageTemplate from "../Templates/TeamSchedulePage/TeamSchedulePageTemplate"
export default function Design() {
  return (
    <div>
      <TeamSchedulePageTemplate/>
    </div>
  );
}
