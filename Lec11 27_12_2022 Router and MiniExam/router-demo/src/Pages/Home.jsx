import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const btnGo2User = () => {

    let userObj = {
      userId: 77,
      userName: 'avi'
    };

    navigate('user', { state: userObj });
  }

  return (
    <div>
      Home <br />
      <button onClick={btnGo2User} >go2User</button>
    </div>
  );
}
