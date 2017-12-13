import {FactoryProducer} from "./FactoryProducer";

function main(): void {

    let shapeFactory = FactoryProducer.getFactory("SHAPE");

    let shape1 = shapeFactory.getShape("CIRCLE");
    shape1.draw();

    let shape2 = shapeFactory.getShape("RECTANGLE");
    shape2.draw();

    let shape3 = shapeFactory.getShape("SQUARE");
    shape3.draw();

    let colorFactory = FactoryProducer.getFactory("COLOR");

    let color1 = colorFactory.getColor("RED");
    color1.fill();

    let color2 = colorFactory.getColor("GREEN");
    color2.fill();

    let color3 = colorFactory.getColor("BLUE");
    color3.fill();
}

main();