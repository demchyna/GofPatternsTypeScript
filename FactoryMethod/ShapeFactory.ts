import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Shape} from "./Shape";

export class ShapeFactory {
    getShape(shapeType: string): Shape {
        if(shapeType === "CIRCLE") return new Circle();
        else if(shapeType === "RECTANGLE") return new Rectangle();
        else if(shapeType === "SQUARE") return new Square();
        else return null;
    }
}