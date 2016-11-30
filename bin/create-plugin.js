var fs = require('fs');
var path = require('path');
var broccoli = require('broccoli');
var execSync = require('child_process').execSync;
var copyDereferenceSync = require('copy-dereference').sync;
var replaceBlueprint = require('./utils/replace-blueprint');

var pluginName = process.argv[2];

if (!pluginName) {
  throw new Error('You must specify a name for the plugin you\'re creating. Try using `node ./bin/create-plugin.js pluginName`.');
}

var destPath = path.resolve(__dirname, '../..', pluginName);

if (fs.existsSync(destPath)) {
  throw new Error('The path "' + destPath + '" already exists. Try using a different plugin name.');
}

var replacedBlueprint = replaceBlueprint(pluginName);
var pipeline = new broccoli.Builder(replacedBlueprint);

console.info('Copying blueprint to: ' + destPath);
pipeline.build()
  .then(function(result) {
    copyDereferenceSync(result.directory, destPath);

    process.chdir(destPath);
    console.info('Installing dependencies');
    execSync('yarn install || npm install');
  })
  .finally(function () {
    return pipeline.cleanup();
  })
  .then(function () {
    process.exit(0);
  })
  .catch(function (err) {
    if (err.file) {
      console.error('File: ' + err.file);
    }

    console.error(err.stack);
    console.error('\nPlugin creation failed');

    process.exit(1);
  });