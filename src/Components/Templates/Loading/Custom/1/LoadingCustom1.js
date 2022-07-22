import React from "react";
import "./LoadingCustom1.css";
import { VscDebugBreakpointLogUnverified as Cube } from "react-icons/vsc";
export default function LoadingCustom1({ color, shadowColor, circleColor, size }) {
  return (
    <div
      className="LoadingCustom1Container"
      style={{ width: size, boxShadow: `inset -2px -2px 10px ${circleColor}, inset 2px 2px 10px ${circleColor}` }}
    >
      <Cube className="Icon Top" style={{ backgroundColor: color, color: color, boxShadow: `3px 3px 5px ${shadowColor}` }} />
      <Cube className="Icon Left" style={{ backgroundColor: color, color: color, boxShadow: `3px 3px 5px ${shadowColor}` }} />
    </div>
  );
}
