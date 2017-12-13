"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FactoryProducer_1 = require("./FactoryProducer");
function main() {
    var shapeFactory = FactoryProducer_1.FactoryProducer.getFactory("SHAPE");
    var shape1 = shapeFactory.getShape("CIRCLE");
    shape1.draw();
    var shape2 = shapeFactory.getShape("RECTANGLE");
    shape2.draw();
    var shape3 = shapeFactory.getShape("SQUARE");
    shape3.draw();
    var colorFactory = FactoryProducer_1.FactoryProducer.getFactory("COLOR");
    var color1 = colorFactory.getColor("RED");
    color1.fill();
    var color2 = colorFactory.getColor("GREEN");
    color2.fill();
    var color3 = colorFactory.getColor("BLUE");
    color3.fill();
}
main();
//# sourceMappingURL=AbstractFactoryPatternDemo.js.map