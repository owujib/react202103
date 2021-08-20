import React from 'react';

function List(props) {
  return (
    <div>
      <p style={{ color: 'purple' }}>{props.name}</p>
      <img width="200px" src={props.url} alt={`...${props.name}`} />
    </div>
  );
}

export default List;
