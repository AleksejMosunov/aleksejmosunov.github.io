import React from 'react';
import { avgLapsTime, avgTenBestLaps, teamInfo } from './utils';

export default function Popup() {
  return (
    <div className="popuptext" id="myPopup">
      <ul className="laps">
        <li>
          AVG
          <br />1 - {avgLapsTime}
          <br />2 - {avgLapsTime}
          <br />3 - {avgLapsTime}
        </li>
        <li>
          AVG 10
          <br />1 - {avgTenBestLaps}
          <br />2 - {avgTenBestLaps}
          <br />3 - {avgTenBestLaps}
        </li>
      </ul>
    </div>
  );
}
