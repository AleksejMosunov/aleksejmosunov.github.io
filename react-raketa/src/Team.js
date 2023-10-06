import React from 'react';
// import raketa from './img/raketa.png';

function Team() {
  let myArray = [48.99, 49.22, 49.33, 49.01, 49.11];

  function LastLap(arr) {
    return arr[arr.length - 1];
  }
  function PreviousLap(arr) {
    return arr[arr.length - 2];
  }

  function AvgLap(arr) {
    return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
  }

  let avgTime = AvgLap(myArray);
  let lastTime = LastLap(myArray);
  let previousTime = PreviousLap(myArray);
  let bestTime = Math.min(...myArray);

  let stintTime = `39:58`;
  let teamNumber = 1;
  let driver = `Valera`;
  return (
    <div className="team">
      <p className="team_number pro">{teamNumber}</p>
      <p className="team_driver driver_raketa">
        {driver}
        {/* <img className="raketa_img" src={raketa} alt="raketa" width="25px" height="25px" /> */}
      </p>
      <p className="team_avg_time raketa drova">{avgTime.toFixed(2)}</p>
      <p className="team_best_time best">{bestTime.toFixed(2)}</p>
      <p className="team_last_time better worse best">{lastTime.toFixed(2)}</p>
      <p className="team_previous_time">{previousTime.toFixed(2)}</p>
      <p className="team_stint_time probably_soon_pit early">{stintTime}</p>
    </div>
  );
}

export default Team;
