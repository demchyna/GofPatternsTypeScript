"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeCache_1 = require("./ShapeCache");
function main() {
    ShapeCache_1.ShapeCache.loadCache();
    var clonedShape1 = ShapeCache_1.ShapeCache.getShape(1);
    console.log("Shape : " + clonedShape1.getType());
    clonedShape1.draw();
    var clonedShape2 = ShapeCache_1.ShapeCache.getShape(2);
    console.log("Shape : " + clonedShape2.getType());
    clonedShape2.draw();
    var clonedShape3 = ShapeCache_1.ShapeCache.getShape(3);
    console.log("Shape : " + clonedShape3.getType());
    clonedShape3.draw();
}
main();
//# sourceMappingURL=PrototypePatternDemo.js.map