import {Circle} from "./Circle";
import {Square} from "./Square";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";

export class ShapeCache {

    private static shapeMap: { [id: number]: Shape; } = {};

    static getShape(shapeId: number): Shape {
        let cachedShape = this.shapeMap[shapeId];
        return cachedShape.clone();
    }

    static loadCache(): void {
        let circle = new Circle();
        circle.setId(1);
        this.shapeMap[circle.getId()] = circle;

        let square = new Square();
        square.setId(2);
        this.shapeMap[square.getId()] = square;

        let rectangle = new Rectangle();
        rectangle.setId(3);
        this.shapeMap[rectangle.getId()] = rectangle;
    }

}