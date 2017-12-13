"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleObject = /** @class */ (function () {
    function SingleObject() {
    }
    SingleObject.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SingleObject();
        }
        return this.instance;
    };
    SingleObject.prototype.setMessage = function (message) {
        this.message = message;
    };
    SingleObject.prototype.getMessage = function () {
        return this.message;
    };
    SingleObject.instance = null;
    return SingleObject;
}());
exports.SingleObject = SingleObject;
//# sourceMappingURL=SingleObject.js.map