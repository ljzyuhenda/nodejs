var events = require('events');
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('some_event', function(){
    console.log('some_event时间触发')
});

setTimeout(function() {
    eventsEmitter.emit('some_event');
}, 1000);

console.log('程序执行结束')

/**
 * api
 * addListener(event listener)
 * on(event, listener)
 * once(event, listener)
 * remove(event, listener)
 * removeAllListener([event])
 * listeners(event)
 * emit(event, [arg]...)
 * listenerCount(emiter, event)
 */
