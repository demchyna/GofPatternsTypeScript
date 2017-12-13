"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
var ShapeCache = /** @class */ (function () {
    function ShapeCache() {
    }
    ShapeCache.getShape = function (shapeId) {
        var cachedShape = this.shapeMap[shapeId];
        return cachedShape.clone();
    };
    ShapeCache.loadCache = function () {
        var circle = new Circle_1.Circle();
        circle.setId(1);
        this.shapeMap[circle.getId()] = circle;
        var square = new Square_1.Square();
        square.setId(2);
        this.shapeMap[square.getId()] = square;
        var rectangle = new Rectangle_1.Rectangle();
        rectangle.setId(3);
        this.shapeMap[rectangle.getId()] = rectangle;
    };
    ShapeCache.shapeMap = {};
    return ShapeCache;
}());
exports.ShapeCache = ShapeCache;
//# sourceMappingURL=ShapeCache.js.map