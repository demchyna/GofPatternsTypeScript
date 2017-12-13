import {Container} from "./Container";
import {Iterator} from "./Iterator";

export class NameRepository implements Container {
    private names: Array<string> = ["Robert" , "John" ,"Julie" , "Lora"];

    getIterator(): Iterator {
        return new NameIterator(this.names);
    }
}
class NameIterator implements Iterator {

    private names: Array<string>
    private index: number;

    constructor(names: Array<string>) {
        this.names = names;
    }

    hasNext(): boolean {
        if(this.index < this.names.length) {
            return true;
        }
        return false;
    }

    next(): any {
        if(this.hasNext()){
            return this.names[this.index++];
        }
        return null;
    }
}