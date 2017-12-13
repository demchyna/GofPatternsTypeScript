export class Employee {
    private name: string;
    private department: string;
    private salary: number;
    private subordinates: Array<Employee> = [];

    constructor(name: string,department: string, salary: number) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    add(e: Employee): void {
        this.subordinates.push(e);
    }

    remove(e: Employee): void {
        let index = this.subordinates.indexOf(e);
        if (index > -1) {
            this.subordinates.splice(index, 1);
        }
    }

    getSubordinates(): Array<Employee> {
        return this.subordinates;
    }

    toString(): string {
        return ("Employee : [ Name : " + this.name + ", department : " + this.department + ", salary : " + this.salary + " ]");
    }
}