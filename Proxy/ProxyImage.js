"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RealImage_1 = require("./RealImage");
var ProxyImage = /** @class */ (function () {
    function ProxyImage(fileName) {
        this.fileName = fileName;
    }
    ProxyImage.prototype.display = function () {
        if (this.realImage == null) {
            this.realImage = new RealImage_1.RealImage();
            this.realImage.loadFromDisk(this.fileName);
        }
        this.realImage.display();
    };
    return ProxyImage;
}());
exports.ProxyImage = ProxyImage;
//# sourceMappingURL=ProxyImage.js.map