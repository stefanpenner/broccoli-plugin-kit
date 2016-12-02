import lint from 'mocha-eslint';

const paths = [
  'src/**/*.js',
  'tests/**/*.js'
];

lint(paths);
