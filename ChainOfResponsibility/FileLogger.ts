import {AbstractLogger} from "./AbstractLogger";

export class FileLogger extends AbstractLogger {
    constructor(level: number) {
        super();
        this.level = level;
    }
    write(message: string): void {
        console.log("File::Logger: " + message);
    }
}