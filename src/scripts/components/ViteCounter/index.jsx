import React from 'react';
import ReactDOM from 'react-dom';

import TimesWeMispronouncedVite from './TimesWeMispronouncedVite';

export const ViteCounter = () => {
  return <TimesWeMispronouncedVite />;
};

const componentRoot = document.getElementById('dynamic-vite-counter');
ReactDOM.render(React.createElement(ViteCounter), componentRoot);
