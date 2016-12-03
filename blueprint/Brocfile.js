var babel = require('broccoli-babel-transpiler');
var merge = require('broccoli-merge-trees');
var lint = require('broccoli-lint-eslint');
var mv = require('broccoli-stew').mv;

module.exports = merge([
  mv(babel(lint('tests')), 'tests'),
  babel(lint('src')),
]);
