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
var AbstractLogger_1 = require("./AbstractLogger");
var ConsoleLogger = /** @class */ (function (_super) {
    __extends(ConsoleLogger, _super);
    function ConsoleLogger(level) {
        var _this = _super.call(this) || this;
        _this.level = level;
        return _this;
    }
    ConsoleLogger.prototype.write = function (message) {
        console.log("Standard Console::Logger: " + message);
    };
    return ConsoleLogger;
}(AbstractLogger_1.AbstractLogger));
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map