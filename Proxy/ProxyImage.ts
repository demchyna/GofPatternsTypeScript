import {Image} from "./Image";
import {RealImage} from "./RealImage";

export class ProxyImage implements Image {

    private realImage: RealImage;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    display(): void {
        if (this.realImage == null) {
            this.realImage = new RealImage();
            this.realImage.loadFromDisk(this.fileName);
        }
        this.realImage.display();
    }
}