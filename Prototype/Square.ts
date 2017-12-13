import {Shape} from "./Shape";

export class Square extends Shape {

    constructor() {
        super("Square");
    }

    draw(): void {
        console.log("Inside Square::draw() method.");
    }

    clone(): Shape {
        return new Square();
    }
}