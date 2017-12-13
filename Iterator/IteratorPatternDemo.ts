import {NameRepository} from "./NameRepository";

function main(): void {
    let namesRepository = new NameRepository();

    for(let iterator = namesRepository.getIterator(); iterator.hasNext();) {
        let name = <String> iterator.next();
        console.log("Name : " + name);
    }
}

main();