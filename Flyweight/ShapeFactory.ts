import {Circle} from "./Circle";
import {Shape} from "./Shape";

export class ShapeFactory {
    private static circleMap: { [color: string]: Shape; } = {};

    static getCircle(color: string): Shape {
        let circle = this.circleMap[color];

        if (circle == null) {
            circle = new Circle(color);
            this.circleMap[color] = circle;
            console.log("Creating circle of color : " + color);
        }
        return circle;
    }
}