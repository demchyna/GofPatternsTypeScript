"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var ShapeMaker = /** @class */ (function () {
    function ShapeMaker() {
        this.circle = new Circle_1.Circle();
        this.rectangle = new Rectangle_1.Rectangle();
        this.square = new Square_1.Square();
    }
    ShapeMaker.prototype.drawCircle = function () {
        this.circle.draw();
    };
    ShapeMaker.prototype.drawRectangle = function () {
        this.rectangle.draw();
    };
    ShapeMaker.prototype.drawSquare = function () {
        this.square.draw();
    };
    return ShapeMaker;
}());
exports.ShapeMaker = ShapeMaker;
//# sourceMappingURL=ShapeMaker.js.map