"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
function main() {
    var CEO = new Employee_1.Employee("John", "CEO", 30000);
    var headSales = new Employee_1.Employee("Robert", "Head Sales", 20000);
    var headMarketing = new Employee_1.Employee("Michel", "Head Marketing", 20000);
    var clerk1 = new Employee_1.Employee("Laura", "Marketing", 10000);
    var clerk2 = new Employee_1.Employee("Bob", "Marketing", 10000);
    var salesExecutive1 = new Employee_1.Employee("Richard", "Sales", 10000);
    var salesExecutive2 = new Employee_1.Employee("Rob", "Sales", 10000);
    CEO.add(headSales);
    CEO.add(headMarketing);
    headSales.add(salesExecutive1);
    headSales.add(salesExecutive2);
    headMarketing.add(clerk1);
    headMarketing.add(clerk2);
    console.log(CEO.toString());
    for (var _i = 0, _a = CEO.getSubordinates(); _i < _a.length; _i++) {
        var headEmployee = _a[_i];
        console.log(headEmployee.toString());
        for (var _b = 0, _c = headEmployee.getSubordinates(); _b < _c.length; _b++) {
            var employee = _c[_b];
            console.log(employee.toString());
        }
    }
}
main();
//# sourceMappingURL=CompositePatternDemo.js.map