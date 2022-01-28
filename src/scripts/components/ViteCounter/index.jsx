import React from 'react';
import ReactDOM from 'react-dom';

import TimesWeMispronouncedVite from './TimesWeMispronouncedVite';

export const ViteCounter = () => {
  return <TimesWeMispronouncedVite />;
};

export const init = () => {
  const componentRoot = document.getElementById('vite-counter');
  ReactDOM.render(React.createElement(ViteCounter), componentRoot);
};
