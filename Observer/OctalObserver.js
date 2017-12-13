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
var OctalObserver = /** @class */ (function (_super) {
    __extends(OctalObserver, _super);
    function OctalObserver(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.attach(_this);
        return _this;
    }
    OctalObserver.prototype.update = function () {
        console.log("Octal String: " + this.subject.getState().toString(8));
    };
    return OctalObserver;
}(Observer_1.Observer));
exports.OctalObserver = OctalObserver;
//# sourceMappingURL=OctalObserver.js.map