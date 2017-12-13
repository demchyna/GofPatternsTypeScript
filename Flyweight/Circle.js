"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(color) {
        this.color = color;
    }
    Circle.prototype.setX = function (x) {
        this.x = x;
    };
    Circle.prototype.setY = function (y) {
        this.y = y;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.draw = function () {
        console.log("Circle: Draw() [Color : " + this.color + ", x : " + this.x + ", y : " + this.y + ", radius : " + this.radius);
    };
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map