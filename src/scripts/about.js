import Base from './base';

class Page extends Base {
  constructor() {
    super();
  }

  async initialize() {
    console.log('About');
  }
}

BorderlessB2B.page = new Page();
