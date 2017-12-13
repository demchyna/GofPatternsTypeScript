import {SingleObject} from "./SingleObject";

function main(): void {
    let singleObject1 = SingleObject.getInstance();
    let singleObject2 = SingleObject.getInstance();

    singleObject1.setMessage("Hello first Single Object!");
    singleObject2.setMessage("Hello second Single Object!");

    console.log(singleObject1.getMessage());
    console.log(singleObject2.getMessage());
}

main();