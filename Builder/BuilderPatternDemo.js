"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuilderPattern_1 = require("./BuilderPattern");
function main() {
    var user = new BuilderPattern_1.UserBuilder("Vasyl")
        .age(24)
        .phone("0845674195")
        .address("Shevchenka")
        .build();
    console.log(user.getName() + " " + user.getAge() + " " + user.getPhone() + " " + user.getAddress());
}
main();
//# sourceMappingURL=BuilderPatternDemo.js.map