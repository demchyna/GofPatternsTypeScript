import {Color} from "./Color";
import {Shape} from "./Shape";

export abstract class AbstractFactory {
    abstract getColor(color: string): Color;
    abstract getShape(shape: string): Shape ;
}