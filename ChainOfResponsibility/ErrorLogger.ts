import {AbstractLogger} from "./AbstractLogger";

export class ErrorLogger extends AbstractLogger {
    constructor(level: number) {
        super();
        this.level = level;
    }
    write(message: string): void {
        console.log("Error Console::Logger: " + message);
    }
}