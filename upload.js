var io = require('socket.io-client');
var ss = require('socket.io-stream');
var fs = require('fs');

var socket = io.connect('http://10.100.64.136:8080/user');
var filename = './a.jpg';


module.exports = function (file) {

    var stream = ss.createStream();
    console.log('file upload: ' + file)
    ss(socket).emit('profile-image', stream, {name: file});
    fs.createReadStream(file).pipe(stream);
}

