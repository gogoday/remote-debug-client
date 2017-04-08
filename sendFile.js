
const chokidar = require('chokidar');

const upload = require('./upload.js');




// Initialize watcher.
var watcher = chokidar.watch('.', {
  ignored: /(^|[\/\\])\../,
  cwd: '.',
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);
// Add event listeners.
watcher
  .on('change', path => {
      log(`File ${path} has been changed`)
      path = path.replace(/\\/, '/');
      console.log(path);
      
      upload(path);
  })



