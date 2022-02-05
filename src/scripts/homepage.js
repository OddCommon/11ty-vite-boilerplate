import Base from './base';

class Homepage extends Base {
  constructor() {
    super();
  }

  async initialize() {
    console.log('Homepage');
    // Dynamic import React component
    await import(/* webpackPrefetch: true */ './components/ViteCounter');
  }
}

new Homepage();
