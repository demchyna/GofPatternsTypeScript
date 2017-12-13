"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractLogger_1 = require("./AbstractLogger");
var ErrorLogger_1 = require("./ErrorLogger");
var FileLogger_1 = require("./FileLogger");
var ConsoleLogger_1 = require("./ConsoleLogger");
function getChainOfLoggers() {
    var errorLogger = new ErrorLogger_1.ErrorLogger(AbstractLogger_1.AbstractLogger.ERROR);
    var fileLogger = new FileLogger_1.FileLogger(AbstractLogger_1.AbstractLogger.DEBUG);
    var consoleLogger = new ConsoleLogger_1.ConsoleLogger(AbstractLogger_1.AbstractLogger.INFO);
    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);
    return errorLogger;
}
function main() {
    var loggerChain = getChainOfLoggers();
    loggerChain.logMessage(AbstractLogger_1.AbstractLogger.INFO, "This is an information.");
    loggerChain.logMessage(AbstractLogger_1.AbstractLogger.DEBUG, "This is an debug level information.");
    loggerChain.logMessage(AbstractLogger_1.AbstractLogger.ERROR, "This is an error information.");
}
main();
//# sourceMappingURL=ChainPatternDemo.js.map