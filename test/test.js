'use strong';

const {delimiter} = require('path');

const compassVersion = require('..');
const test = require('tape');

test('compassVersion()', t => {
  t.plan(7);

  const originalPATH = process.env.PATH;
  process.env.PATH = process.cwd();

  t.equal(compassVersion.name, 'compassVersion', 'should have a function name.');

  compassVersion().then(t.fail, err => {
    t.equal(err.code, 'ENOENT', 'should fail when it cannot find the binary.');

    process.env.PATH = `${__dirname}${delimiter}${originalPATH}`;

    compassVersion().then(version => {
      t.equal(version, '999.0.0', 'should detect the version in `compass` command.');
    });

    compassVersion({bundleExec: true}).then(version => {
      t.equal(version, '9999.0.0', 'should detect the version in `bundle exec compass` command.');
    }).catch(t.fail);
  }).catch(t.fail);

  compassVersion({stdio: 123}).then(t.fail, err => {
    t.equal(err.message, 'Incorrect value of stdio option: 123', 'should pass options to child_process#spawn.');
  }).catch(t.fail);

  compassVersion(true).then(t.fail, err => {
    t.equal(err.name, 'TypeError', 'should fail when it takes a non-object argument.');
  }).catch(t.fail);

  compassVersion(null).then(t.fail, err => {
    t.equal(err.name, 'TypeError', 'should fail when it takes an falsy argument.');
  }).catch(t.fail);
});
