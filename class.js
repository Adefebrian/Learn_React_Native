console.log(
    "=============================| PEKAN 2 - TUGAS 7 |============================="
);
console.log("");
console.log(
    "=============================# Soal No. 1 Animal Class #============================="
);
console.log("");
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
var sheep = new Animal("shaun");
console.log(sheep.legs);
console.log(sheep.cold_blooded);
class Frog extends Animal {
    constructor(name) {
        super(name);
        super.legs = 2;
        this.lompat = "hop hop";
    }
    jump() {
        return this.lompat;
    }
}
class Ape extends Animal {
    constructor(name) {
        super(name);
        this.suara = "Auooo";
    }
    yell() {
        return this.suara;
    }
}
console.log("");
console.log(
    "=============================# Soal No. 2 Function to Class #============================="
);
console.log("");
class Clock {
    constructor({
        template
    }) {
        this.template = template;
        var timer;
        this.timer = timer;
    }
    render() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = "0" + hours;
        var mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;
        var secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;
        var output = String(this.template).replace("h", hours).replace("m", mins).replace("s", secs);
        console.log(output);
    }
    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
    stop() {
        clearInterval(this.timer);
    }
}
var clock = new Clock({
    template: "h:m:s",
});
clock.start();