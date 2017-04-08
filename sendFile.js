
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
  .on('add', path => {
      log(`File ${path} has been added`)
  })
  .on('change', path => {
      log(`File ${path} has been changed`)
      upload(path);
  })
  .on('unlink', path => log(`File ${path} has been removed`))
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'));



