"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserBuilder = /** @class */ (function () {
    function UserBuilder(name) {
        this.userName = name;
    }
    UserBuilder.prototype.getName = function () {
        return this.userName;
    };
    UserBuilder.prototype.age = function (value) {
        this.userAge = value;
        return this;
    };
    UserBuilder.prototype.getAge = function () {
        return this.userAge;
    };
    UserBuilder.prototype.phone = function (value) {
        this.userPhone = value;
        return this;
    };
    UserBuilder.prototype.getPhone = function () {
        return this.userPhone;
    };
    UserBuilder.prototype.address = function (value) {
        this.userAddress = value;
        return this;
    };
    UserBuilder.prototype.getAddress = function () {
        return this.userAddress;
    };
    UserBuilder.prototype.build = function () {
        return new User(this);
    };
    return UserBuilder;
}());
exports.UserBuilder = UserBuilder;
var User = /** @class */ (function () {
    function User(builder) {
        this.name = builder.getName();
        this.age = builder.getAge();
        this.phone = builder.getPhone();
        this.address = builder.getAddress();
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=BuilderPattern.js.map