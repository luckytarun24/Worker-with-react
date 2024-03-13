import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const workerRef = useRef(null);
  const [list, setList] = useState([]);
  const [tableNumber, setTableNumber] = useState(2);

  useEffect(() => {
    workerRef.current = new Worker('worker.js');
    workerRef.current.onmessage = (event) => {
      setList(event.data);
    };
  });
  const handleClick = () => {
    workerRef.current.postMessage(tableNumber);
  };
  const handleChange = (event) => {
    setTableNumber(event.target.value);
  };
  return (
    <>
      <div className="title">Web Worker</div>
      {list.map((value) => (
        <div key={value}>{value}</div>
      ))}
      <input type={'number'} value={tableNumber} onChange={handleChange} />
      <button onClick={handleClick}>call worker</button>
    </>
  );
}

export default App;
