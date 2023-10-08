import React from 'react';
import Popup from './Popup';
// import raketa from './img/raketa.png';
import {
  myFunction,
  avgLapsTime,
  avgTenBestLaps,
  bestLap,
  teamNumber,
  driver,
  stringStintTime,
  avgStintLeftAsText,
} from './utils';
function Team() {
  return (
    <div className="team">
      <p className="team_number pro">{teamNumber}</p>
      <p className="team_stint_time">{stringStintTime}</p>
      <div className="popup team_driver driver_raketa" onClick={myFunction}>
        {driver}
        <Popup />

        {/* <img className="raketa_img" src={raketa} alt="raketa" width="25px" height="25px" /> */}
      </div>
      <p className="team_avg_time">{avgLapsTime.toFixed(2)}</p>
      <p className="team_avgTenLaps_time middle drova raketa">{avgTenBestLaps.toFixed(2)}</p>
      <p className="team_best_time">{bestLap.toFixed(2)}</p>
      <p className="team_avg_team_time">{avgStintLeftAsText}</p>
    </div>
  );
}

export default Team;
