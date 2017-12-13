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
var Shape_1 = require("./Shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super.call(this, "Rectangle") || this;
    }
    Rectangle.prototype.draw = function () {
        console.log("Inside Rectangle::draw() method.");
    };
    Rectangle.prototype.clone = function () {
        return new Rectangle();
    };
    return Rectangle;
}(Shape_1.Shape));
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map