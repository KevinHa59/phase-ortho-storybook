import React from 'react';
import './UserInfoPanelTemplate.css';
import PlaqueTemplate from '../../../Components/Templates/Plaque/PlaqueTemplate';
import YearWithCompanyTemplate from '../YearWithCompany/YearWithCompanyTemplate';
export default function UserInfoPanelTemplate({ AvatarVisibility, userData }) {
  const Stations = userData.stationsData || [
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
  ];
  // const _middleName = userData.middleName === null ? '' : userData.middleName;
  return (
    <div className="UserInfoPanelContainer">
      <div className="PlaqueContainer">
        <PlaqueTemplate label={userData.firstName?.charAt(0) + '' + userData.lastName?.charAt(0)} labelSize="40px" level={0} style="Style1" />
      </div>
      <div className="Center">
        <div className="Top">
          <div className="YearWithCompanyContainer">
            <YearWithCompanyTemplate label={'Years with company: '} year={userData.yearsWithCompany} />
          </div>
          <div className="Info">
            <div className="InfoItem">
              Name: {userData.firstName} {userData.middleName} {userData.lastName}
            </div>
            <div className="InfoItem">Title: {userData.title}</div>
            <div className="InfoItem">Anniversary: {userData.anniversary}</div>
          </div>
        </div>
        <div className="Bottom">
          {Stations.map((task, index) => {
            return (
              <div key={index} className="TaskItem Valid">
                <div className="TaskName">{task.name}</div>
                <div className="Detail">
                  <div className="Section">{task.detail.value}</div>
                  <div className="Section">{task.detail.average} avg. per/hr</div>
                  <div className="Section">Goal: {task.detail.goal}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <UserAvatar visible={AvatarVisibility} AvatarURL={userData.avatarURL} />
    </div>
  );
}

function UserAvatar({ visible, AvatarURL }) {
  return (
    visible === true && (
      <div className="Avatar">
        <img src={AvatarURL} alt="" />
      </div>
    )
  );
}
