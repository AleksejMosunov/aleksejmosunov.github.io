import data from './sample-endurance.json';

console.log(data);

let quantityOfPits = 14;

export let teamInfo = data.Drivers.map((driver) => {
  let leftTime = data.ClockMs / 1000;
  let pits = driver.TotalPitStops;
  let arrLaps = [];
  arrLaps.push(driver.LastTimeMs / 1000);
  arrLaps.push(driver.LastTimeMs / 1000);
  let arrMinusThree = arrLaps.slice(3, arrLaps.length);
  let sortedArr = arrMinusThree.sort((a, b) => a - b);
  let tenBestLaps = sortedArr.slice(0, 10);
  let bestLap = Math.min(...arrLaps);
  let stintTime = driver.StintTimeMs / 1000;
  // AVG LEFT STINTS
  let stintTimeToNumber = formattedTime(stintTime);
  if (driver.RaceCategory.Name != 'Pro') {
    quantityOfPits = 15;
  }
  let quantityOfStintsLefts = quantityOfPits - pits + 1;
  let pitsLeft = (quantityOfPits - pits) * 3 * 60;
  let avgStintLeft = (leftTime + stintTimeToNumber * 60 - pitsLeft) / quantityOfStintsLefts;
  //
  return {
    pits: driver.TotalPitStops,
    league: driver.RaceCategory.Name,
    lastTime: driver.LastTimeMs,
    lap: driver.lap,
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
teamInfo.sort((a, b) => (a.stintTime > b.stintTime ? -1 : 1));
// Popup
export default function myFunction(e) {
  e.preventDefault();
  let popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
}
//

export function AvgLapsTime(arr) {
  return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length;
}

// Format time

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
//

// Номер команды + последний круг

let obj = teamInfo.map((idAndLap) => {
  return {
    teamId: idAndLap.teamId,
    lastTime: idAndLap.lastTime,
  };
});

//

// Последний круг

let newObj = obj.map((lap) => {
  return {
    laps: [lap.lastTime],
  };
});
console.log(obj);
console.log(newObj);
//

{
	teamId: id,
	drivers: {
		vasya:{
			stints: {
				'1': {
					laps:[{
						lapNumber: 1,
						lapTime: 5301,
					}]
				}
			}
		}
		petya:{}
	},
	currentDriver: 'vasya'

}

// Проверка на одинаковвый круг

function checkLap(lap) {
  let arrLaps = [];
  let previousLap = arrLaps[arrLaps.length - 1];
  if (lap != previousLap) return lap;
}
//

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

// export let addLap = data.Drivers.map((driver) => {
//   let arrLaps = [];
//   arrLaps.push(driver.LastTimeMs / 1000);
// 	arrLaps.push(driver.LastTimeMs / 1000);
// 	arrLaps.push(driver.LastTimeMs / 1000);
// 	arrLaps.push(driver.LastTimeMs / 1000);
// 	arrLaps.push(driver.LastTimeMs / 1000);
// 	arrLaps.push(driver.LastTimeMs / 1000);
// 	arrLaps.push(driver.LastTimeMs / 1000);
//   let arrMinusThree = arrLaps.slice(3, arrLaps.length);
//   let sortedArr = arrMinusThree.sort((a, b) => a - b);
//   let tenBestLaps = sortedArr.slice(0, 10);

//   return {
//     arrLaps: arrLaps,
//     teamId: driver.Kart.Name,
//     tenBestLaps: tenBestLaps,
//   };
// });

// console.log(addLap);

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
