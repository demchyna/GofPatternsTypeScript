"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProxyImage_1 = require("./ProxyImage");
function main() {
    var image = new ProxyImage_1.ProxyImage("test_01.dat");
    //image will be loaded from disk
    image.display();
    //image will not be loaded from disk
    image.display();
}
main();
//# sourceMappingURL=ProxyPatternDemo.js.map