"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var AbstractFactory_1 = require("./AbstractFactory");
var ShapeFactory = /** @class */ (function (_super) {
    __extends(ShapeFactory, _super);
    function ShapeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeFactory.prototype.getShape = function (shapeType) {
        if (shapeType === "CIRCLE")
            return new Circle_1.Circle();
        else if (shapeType === "RECTANGLE")
            return new Rectangle_1.Rectangle();
        else if (shapeType === "SQUARE")
            return new Square_1.Square();
        else
            return null;
    };
    ShapeFactory.prototype.getColor = function (color) {
        return undefined;
    };
    return ShapeFactory;
}(AbstractFactory_1.AbstractFactory));
exports.ShapeFactory = ShapeFactory;
//# sourceMappingURL=ShapeFactory.js.map