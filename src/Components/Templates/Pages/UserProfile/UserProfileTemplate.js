import React from 'react';
import './UserProfileTemplate.css';
import UserInfoPanelTemplate from '../../../../Components/Templates/UserInfoPanel/UserInfoPanelTemplate';
import ChartBarTemplate from '../../../../Components/Templates/ChartBar/ChartBarTemplate';
import DialListTemplate from '../../../../Components/Templates/DialList/DialListTemplate';
export default function UserProfileTemplate() {
  return (
    <div className="UserProfileContainer">
      <UserInfoPanelTemplate AvatarVisibility={false} userData={UserProfileData} />
      <ChartBarTemplate CADData={BarChartData} chartHeight={'300px'} label={['Label 1', 'Label 2']} color={['#00818F', '#99F5FF']} valueColor={['#000', '#000']} CADLocation={'CAD-KEYJOIN'} />
      <DialListTemplate />
    </div>
  );
}

const UserProfileData = {
  firstName: 'Tong',
  middleName: '',
  lastName: 'Ha',
  title: 'Web Developer',
  anniversary: 'Jan 1, 2022',
  yearsWithCompany: 1,
  avatarURL: 'https://robohash.org/blanditiisvoluptateid.png?set=set1',
  stationsData: [
    {
      name: 'CAD',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Print',
      detail: {
        value: 300,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Therm',
      detail: {
        value: 400,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Laser',
      detail: {
        value: 500,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Mill',
      detail: {
        value: 600,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Tumble',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Inspect',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
    {
      name: 'Packing',
      detail: {
        value: 200,
        average: 100,
        goal: 200,
      },
    },
  ],
};

const BarChartData = [
  {
    Cases: 3,
    Units: 6,
    ID: 2,
    Location: 'CAD-IMPORT',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 6,
    ID: 3,
    Location: 'CAD-ALIGN',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 4,
    Units: 13,
    ID: 4,
    Location: 'CAD-CUT',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 1,
    Units: 7,
    ID: 5,
    Location: 'CAD-EXTRUDE',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 2,
    Units: 2,
    ID: 6,
    Location: 'CAD-KEYJOIN',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 2,
    Units: 2,
    ID: 7,
    Location: 'CAD-SPLINE',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 4,
    Units: 20,
    ID: 8,
    Location: 'CAD-SPLINEGEN',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 19,
    ID: 10,
    Location: 'CAD-LASERGEN',
    Date: '2022-07-13 00:00:00.000',
  },
  {
    Cases: 9,
    Units: 220,
    ID: 2,
    Location: 'CAD-IMPORT',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 9,
    Units: 220,
    ID: 3,
    Location: 'CAD-ALIGN',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 9,
    Units: 220,
    ID: 4,
    Location: 'CAD-CUT',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 5,
    Units: 188,
    ID: 5,
    Location: 'CAD-EXTRUDE',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 2,
    Units: 10,
    ID: 6,
    Location: 'CAD-KEYJOIN',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 7,
    Units: 83,
    ID: 7,
    Location: 'CAD-SPLINE',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 18,
    Units: 423,
    ID: 8,
    Location: 'CAD-SPLINEGEN',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 18,
    Units: 423,
    ID: 10,
    Location: 'CAD-LASERGEN',
    Date: '2022-07-12 00:00:00.000',
  },
  {
    Cases: 11,
    Units: 261,
    ID: 2,
    Location: 'CAD-IMPORT',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 12,
    Units: 281,
    ID: 3,
    Location: 'CAD-ALIGN',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 12,
    Units: 330,
    ID: 4,
    Location: 'CAD-CUT',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 4,
    Units: 115,
    ID: 5,
    Location: 'CAD-EXTRUDE',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 41,
    ID: 6,
    Location: 'CAD-KEYJOIN',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 4,
    Units: 71,
    ID: 7,
    Location: 'CAD-SPLINE',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 15,
    Units: 363,
    ID: 8,
    Location: 'CAD-SPLINEGEN',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 15,
    Units: 363,
    ID: 10,
    Location: 'CAD-LASERGEN',
    Date: '2022-07-11 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 106,
    ID: 2,
    Location: 'CAD-IMPORT',
    Date: '2022-07-08 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 106,
    ID: 3,
    Location: 'CAD-ALIGN',
    Date: '2022-07-08 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 106,
    ID: 4,
    Location: 'CAD-CUT',
    Date: '2022-07-08 00:00:00.000',
  },
  {
    Cases: 3,
    Units: 106,
    ID: 5,
    Location: 'CAD-EXTRUDE',
    Date: '2022-07-08 00:00:00.000',
  },
  {
    Cases: 27,
    Units: 376,
    ID: 8,
    Location: 'CAD-SPLINEGEN',
    Date: '2022-07-08 00:00:00.000',
  },
  {
    Cases: 27,
    Units: 376,
    ID: 10,
    Location: 'CAD-LASERGEN',
    Date: '2022-07-08 00:00:00.000',
  },
];
