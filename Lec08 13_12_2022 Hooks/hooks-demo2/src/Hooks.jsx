import React, { useEffect, useState } from 'react';

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState("...");

  useEffect(() => {
    console.log('useEffect', count + " , " + txt);
  });

  useEffect(() => {
    console.log('useEffect txt=', txt);
  }, [txt]);

  useEffect(() => {
    console.log('[count]');
    if (count === 7) {
      console.log(':)');
    }
  }, [count]);

  useEffect(() => {
    console.log('did mount!');
  
    return () => {
      console.log('will unmount');  
    }
  }, [])
  

  return (
    <div>
      Hooks <br />
      <button onClick={() => {
        setCount(prevC => prevC + 1);
      }}>Add Count</button> <br />
      count={count} <br />
      <button onClick={() => setTxt('mashu aher3...')}>txt Sivan</button> <br />
      txt={txt}
    </div>
  )
}
