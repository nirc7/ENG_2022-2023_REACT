import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button onClick={()=> props.calculate()} >+</button>
    </div>
  );
}
