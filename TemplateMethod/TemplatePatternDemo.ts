import {Cricket} from "./Cricket";
import {Football} from "./Football";

function main(): void {
    let game1 = new Cricket();
    game1.play();

    let game2 = new Football();
    game2.play();
}

main();