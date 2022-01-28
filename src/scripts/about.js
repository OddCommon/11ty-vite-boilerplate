import Base from './base';

class About extends Base {
  constructor() {
    super();
  }

  async initialize() {
    console.log('About');
  }
}

new About();
