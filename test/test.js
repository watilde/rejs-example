var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var opt = {
    encoding: 'utf8'
};
var path = {
  target: path.resolve(__dirname + '/../dist/XmasPresent.js'),
  fixture1: path.resolve(__dirname + '/fixture1.js'),
  fixture2: path.resolve(__dirname + '/fixture2.js')
};

var target = fs.readFileSync(path.target, opt);
var fixture1 = fs.readFileSync(path.fixture1, opt);
var fixture2 = fs.readFileSync(path.fixture2, opt);

// Test failure
if (target !== fixture1 && target !== fixture2) {
  console.error('See: diff dist/XmasPresent.css test/fixture[1-2].js');
  process.exit(1);
  return;
}

// All tests passed
console.log('All tests passed');
process.exit(0);
