import React, { createContext, useState } from 'react'

export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
  const [hobby, setHobby] = useState('tennis');

  const changeHobby = () => {
    setHobby('pinpong');
  }

  return (
    <HobbyContext.Provider value={{ hobby, changeHobby, setHobby }}>
      {props.children}
    </HobbyContext.Provider>
  )
}
