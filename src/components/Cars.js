import React from 'react';

const Cars = (props) => {
  const { title, carData } = props;

  let superCars = carData.superCars.map((car) => {
    console.log(car);
    return (
      <div>
        <img src={car.url} width="200px" />
        <p>{car.name}</p>
      </div>
    );
  });

  return (
    <div className="cars" style={{ backgroundColor: 'red' }}>
      <h1>{title}</h1>

      <div>
        <h1>super cars</h1>
        <div style={carsStyles}>{superCars}</div>
      </div>
      <div>
        <h1>luxury cars</h1>
        <div style={carsStyles}></div>
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
