var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var opt = {
    encoding: 'utf8'
};
var path = {
  target: path.resolve(__dirname + '/../dist/XmasPresent.js'),
  fixture: path.resolve(__dirname + '/fixture.js')
};

var target = fs.readFileSync(path.target, opt);
var fixture = fs.readFileSync(path.fixture, opt);

// Test failure
if (target !== fixture) {
  exec('diff ' + path.target + ' ' + path.fixture,
    function (err, stdout, stderr) {
      console.error('See: diff test/fixture.js dist/XmasPresent.css');
      process.stdout.write(stdout);
      process.exit(1);
    }
  );
  return;
}

// All tests passed
console.log('All tests passed');
process.exit(0);
