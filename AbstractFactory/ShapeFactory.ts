import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Shape} from "./Shape";
import {AbstractFactory} from "./AbstractFactory";
import {Color} from "./Color";

export class ShapeFactory extends AbstractFactory{
    getShape(shapeType: string): Shape {
        if(shapeType === "CIRCLE") return new Circle();
        else if(shapeType === "RECTANGLE") return new Rectangle();
        else if(shapeType === "SQUARE") return new Square();
        else return null;
    }

    getColor(color: string): Color {
        return undefined;
    }
}