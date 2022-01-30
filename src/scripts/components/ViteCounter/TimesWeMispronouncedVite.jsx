import React, { useState } from 'react';

const TimesWeMispronouncedVite = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <p>I've said Vite wrong {count} times today</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
};

export default TimesWeMispronouncedVite;
