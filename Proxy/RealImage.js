"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RealImage = /** @class */ (function () {
    function RealImage() {
    }
    RealImage.prototype.display = function () {
        console.log("Displaying " + this.fileName);
    };
    RealImage.prototype.loadFromDisk = function (fileName) {
        this.fileName = fileName;
        console.log("Loading " + this.fileName);
    };
    return RealImage;
}());
exports.RealImage = RealImage;
//# sourceMappingURL=RealImage.js.map