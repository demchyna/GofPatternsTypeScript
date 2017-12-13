"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(type) {
        this.type = type;
    }
    Shape.prototype.getType = function () {
        return this.type;
    };
    Shape.prototype.getId = function () {
        return this.id;
    };
    Shape.prototype.setId = function (id) {
        this.id = id;
    };
    return Shape;
}());
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map