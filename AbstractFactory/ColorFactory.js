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
var AbstractFactory_1 = require("./AbstractFactory");
var Red_1 = require("./Red");
var Green_1 = require("./Green");
var Blue_1 = require("./Blue");
var ColorFactory = /** @class */ (function (_super) {
    __extends(ColorFactory, _super);
    function ColorFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorFactory.prototype.getShape = function (shapeType) {
        return undefined;
    };
    ColorFactory.prototype.getColor = function (color) {
        if (color === "RED")
            return new Red_1.Red();
        else if (color === "GREEN")
            return new Green_1.Green();
        else if (color === "BLUE")
            return new Blue_1.Blue();
        else
            return null;
    };
    return ColorFactory;
}(AbstractFactory_1.AbstractFactory));
exports.ColorFactory = ColorFactory;
//# sourceMappingURL=ColorFactory.js.map