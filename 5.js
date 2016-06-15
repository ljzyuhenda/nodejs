/**
 * stream
 * readable
 * writable
 * duplex ->复式的，两部分的
 * transform
 * ========event
 * data
 * end
 * error
 * finish
 */

var fs = require('fs');
var data = '';
var readtimes = 0;
var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
    readtimes++;
    data += chunk;
});

readerStream.on('end', function () {
    console.log("times:" + readtimes);
    console.log(data);
});

readerStream.on('error', function () {
    console.log(err.stack);
});

console.log('程序执行完毕');

var writeStream = fs.createWriteStream('output.txt');
var data1 = 'output';

writeStream.write(data1, 'utf-8');
writeStream.end();

writeStream.on('finish', function(){
    console.log('写入完成');
});

writeStream.on('error', function(error){
    console.log(err.stack);
});

console.log('写入完毕');