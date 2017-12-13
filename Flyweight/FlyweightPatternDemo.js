"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeFactory_1 = require("./ShapeFactory");
var colors = ["Red", "Green", "Blue", "White", "Black"];
function main() {
    for (var i = 0; i < 20; i++) {
        var circle = ShapeFactory_1.ShapeFactory.getCircle(getRandomColor());
        circle.setX(getRandomX());
        circle.setY(getRandomY());
        circle.setRadius(100);
        circle.draw();
    }
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomX() {
    return Math.floor(Math.random() * 100);
}
function getRandomY() {
    return Math.floor(Math.random() * 100);
}
main();
//# sourceMappingURL=FlyweightPatternDemo.js.map