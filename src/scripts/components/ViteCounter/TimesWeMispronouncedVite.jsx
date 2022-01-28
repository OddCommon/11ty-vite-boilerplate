import React, { useState } from 'react';

const TimesWeMispronouncedVite = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>I've said Vite wrong {count} times today</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
};

export default TimesWeMispronouncedVite;
