import data from './sample-endurance.json';

// Данные с JSON
// export let teamInfo = data.Drivers.map((driver) => {
//   let arrTeam = [];
//   arrTeam.push(driver);
//   return driver;
// });

// export let stringStintTime = formattedTimeToString(stintTimeFromJson);
// export let stintTimeToNumber = formattedTime(stintTimeFromJson);
// export let info = data.Drivers[0].Drivers;
// export let teamNumber = data.Drivers[0].Kart.Name;
// export let driver = info[0].Alias;

// export let stintTimeFromJson = data.Drivers[0].StintTimeMs / 1000;

// export let arrMinusThree = arrLaps.slice(3, arrLaps.length);
// export let sortedArr = arrMinusThree.sort((a, b) => a - b);

// export let avgLapsTime = +AvgLapsTime(arrMinusThree).toFixed(2);
// export let tenBestLaps = sortedArr.slice(0, 10);
// export let avgTenBestLaps = +AvgLapsTime(tenBestLaps).toFixed(2);
// export let bestLap = Math.min(...arrLaps);

export let teamInfo = data.Drivers.map((driver) => {
  let leftTime = data.ClockMs / 1000;
  let pits = data.Drivers[0].TotalPitStops;
  let arrLaps = [];
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  let arrMinusThree = arrLaps.slice(3, arrLaps.length);
  let sortedArr = arrMinusThree.sort((a, b) => a - b);
  let tenBestLaps = sortedArr.slice(0, 10);
  let bestLap = Math.min(...arrLaps);
  let stintTime = driver.StintTimeMs / 1000;
  console.log(sortedArr);
  // AVG LEFT STINTS
  let stintTimeToNumber = formattedTime(stintTime);
  const quantityOfPits = 14;
  let quantityOfStintsLefts = quantityOfPits - pits + 1;
  let pitsLeft = (quantityOfPits - pits) * 3 * 60;
  let avgStintLeft = (leftTime + stintTimeToNumber * 60 - pitsLeft) / quantityOfStintsLefts;
  // AVG LEFT STINTS
  return {
    teamId: driver.Kart.Name,
    stintTime: formattedTime(stintTime),
    stintTimeAsText: formattedTimeToString(stintTime).slice(0, 5).replace('.', ''),
    driver: driver.Drivers[0].Alias,
    averageTime: AvgLapsTime(arrMinusThree).toFixed(2),
    averageBestTenTime: AvgLapsTime(tenBestLaps).toFixed(2),
    bestTime: bestLap.toFixed(2),
    averageStintTime: avgStintLeft,
    averageStintTimeAsText: formattedAvgStintLeftToString(avgStintLeft)
      .slice(0, 6)
      .replace('.', ''),
  };
});

// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);
// arrLaps.push(lastTime);

// STINT LEFT

export function myFunction(e) {
  e.preventDefault();
  let popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
}

export function AvgLapsTime(arr) {
  return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
}

export function formattedTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = (time % 60) / 60;
  let total = minutes + seconds;
  return total;
}

export function formattedTimeToString(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let total = `${minutes}:${seconds}`;
  return total;
}

export function formattedAvgStintLeftToString(time) {
  // let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let total = `${minutes}:${seconds}`;
  return total;
}

// const quantityOfPits = 14;

// let quantityOfStintsLefts = quantityOfPits - pits + 1;
// let pitsLeft = (quantityOfPits - pits) * 3 * 60;

// export let avgStintLeft = (leftTime + stintTimeToNumber * 60 - pitsLeft) / quantityOfStintsLefts;
// export let avgStintLeftAsText = formattedAvgStintLeftToString(avgStintLeft).slice(0, 5);

// export let leftTimeToString = formattedLeftTimeToString(leftTime);
// export function avgStintTimeLeft() {
//   return formattedTime(leftTime) + stintTimeToNumber - pitsLeft / quantityOfStints;
// }
// const quantityOfStints = 15;

// export function formattedLeftTimeToString(time) {
//   let hours = Math.floor(time / 60 / 60);
//   let minutes = Math.floor(time / 60) - hours * 60;
//   let seconds = time % 60;
//   let total = `${hours}:${minutes}:${seconds}`;
//   return total.slice(0, 7);
// }

// export let avgLapsTimeAsText = avgLapsTime.toFixed(2);
// export let avgLapsBestLapAsText = bestLap.toFixed(2);
// export let avgLapsTenBestLapAsText = avgTenBestLaps.toFixed(2);
