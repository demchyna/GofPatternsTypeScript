import {OperationAdd} from "./OperationAdd";
import {Context} from "./Context";
import {OperationSubstract} from "./OperationSubstract";
import {OperationMultiply} from "./OperationMultiply";

function main(): void {
    let context = new Context(new OperationAdd());
    console.log("10 + 5 = " + context.executeStrategy(10, 5));

    context = new Context(new OperationSubstract());
    console.log("10 - 5 = " + context.executeStrategy(10, 5));

    context = new Context(new OperationMultiply());
    console.log("10 * 5 = " + context.executeStrategy(10, 5));
}

main();