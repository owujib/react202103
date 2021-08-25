import React from 'react';
import List from './reusable/List';

const Cars = (props) => {
  const { title, superCars, luxuryCars, removeState } = props;

  let supercars = superCars.map((car) => {
    return <List key={car.id} {...car} removeState={removeState} />;
  });
  let luxurycars = luxuryCars.map((car) => {
    return <List key={car.id} {...car} removeState={removeState} />;
  });

  return (
    <div className="cars" style={{ backgroundColor: 'red' }}>
      <h1>{title}</h1>

      <div>
        <h1>super cars</h1>
        <div style={carsStyles}>{supercars}</div>
      </div>
      <div>
        <h1>luxury cars</h1>
        <div style={carsStyles}>{luxurycars}</div>
      </div>
    </div>
  );
};

//embedded css
let carsStyles = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'red',
};

export default Cars;
