"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NameRepository_1 = require("./NameRepository");
function main() {
    var namesRepository = new NameRepository_1.NameRepository();
    for (var iterator = namesRepository.getIterator(); iterator.hasNext();) {
        var name_1 = iterator.next();
        console.log("Name : " + name_1);
    }
}
main();
//# sourceMappingURL=IteratorPatternDemo.js.map