"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeFactory_1 = require("./ShapeFactory");
function main() {
    var shapeFactory = new ShapeFactory_1.ShapeFactory();
    var shape1 = shapeFactory.getShape("CIRCLE");
    shape1.draw();
    var shape2 = shapeFactory.getShape("RECTANGLE");
    shape2.draw();
    var shape3 = shapeFactory.getShape("SQUARE");
    shape3.draw();
}
main();
//# sourceMappingURL=FactoryPatternDemo.js.map