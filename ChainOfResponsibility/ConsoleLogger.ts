import {AbstractLogger} from "./AbstractLogger";

export class ConsoleLogger extends AbstractLogger {
    constructor(level: number) {
        super();
        this.level = level;
    }
    write(message: string): void {
        console.log("Standard Console::Logger: " + message);
    }
}