import React, { useState } from 'react'

interface CounterProps {
  startNumber : number;
}

export default function CounterComp(props: CounterProps) {
  const {startNumber} = props;

  const [inputNumber, setInputNumber] = useState(0);

  const [array, setArray] = useState([
    {
      id: 'id',
      text: 'text'
    },
    {
      id: 1,
      text: 'one'
    },
    {
      id: 2,
      text: 'two'
    }
  ])

  return (
    <div>
      <h1>Counter 컴포넌트</h1>
      <p>props 값으로 전달된 처음 값 : {startNumber}</p>
      <p>props 값을 받아와 값을 수정하는 state 값 : {inputNumber}</p>
      <label>수정할 숫자</label>
      <input type="number" onChange={(e)=>{setInputNumber(parseInt(e.target.value))}}/>

      <hr />

      <ul>
        {
          array.map((obj)=>(
            <li key={obj.id}>{obj.id} : {obj.text}</li>
          ))
        }
      </ul>
    </div>
  )
}
