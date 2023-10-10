import React from 'react';
// import Popup from './Popup';
// import raketa from './img/raketa.png';
import myFunction from './utils';

function Team({ teamData }) {
  return (
    <div className="team">
      <p className="team_number pro">{teamData.teamId}</p>
      <p className="team_stint_time">{teamData.stintTimeAsText}</p>
      <div className="popup team_driver driver_raketa" onClick={myFunction}>
        {teamData.driver}
        {/* <Popup /> */}

        {/* <img className="raketa_img" src={raketa} alt="raketa" width="25px" height="25px" /> */}
      </div>
      <p className="team_avg_time">{teamData.averageTime}</p>
      <p className="team_avgTenLaps_time middle drova raketa">{teamData.averageBestTenTime}</p>
      <p className="team_best_time">{teamData.bestTime}</p>
      <p className="">{teamData.pits}</p>
      <p className="team_avg_team_time">{teamData.averageStintTimeAsText}</p>
    </div>
  );
}
export default Team;
