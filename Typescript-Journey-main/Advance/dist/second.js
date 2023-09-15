"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    detail() {
        console.log(this.cameraMode, " ", this.filter, " ", this.burst);
    }
    get check() {
        return "ok";
    }
}
const obj = new Instagram("selfie", "dark", 200);
obj.check;
obj.detail();
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
const obj1 = new Youtube("selfie", "dark", 200, "low");
obj1.createStory;
