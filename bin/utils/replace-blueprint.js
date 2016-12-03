var path = require('path');
var pascalCase = require('pascal-case');
var replace = require('broccoli-string-replace');

var blueprintPath = path.resolve(__dirname, '../../blueprint');

/**
 * Simple function that returns a Broccoli node representing the plugin
 * blueprint with the name of the plugin replaced.
 *
 * @private
 * @param {String} name
 * @return {Broccoli.Node}
 */
module.exports = function replaceBlueprint(name) {
  return replace(blueprintPath, {
    files: [
      'src/index.js',
      'tests/index.js',
      'package.json',
      'README.md'
    ],
    patterns: [
      {
        match: /your-broccoli-plugin/g,
        replacement: name
      },
      {
        match: /YourPlugin/g,
        replacement: pascalCase(name)
      }
    ]
  });
}