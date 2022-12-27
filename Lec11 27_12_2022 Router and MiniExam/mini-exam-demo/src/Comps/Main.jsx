import React, { useState } from 'react'
import Button from './Button';
import Input from './Input'
import Result from './Result';

export default function Main() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);

  const calculate = () => {
    setResult(num1 + num2);
  }

  return (
    <div>
      Main <br />
      <Input sendNum={(data) => {
        if (data == '') {
          alert('no value');
        }
        setNum1(Number(data))
      }} />
      <Button calculate={calculate} />
      <Input sendNum={(data) => {
        if (data == '') {
          alert('no value');
        }
        setNum2(Number(data))
      }} /> =
      <Result result={result} />
      <br />
    </div>
  )
}
