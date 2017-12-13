import {AbstractFactory} from "./AbstractFactory";
import {ShapeFactory} from "./ShapeFactory";
import {ColorFactory} from "./ColorFactory";

export class FactoryProducer {
    static getFactory(choice: string): AbstractFactory {
        if (choice === "SHAPE") return new ShapeFactory();
        else if (choice === "COLOR") return new ColorFactory();
        else return null;
    }
}