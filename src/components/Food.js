import React from 'react';
import List from './reusable/List';

class Food extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { foodList } = this.props;
    let food = foodList.map((food) => {
      return <List {...food} />;
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
