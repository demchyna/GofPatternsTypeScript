import {AbstractLogger} from "./AbstractLogger";
import {ErrorLogger} from "./ErrorLogger";
import {FileLogger} from "./FileLogger";
import {ConsoleLogger} from "./ConsoleLogger";

function getChainOfLoggers(): AbstractLogger {

    let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    let fileLogger = new FileLogger(AbstractLogger.DEBUG);
    let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
}

function main(): void {
    let loggerChain = getChainOfLoggers();

    loggerChain.logMessage(AbstractLogger.INFO,
        "This is an information.");

    loggerChain.logMessage(AbstractLogger.DEBUG,
        "This is an debug level information.");

    loggerChain.logMessage(AbstractLogger.ERROR,
        "This is an error information.");
}

main()