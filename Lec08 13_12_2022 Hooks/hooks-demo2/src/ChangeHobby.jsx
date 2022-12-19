import React, { useContext } from 'react'
import { HobbyContext } from './HobbyContext'

export default function ChangeHobby() {
  const { hobby, changeHobby, setHobby } = useContext(HobbyContext);
  return (
    <div>
      ChangeHobby <br />
      hobyyyy = {hobby} <br /> 
      <button onClick={() => changeHobby()} >cng Hobby</button> <br />
      <button onClick={() => setHobby('flying')} >set Hobby</button>
    </div>
  )
}
