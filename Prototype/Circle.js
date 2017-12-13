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
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super.call(this, "Circle") || this;
    }
    Circle.prototype.draw = function () {
        console.log("Inside Circle::draw() method.");
    };
    Circle.prototype.clone = function () {
        return new Circle();
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map