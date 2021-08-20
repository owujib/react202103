import React from 'react';

import Afang from './images/Afang-soup-16.jpg';
import Ewa from './images/Ewa-agoyin.jpg';
import FriedRice from './images/Fried-rice.jpg';
import './App.css';
import Cars from './components/Cars';
import Food from './components/Food';
import Form from './components/Form';

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
      { id: 1, name: 'Afang Soup', url: Afang },
      { id: 1, name: 'Ewa agonyi', url: Ewa },
    ],
  };

  addLuxuryCars = (incomingData) => {
    let newId = this.state.luxuryCars.length + 1;
    let newData = { id: newId, ...incomingData };
    this.setState({
      luxuryCars: [...this.state.luxuryCars, newData],
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Welcome to React</h1>
        <img src={Ewa} />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt ut
          molestiae et voluptate asperiores consectetur eveniet maiores, iusto,
          aliquid ea exercitationem ullam ratione consequatur deserunt minima
          assumenda explicabo, libero ad?
        </p>
        <Form addLuxuryCars={this.addLuxuryCars} />
        <Cars
          title="Cars"
          luxuryCars={this.state.luxuryCars}
          superCars={this.state.superCars}
        />
        <Food foodList={this.state.food} />
      </div>
    );
  }
}

export default App;
