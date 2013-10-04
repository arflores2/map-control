var sys = require('sys'),
    exec = require('child_process').exec,
    port = process.argv[2],
    ip = process.argv[3];

console.log(port, ip);

exec('rackup config.ru -p ' + port + ' -o ' + ip, function(err, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    
    if(err) {
        console.log('exec error: ' + err);
    }
});