import {ShapeFactory} from "./ShapeFactory";
import {Shape} from "./Shape";
import {Circle} from "./Circle";

let colors = [ "Red", "Green", "Blue", "White", "Black" ];

function main(): void {

    for(let i=0; i < 20; i++) {
        let circle = <Circle> ShapeFactory.getCircle(getRandomColor());
        circle.setX(getRandomX());
        circle.setY(getRandomY());
        circle.setRadius(100);
        circle.draw();
    }
}

function getRandomColor():string {
    return colors[Math.floor(Math.random()*colors.length)];
}
function getRandomX(): number {
    return Math.floor(Math.random()*100);
}
function getRandomY(): number {
    return Math.floor(Math.random()*100);
}

main();