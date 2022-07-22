import React from 'react'
import "./LoadingCustom2.css"
import {RiArrowDropUpLine, RiArrowDropDownLine,RiArrowDropLeftLine,RiArrowDropRightLine } from 'react-icons/ri';
export default function LoadingCustom2() {
  return (
    <div className='CustomerLoading2Container'>
        <RiArrowDropUpLine className='Icon Top2'/>
        <RiArrowDropDownLine className='Icon Bottom2'/>  
        <RiArrowDropLeftLine className='Icon Left2'/>
        <RiArrowDropRightLine className='Icon Right2'/>
    </div>
  )
}
