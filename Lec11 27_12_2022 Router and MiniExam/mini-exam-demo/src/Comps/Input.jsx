import React from 'react';

export default function Input(props) {
  return (
    <div>
      <input type="text" onChange={(e) => {
        props.sendNum(e.target.value);
      }} />
    </div>
  )
}
