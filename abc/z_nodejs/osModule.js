const os = require('os');

console.log('Operating System Information:');
console.log('OS Type:', os.type());
console.log('OS Version:', os.release());
console.log('CPU Model:', os.cpus()[0].model);
console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());

// Operating System Information:
// OS Type: Windows_NT
// OS Version: 10.0.19045
// CPU Model: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz
// Platform: win32
// CPU Architecture: x64
