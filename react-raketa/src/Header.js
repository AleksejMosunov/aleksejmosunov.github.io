import React from 'react';
import raketa from './img/raketa.png';

function Header() {
  return (
    <div className="header">
      <img className="raketa_img_header" src={raketa} alt="raketa" width="80px" height="80px" />
      <p className="race_name">7H ENDURANCE SWS 22.10.2023</p>
      <p className="time">Время гонки: 2:45:36</p>
    </div>
  );
}

export default Header;
