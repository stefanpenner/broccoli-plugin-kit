# broccoli-plugin-kit

[![Build Status](https://travis-ci.org/stefanpenner/broccoli-plugin-kit.svg?branch=master)](https://travis-ci.org/stefanpenner/broccoli-plugin-kit)
[![Build status](https://ci.appveyor.com/api/projects/status/fm378sxkcd3uf733/branch/master?svg=true)](https://ci.appveyor.com/project/embercli/broccoli-plugin-kit/branch/master)

This repo is intended to serve as a starting point for developing [Broccoli plugins](https://github.com/broccolijs/broccoli#plugins).

## Setup

To get started you can create a plugin by running:

```bash
node ./bin/create-plugin.js <plugin-name>
```

This will copy the contents of `blueprint` into a new directory with the given `plugin-name` as a sibling to this repo. If a directory already exists in that location, an error will be thrown. The script will also install dependencies by using [Yarn](https://yarnpkg.com/) and do an initial Git commit so that you can focus on development right from the start!

After the script, you can run:

```bash
cd ../plugin-name
npm test
```

And see that you have a working plugin with tests passing!
