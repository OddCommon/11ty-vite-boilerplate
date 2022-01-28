import Base from './base';

class BorderlessB2B extends Base {
  constructor() {
    super();
  }

  async initialize() {
    console.log('Borderless B2B Site');
  }
}

// Kick'r off
window.BorderlessB2B = new BorderlessB2B();
