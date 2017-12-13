import {ProxyImage} from "./ProxyImage";

function main(): void {
    let image = new ProxyImage("test_01.dat");

    //image will be loaded from disk
    image.display();

    //image will not be loaded from disk
    image.display();
}

main();