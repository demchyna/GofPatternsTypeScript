import {Shape} from "./Shape";

export class Rectangle extends Shape {

    constructor() {
        super("Rectangle");
    }

    draw(): void {
        console.log("Inside Rectangle::draw() method.");
    }

    clone(): Shape {
        return new Rectangle();
    }
}