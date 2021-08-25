import React from 'react';
import List from './reusable/List';

class Food extends React.Component {
  render() {
    const { foodList, removeState } = this.props;
    let food = foodList.map((food) => {
      return <List key={food.id} {...food} removeState={removeState} />;
    });
    return (
      <div>
        <h2>Food</h2>
        <div>{food}</div>
      </div>
    );
  }
}

export default Food;
