import 'es6-promise'; // for regenerator
import 'regenerator-runtime/runtime'; // only for tests, because async/await needs it

import YourPlugin from '../';
import broccoli from 'broccoli';
import chai from 'chai';
import chaiFiles from 'chai-files';
import fixture from 'fixturify';
import fs from 'fs-extra';
import walkSync from 'walk-sync';

const { expect } = chai;
const { file } = chaiFiles;

chai.config.truncateThreshold = 1000;
chai.use(chaiFiles);

describe('YourPlugin', function() {
  const input = 'tmp/fixture-input';
  let node, pipeline;

  beforeEach(function() {
    fs.mkdirpSync(input);
    fixture.writeSync(input, {
      // Your fixture directory structure
    });

    node = new YourPlugin(input, {
      // Options
    });

    pipeline = new broccoli.Builder(node);
  });

  afterEach(function() {
    fs.removeSync(input);
    return pipeline.cleanup();
  });

  describe("build", function() {
    it('simple', async function() {
      const { directory } = await pipeline.build();

      // Use expect + walkSync/file to verify the output of your build
    });
  });

  describe('rebuild', function() {
    it('is stable on idempotent rebuild', async function() {
      let { directory } = await pipeline.build();

      let beforeStat = fs.statSync(directory);

      // Some filesystems dont have lower then 1s mtime resolution
      await new Promise(resolve => setTimeout(resolve, 1000));
      await pipeline.build();

      let afterStat = fs.statSync(directory);

      expect(beforeStat).to.deep.equal(afterStat);
    });
  });
});
