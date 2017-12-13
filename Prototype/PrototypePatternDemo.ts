import {ShapeCache} from "./ShapeCache";

function main(): void {
    ShapeCache.loadCache();

    let clonedShape1 = ShapeCache.getShape(1);
    console.log("Shape : " + clonedShape1.getType());
    clonedShape1.draw();

    let clonedShape2 = ShapeCache.getShape(2);
    console.log("Shape : " + clonedShape2.getType());
    clonedShape2.draw();

    let clonedShape3 = ShapeCache.getShape(3);
    console.log("Shape : " + clonedShape3.getType());
    clonedShape3.draw();
}

main();