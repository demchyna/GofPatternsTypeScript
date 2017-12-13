import {Color} from "./Color";

export class Blue implements Color {
    fill(): void {
        console.log("Inside Blue::fill() method.");
    }
}