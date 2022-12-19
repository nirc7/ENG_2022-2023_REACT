import React, { useContext } from 'react';
import { HobbyContext } from './HobbyContext';

export default function ShowFromContext() {
  const { hobby } = useContext(HobbyContext);

  return (
    <div>
      ShowFromContext <br />
      hobby = {hobby}
    </div>
  )
}
