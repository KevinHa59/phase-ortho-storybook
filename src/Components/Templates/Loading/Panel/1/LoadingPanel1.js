import React from 'react'
import "./LoadingPanel1.css"
export default function LoadingPanel1({dev, icon, blur, backgroundColor, isShow}) {
  return (
    <div className={isShow === false ? 'LoadingPanelContainer Hide' : dev ? 'LoadingPanelContainer Dev': 'LoadingPanelContainer'} style={{backdropFilter: `blur(${blur})`, background: backgroundColor}}>
        {icon}
        <div className="LoadingFX"/>
    </div>
  )
}
