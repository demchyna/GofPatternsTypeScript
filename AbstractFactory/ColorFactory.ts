import {Shape} from "./Shape";
import {AbstractFactory} from "./AbstractFactory";
import {Color} from "./Color";
import {Red} from "./Red";
import {Green} from "./Green";
import {Blue} from "./Blue";

export class ColorFactory extends AbstractFactory{
    getShape(shapeType: string): Shape {
        return undefined;
    }

    getColor(color: string): Color {
        if(color === "RED") return new Red();
        else if(color === "GREEN") return new Green();
        else if(color === "BLUE") return new Blue();
        else return null;
    }
}