"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationAdd_1 = require("./OperationAdd");
var Context_1 = require("./Context");
var OperationSubstract_1 = require("./OperationSubstract");
var OperationMultiply_1 = require("./OperationMultiply");
function main() {
    var context = new Context_1.Context(new OperationAdd_1.OperationAdd());
    console.log("10 + 5 = " + context.executeStrategy(10, 5));
    context = new Context_1.Context(new OperationSubstract_1.OperationSubstract());
    console.log("10 - 5 = " + context.executeStrategy(10, 5));
    context = new Context_1.Context(new OperationMultiply_1.OperationMultiply());
    console.log("10 * 5 = " + context.executeStrategy(10, 5));
}
main();
//# sourceMappingURL=StrategyPatternDemo.js.map