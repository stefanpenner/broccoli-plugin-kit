import Plugin from 'broccoli-plugin';
import FSTree from 'fs-tree-diff';
import heimdall from 'heimdalljs';
import { default as _logger } from 'heimdalljs-logger';

const logger = _logger('your-broccoli-plugin');

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
