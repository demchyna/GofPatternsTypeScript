"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, department, salary) {
        this.subordinates = [];
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    Employee.prototype.add = function (e) {
        this.subordinates.push(e);
    };
    Employee.prototype.remove = function (e) {
        var index = this.subordinates.indexOf(e);
        if (index > -1) {
            this.subordinates.splice(index, 1);
        }
    };
    Employee.prototype.getSubordinates = function () {
        return this.subordinates;
    };
    Employee.prototype.toString = function () {
        return ("Employee : [ Name : " + this.name + ", department : " + this.department + ", salary : " + this.salary + " ]");
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map