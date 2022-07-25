import React, { useState } from 'react';
import './Design.css';
import LoadingPanel1 from '../Templates/Loading/Panel/1/LoadingPanel1';
import LoadingIcon from '../Templates/Loading/Icon/LoadingIcon1';
export default function Design() {
  return (
    <div className='Design'>
      <LoadingPanel1 icon={<LoadingIcon color={"#000"} iconNo={18} duration='2s'/>} dev={true}/>
      {/* <LoadingIcon iconNo={18} duration='2s'/> */}
    </div>
  );
}
