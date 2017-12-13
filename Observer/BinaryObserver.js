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
var Observer_1 = require("./Observer");
var BinaryObserver = /** @class */ (function (_super) {
    __extends(BinaryObserver, _super);
    function BinaryObserver(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.attach(_this);
        return _this;
    }
    BinaryObserver.prototype.update = function () {
        console.log("Binary String: " + this.subject.getState().toString(2));
    };
    return BinaryObserver;
}(Observer_1.Observer));
exports.BinaryObserver = BinaryObserver;
//# sourceMappingURL=BinaryObserver.js.map