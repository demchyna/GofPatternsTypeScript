import {Image} from "./Image";

export class RealImage implements Image {

    private fileName: string;

    display(): void {
        console.log("Displaying " + this.fileName);
    }

    loadFromDisk(fileName: string): void {
        this.fileName = fileName;
        console.log("Loading " + this.fileName);
    }
}