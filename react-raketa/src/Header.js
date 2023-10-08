import React from 'react';
import raketa from './img/raketa.png';
// import { leftTimeToString } from './utils';
import data from './sample-endurance.json';

function Header() {
  return (
    <div className="header">
      <img className="raketa_img_header" src={raketa} alt="raketa" width="80px" height="80px" />
      <p className="race_name">{data.Name}</p>
      <p className="time">Время гонки: {data.ClockAsText}</p>
    </div>
  );
}

export default Header;
