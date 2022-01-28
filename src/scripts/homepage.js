import Base from './base';

class Homepage extends Base {
  constructor() {
    super();
  }

  async initialize() {
    // Dynamic import React component
    await import('./components/ViteCounter');
  }
}

new Homepage();
