var buf = new Buffer(256);
var len = buf.write('123456');

console.log("length:" + len);

var buff1 = new Buffer('hello');
var buff2 = new Buffer('world');
var buff3 = Buffer.concat([buff1, buff2]);

// var json = buff3.toJSON(buff3);
console.log(buff3.toString());


/**
 * api
 * 
 */