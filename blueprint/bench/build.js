import fs from 'fs-extra';
import path from 'path';
import fixturify from 'fixturify';
import { Builder } from 'broccoli';
import YourPlugin from '../';

export default {
  setup() {
    this.fixtureDir = path.join('tmp', 'build-benchmark');
    this.fixture = {
      'a.js': `console.log('Hello world');`
    };

    fs.mkdirpSync(this.fixtureDir);
    fixturify.writeSync(this.fixtureDir, this.fixture);
  },

  beforeScenario() {
    let node = new YourPlugin(this.fixtureDir);
    this.builder = new Builder(node);
  },

  scenario() {
    return this.builder.build();
  },

  afterScenario() {
    return this.builder.cleanup();
  },

  cleanup() {
    fs.removeSync(this.fixtureDir);
  }
};
