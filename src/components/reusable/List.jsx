import React from 'react';
import FormElement from './FormElement';

function List(props) {
  return (
    <div>
      <p style={{ color: 'purple' }}>{props.name}</p>
      <img width="200px" src={props.url} alt={`...${props.name}`} />
      <br />
      <FormElement
        type="button"
        value="delete"
        onClick={() => {
          props.removeState(props);
        }}
      />
    </div>
  );
}

export default List;
