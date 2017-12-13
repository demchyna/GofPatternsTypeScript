import {ShapeFactory} from "./ShapeFactory";

function main(): void {

    let shapeFactory = new ShapeFactory();

    let shape1 = shapeFactory.getShape("CIRCLE");
    shape1.draw();

    let shape2 = shapeFactory.getShape("RECTANGLE");
    shape2.draw();

    let shape3 = shapeFactory.getShape("SQUARE");
    shape3.draw();
}

main();