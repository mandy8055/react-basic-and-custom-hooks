import React from 'react';
import { useToggle } from '../hooks';

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle Value</button>
      <button onClick={() => toggleValue(true)}>Make true</button>
      <button onClick={() => toggleValue(false)}>Make false</button>
    </div>
  );
};

export default ToggleComponent;
