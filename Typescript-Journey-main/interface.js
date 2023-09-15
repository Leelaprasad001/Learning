"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//while assigning values it checks for parameters and their values
var leela = { dbId: 22, email: "h@h.com", userId: 2211, role: "admin", githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
leela.email = "h@hc.com";
console.log(leela);
