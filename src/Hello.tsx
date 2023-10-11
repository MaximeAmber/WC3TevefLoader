import { useState } from 'react';

export default function Hello() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setCounter((state) => state + 1)}>click me</button>
      {counter}
    </div>
  );
}
