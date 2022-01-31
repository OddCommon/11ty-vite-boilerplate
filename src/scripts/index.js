import Base from './base';

class OddCommon extends Base {
  constructor() {
    super();
  }

  async initialize() {
    console.log('OddCommon 11ty + Vite');
  }
}

// Kick'r off
window.OddCommon = new OddCommon();
