"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("./Subject");
var HexaObserver_1 = require("./HexaObserver");
var OctalObserver_1 = require("./OctalObserver");
var BinaryObserver_1 = require("./BinaryObserver");
function main() {
    var subject = new Subject_1.Subject();
    new HexaObserver_1.HexaObserver(subject);
    new OctalObserver_1.OctalObserver(subject);
    new BinaryObserver_1.BinaryObserver(subject);
    console.log("First state change: 15");
    subject.setState(15);
    console.log("Second state change: 10");
    subject.setState(10);
}
main();
//# sourceMappingURL=ObserverPatternDemo.js.map