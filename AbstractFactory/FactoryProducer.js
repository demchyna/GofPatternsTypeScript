"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeFactory_1 = require("./ShapeFactory");
var ColorFactory_1 = require("./ColorFactory");
var FactoryProducer = /** @class */ (function () {
    function FactoryProducer() {
    }
    FactoryProducer.getFactory = function (choice) {
        if (choice === "SHAPE")
            return new ShapeFactory_1.ShapeFactory();
        else if (choice === "COLOR")
            return new ColorFactory_1.ColorFactory();
        else
            return null;
    };
    return FactoryProducer;
}());
exports.FactoryProducer = FactoryProducer;
//# sourceMappingURL=FactoryProducer.js.map