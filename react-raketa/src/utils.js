import data from './sample-endurance.json';

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
  return total.slice(0, 5);
}

export function formattedLeftTimeToString(time) {
  let hours = Math.floor(leftTime / 60 / 60);
  let minutes = Math.floor(time / 60) - hours * 60;
  let seconds = time % 60;
  let total = `${hours}:${minutes}:${seconds}`;
  return total.slice(0, 7);
}

export function avgStintTimeLeft(leftTime) {
  let hours = Math.floor(leftTime / 60 / 60);
  let minutes = Math.floor(leftTime / 60) - hours * 60;
  let seconds = leftTime % 60;
  let time = ((hours * 60 + minutes) * 60 + seconds) / 60;
  let pits = 6;
  let pitsTime = 3 * pits;

  return (time + pitsTime) / pits;
}

// Данные с JSON

export let info = data.Drivers[0].Drivers;
export let teamNumber = data.Drivers[0].Kart.Name;
export let driver = info[0].Alias;
export let leftTime = data.ClockMs / 1000;

// export let leftTimeToString = formattedLeftTimeToString(leftTime);

export let lastTime = data.Drivers[0].LastTimeMs / 1000;
export let arrLaps = [];
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);
arrLaps.push(lastTime);

export let arrMinusThree = arrLaps.slice(3, arrLaps.length);
export let sortedArr = arrMinusThree.sort((a, b) => a - b);

export let avgLapsTime = +AvgLapsTime(arrMinusThree).toFixed(2);
export let tenBestLaps = sortedArr.slice(0, 10);
export let avgTenBestLaps = +AvgLapsTime(tenBestLaps).toFixed(2);
export let bestLap = Math.min(...arrLaps);

// STINT LEFT

export let stintTimeFromJson = data.Drivers[0].StintTimeMs / 1000;

export let avgStintLeft = avgStintTimeLeft(leftTime);

export let stringStintTime = formattedTimeToString(stintTimeFromJson);

export let stintTimeToNumber = formattedTime(stintTimeFromJson);
