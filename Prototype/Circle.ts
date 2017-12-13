import {Shape} from "./Shape";

export class Circle extends Shape {

    constructor() {
        super("Circle");
    }

    draw(): void {
        console.log("Inside Circle::draw() method.");
    }

    clone(): Shape {
        return new Circle();
    }
}