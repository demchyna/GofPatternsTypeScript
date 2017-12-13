"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NameRepository = /** @class */ (function () {
    function NameRepository() {
        this.names = ["Robert", "John", "Julie", "Lora"];
    }
    NameRepository.prototype.getIterator = function () {
        return new NameIterator(this.names);
    };
    return NameRepository;
}());
exports.NameRepository = NameRepository;
var NameIterator = /** @class */ (function () {
    function NameIterator(names) {
        this.names = names;
    }
    NameIterator.prototype.hasNext = function () {
        if (this.index < this.names.length) {
            return true;
        }
        return false;
    };
    NameIterator.prototype.next = function () {
        if (this.hasNext()) {
            return this.names[this.index++];
        }
        return null;
    };
    return NameIterator;
}());
//# sourceMappingURL=NameRepository.js.map