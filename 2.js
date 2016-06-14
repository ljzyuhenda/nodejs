var events = require('events');
var eventsEmitter = new events.EventEmitter();

var connectionHandler = function connected(){
    console.log('链接成功');
    
    eventsEmitter.emit('data_received');
};

var receiveHandler = function received(){
    console.log('接收成功');
}

eventsEmitter.on('connection', connectionHandler);
eventsEmitter.on('data_received', receiveHandler);

eventsEmitter.emit('connection');

console.log('程序执行结束');