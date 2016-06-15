console.log(__filename);
console.log(__dirname);

function sayHello(){
    console.log('hello');
}

var t = setTimeout(sayHello, 2000);

clearTimeout(t);
/**
 * api
 * setInterval(cb, ms)
 * clearInterval(t)
 * 
 * console.time(label)
 * console.timeEnd(label)
 *
 */
process.on('exit', function(code){
    setTimeout(function() {
        console.log('should not excute');
    }, 0);

    console.log('退出码为:', code);
});

console.log("程序执行结束");

process.argv.forEach(function(val, index, array){
    console.log(index + ":" + val);
});

console.log(process.execPath);
console.log(process.platform);


console.log("当前工作目录:" + process.cwd())