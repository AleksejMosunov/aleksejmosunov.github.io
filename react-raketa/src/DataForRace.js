import React from 'react';

function DataForRace() {
  return (
    <div className="data_name">
      <input
        className="inp_data_name"
        type="text"
        name=""
        id=""
        placeholder="Время плохого круга"
      />
      <input className="inp_data_name" type="text" name="" id="" placeholder="Время для ракеты" />
      <input className="inp_data_name" type="text" name="" id="" placeholder="Время для среднего" />
      <input className="inp_data_name" type="text" name="" id="" placeholder="Время для драчки" />
    </div>
  );
}

export default DataForRace;
