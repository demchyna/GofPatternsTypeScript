"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.getCircle = function (color) {
        var circle = this.circleMap[color];
        if (circle == null) {
            circle = new Circle_1.Circle(color);
            this.circleMap[color] = circle;
            console.log("Creating circle of color : " + color);
        }
        return circle;
    };
    ShapeFactory.circleMap = {};
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;
//# sourceMappingURL=ShapeFactory.js.map