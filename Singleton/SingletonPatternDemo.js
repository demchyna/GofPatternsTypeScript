"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleObject_1 = require("./SingleObject");
function main() {
    var singleObject1 = SingleObject_1.SingleObject.getInstance();
    var singleObject2 = SingleObject_1.SingleObject.getInstance();
    singleObject1.setMessage("Hello first Single Object!");
    singleObject2.setMessage("Hello second Single Object!");
    console.log(singleObject1.getMessage());
    console.log(singleObject2.getMessage());
}
main();
//# sourceMappingURL=SingletonPatternDemo.js.map