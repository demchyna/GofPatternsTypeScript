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
var Game_1 = require("./Game");
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cricket.prototype.initialize = function () {
        console.log("Cricket Game Initialized! Start playing.");
    };
    Cricket.prototype.startPlay = function () {
        console.log("Cricket Game Started. Enjoy the game!");
    };
    Cricket.prototype.endPlay = function () {
        console.log("Cricket Game Finished!");
    };
    return Cricket;
}(Game_1.Game));
exports.Cricket = Cricket;
//# sourceMappingURL=Cricket.js.map