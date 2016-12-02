import Plugin from 'broccoli-plugin';
import FSTree from 'fs-tree-diff'; // eslint-disable-line no-unused-vars
import heimdall from 'heimdalljs'; // eslint-disable-line no-unused-vars
import { default as _logger } from 'heimdalljs-logger';

const logger = _logger('your-broccoli-plugin'); // eslint-disable-line no-unused-vars

export default class YourPlugin extends Plugin {
  constructor(node, options = {}) {
    super([node], {
      name: options.name,
      annotation: options.annotation,
      persistentOutput: true
    });

    // Save references to options you may need later
  }

  build() {
    // The build logic of your plugin goes here
  }
}
