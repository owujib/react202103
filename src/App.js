import React from 'react';

import Afang from './images/Afang-soup-16.jpg';
import Ewa from './images/Ewa-agoyin.jpg';
import FriedRice from './images/Fried-rice.jpg';
import './App.css';
import Cars from './components/Cars';
import Food from './components/Food';
import { LuxuryCarsForm, SuperCarsForm } from './components/Form';

class App extends React.Component {
  state = {
    luxuryCars: [
      {
        id: 1,
        name: 'Rolls Royce',
        url: 'https://cdn.motor1.com/images/mgl/kL2kY/s3/rolls-royce-sweptail-cabrio-render.webp',
      },
      {
        id: 2,
        name: 'Mercedes Benz',
        url: 'https://cdn.jdpower.com/JDPA_2021%20Mercedes-Benz%20S-Class%20Black%20At%20Speed.jpg',
      },
      {
        id: 3,
        name: 'Bentley',
        url: 'https://media.istockphoto.com/photos/bentley-bentayga-luxury-suv-car-front-view-picture-id506331460?k=6&m=506331460&s=612x612&w=0&h=kJezQtnDb309vSX2UiWzQttFGcsIYsPcJZCqcSpi6e4=',
      },
    ],
    superCars: [
      {
        id: 1,
        name: 'Lamborghini',
        url: 'https://cdn.carbuzz.com/gallery-images/840x560/667000/400/667464.jpg',
      },
      {
        id: 2,
        name: 'Bugatti',
        url: 'https://i.ytimg.com/vi/rg9d1MP00UQ/maxresdefault.jpg',
      },
      {
        id: 3,
        name: 'Ferrari Laferrari',
        url: 'https://cdn.dealeraccelerate.com/fusion/1/646/32081/790x1024/2014-ferrari-laferrari-2dr-cpe',
      },
    ],

    food: [
      { id: 1, name: 'Fried Rice', url: FriedRice },
      { id: 2, name: 'Afang Soup', url: Afang },
      { id: 3, name: 'Ewa agonyi', url: Ewa },
    ],

    right: null,
    left: null,
  };

  addLuxuryCar = (incomingState) => {
    let newId = this.state.luxuryCars.length + 1;
    let newCar = { id: newId, ...incomingState };
    this.setState({
      luxuryCars: [...this.state.luxuryCars, newCar],
    });
  };

  removeState = (incomingState) => {};
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Welcome to React</h1>
        <img src={Ewa} alt="..." />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ut
          molestiae et voluptate asperiores consectetur eveniet maiores, iusto,
          aliquid ea exercitationem ullam ratione consequatur deserunt minima
          assumenda explicabo, libero ad?
        </p>
        <LuxuryCarsForm addLuxuryCar={this.addLuxuryCar} />
        <Cars
          title="Cars"
          luxuryCars={this.state.luxuryCars}
          superCars={this.state.superCars}
          removeState={this.removeState}
        />
        <Food removeState={this.removeState} foodList={this.state.food} />

        <div
          style={{
            width: '400px',
            height: '200px',
            backgroundImage: `
            ${
              this.state.right !== null
                ? ` linear-gradient(to right, rgba(255, ${this.state.right}, 0 ), rgba(255, 255, 0 ), rgba(255, 0, ${this.state.right} ))`
                : ` linear-gradient(to right, rgba(255, 0, 0 ), rgba(255, 255, 0 ), rgba(255, 0, 255 ))`
            }`,
          }}
          onMouseMove={(e) => {
            this.setState({
              right: e.clientX,
              left: e.clientY,
            });
          }}
        ></div>
      </div>
    );
  }
}

export default App;
