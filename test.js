var cp = require('child_process')
  , spawn = cp.spawn
  , server  = spawn('serve', ['.'])
  , phantom = spawn('./vendor/phantomjs', ['phantom.js'])

phantom.on('exit', function (code, signal) {
  var outcome = code == 0 ? 'passed' : 'failed'
  console.log('Qwery tests have %s', outcome)
  server.kill('SIGHUP')
})

