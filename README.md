# compass-version

[![NPM version](https://img.shields.io/npm/v/compass-version.svg)](https://www.npmjs.com/package/compass-version)
[![Build Status](https://travis-ci.org/shinnn/compass-version.svg?branch=master)](https://travis-ci.org/shinnn/compass-version)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/compass-version.svg)](https://coveralls.io/r/shinnn/compass-version)
[![Dependency Status](https://david-dm.org/shinnn/compass-version.svg)](https://david-dm.org/shinnn/compass-version)
[![devDependency Status](https://david-dm.org/shinnn/compass-version/dev-status.svg)](https://david-dm.org/shinnn/compass-version#info=devDependencies)

A [Node](https://nodejs.org/) module to get the version of a [`compass`](http://compass-style.org/help/documentation/command-line/) binary in [semver](http://semver.org/) format

```javascript
const compassVersion = require('compass-version');

compassVersion().then(version => {
  version; //=> '1.0.3'
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install compass-version
```

## API

```javascript
const compassVersion = require('compass-version');
```

### compassVersion([*options*])

*options*: `Object` (directly passed to [`child_process#spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options))  
Return: `Object` ([Promise](https://promisesaplus.com/) instance)

It detects the installed [Compass](http://compass-style.org/) version in `compass version` command.

When it finish resolving the version, it will be [fulfilled](https://promisesaplus.com/#point-26) with a `String` of the [semver](https://github.com/npm/node-semver)-valid version number.

When it fails, it will be [rejected](https://promisesaplus.com/#point-30) with an error object.

#### options

In addition to `child_process#spawn`, you can set `bundleExec` option:

##### options.bundleExec

Type: `Boolean`  
Default: `false`

Detect the version in `bundle exec compass version`, instead of `compass version`.

```javascript
const compassVersion = require('compass-version');

compassVersion({bundleExec: true}).then(version => {
  version; //=> '1.0.3'
});
```

## Related project

* [compass-version-callback](https://github.com/shinnn/compass-version-callback) ([callback](http://thenodeway.io/posts/understanding-error-first-callbacks/)-style version)

## License

[The Unlicense](./LICENSE)
