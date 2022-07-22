import React from "react";
import "./LoadingIcon.css";
import { MdRefresh } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { TbRefreshDot } from "react-icons/tb";
import { TiRefreshOutline } from "react-icons/ti";
import { GiAbstract069, GiAmmoniteFossil, GiBarbedCoil, GiCartwheel, GiCircularSaw, GiDividedSpiral, GiDoubled } from "react-icons/gi";
import { GrCloudlinux, GrCycle, GrUbuntu } from "react-icons/gr";
import { ImSpinner6, ImSpinner5, ImSpinner9, ImSpinner2, ImSpinner10, ImSpinner4 } from "react-icons/im";
import { SiJson, SiLaravelnova } from "react-icons/si";
import { CgSpinnerTwo, CgSpinner } from "react-icons/cg";
export default function LoadingIcon1({ className, size, color, duration, iconNo }) {
  const styles = { fontSize: size, color: color, animationDuration: duration };
  const _1 = <MdRefresh className={"Icon " + className} style={styles} />;
  const _2 = <RiRefreshFill className={"Icon " + className} style={styles} />;
  const _3 = <TbRefreshDot className={"Icon Opposite " + className} style={styles} />;
  const _4 = <TiRefreshOutline className={"Icon " + className} style={styles} />;
  const _5 = <GiAbstract069 className={"Icon " + className} style={styles} />;
  const _6 = <GiAmmoniteFossil className={"Icon " + className} style={styles} />;
  const _7 = <GiBarbedCoil className={"Icon " + className} style={styles} />;
  const _8 = <GiCartwheel className={"Icon " + className} style={styles} />;
  const _9 = <GiCircularSaw className={"Icon " + className} style={styles} />;
  const _10 = <GiDividedSpiral className={"Icon " + className} style={styles} />;
  const _11 = <GiDoubled className={"Icon Opposite " + className} style={styles} />;
  const _12 = <GrCloudlinux className={"Icon " + className} style={styles} />;
  const _13 = <GrCycle className={"Icon " + className} style={styles} />;
  const _14 = <GrUbuntu className={"Icon " + className} style={styles} />;
  const _15 = <ImSpinner6 className={"Icon " + className} style={styles} />;
  const _16 = <ImSpinner5 className={"Icon " + className} style={styles} />;
  const _17 = <ImSpinner9 className={"Icon " + className} style={styles} />;
  const _18 = <ImSpinner2 className={"Icon " + className} style={styles} />;
  const _19 = <ImSpinner10 className={"Icon " + className} style={styles} />;
  const _20 = <SiJson className={"Icon " + className} style={styles} />;
  const _21 = <SiLaravelnova className={"Icon Opposite " + className} style={styles} />;
  const _22 = <CgSpinnerTwo className={"Icon " + className} style={styles} />;
  const _23 = <CgSpinner className={"Icon " + className} style={styles} />;
  const _24 = <ImSpinner4 className={"Icon " + className} style={styles} />;
  let Icon = null;
  switch (iconNo) {
    case 1:
      Icon = _1;
      break;
    case 2:
      Icon = _2;
      break;
    case 3:
      Icon = _3;
      break;
    case 4:
      Icon = _4;
      break;
    case 5:
      Icon = _5;
      break;
    case 6:
      Icon = _6;
      break;
    case 7:
      Icon = _7;
      break;
    case 8:
      Icon = _8;
      break;
    case 9:
      Icon = _9;
      break;
    case 10:
      Icon = _10;
      break;
    case 11:
      Icon = _11;
      break;
    case 12:
      Icon = _12;
      break;
    case 13:
      Icon = _13;
      break;
    case 14:
      Icon = _14;
      break;
    case 15:
      Icon = _15;
      break;
    case 16:
      Icon = _16;
      break;
    case 17:
      Icon = _17;
      break;
    case 18:
      Icon = _18;
      break;
    case 19:
      Icon = _19;
      break;
    case 20:
      Icon = _20;
      break;
    case 21:
      Icon = _21;
      break;
    case 22:
      Icon = _22;
      break;
    case 23:
      Icon = _23;
      break;
    case 24:
      Icon = _24;
      break;
    default:
      Icon = _1;
      break;
  }
  return <div className="LoadingIconContainer">{Icon}</div>;
}
