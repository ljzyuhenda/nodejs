function Hello() {
    var name;
    this.setName = function (namepara) {
        name = namepara;
    };

    this.sayHello = function () {
        console.log('hello ' + name);
    };
};

module.exports = Hello;