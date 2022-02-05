import Base from './base';

class About extends Base {
  constructor() {
    super();
  }

  async initialize() {
    console.log('About');
    await import(/* webpackPrefetch: true */ './components/ViteCounter');
  }
}

new About();
