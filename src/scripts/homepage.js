import Base from './base';

class Homepage extends Base {
  constructor() {
    super();
  }

  async initialize() {
    // Dynamic import React component
    // const { init } = await import("./components/ViteCounter");
    // init();
    // console.log("Vite Counter")
  }
}

new Homepage();
